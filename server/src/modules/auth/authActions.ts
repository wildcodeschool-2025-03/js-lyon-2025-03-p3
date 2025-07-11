import argon2 from "argon2";
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";

// Import access to data
import userRepository from "../user/userRepository";

const login: RequestHandler = async (req, res, next) => {
  try {
    const user = await userRepository.readByEmail(req.body.email);

    if (user === null) {
      console.info("user not found");
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(
      user.hashed_password,
      req.body.password,
    );

    if (!verified) {
      console.info("email address and password aren't matching");
      res.sendStatus(422);
      return;
    }

    const { hashed_password, ...userWithoutHashedPassword } = user;

    const myPayload: JwtPayload = {
      sub: user.id.toString(),
      isAdmin: user.is_admin,
    };

    const token = jwt.sign(myPayload, process.env.APP_SECRET as string, {
      expiresIn: "1h",
    });

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000, // 1 jour
    });

    res.json({
      user: userWithoutHashedPassword,
      message: "Login successful",
    });

    console.info(`credentials matching, welcome ${user.email}`);
  } catch (err) {
    next(err);
  }
};

const logout: RequestHandler = (req, res) => {
  res
    .clearCookie("auth_token", {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    })
    .clearCookie("email", { httpOnly: true, sameSite: "strict", secure: true })
    .status(200)
    .json({ message: "Déconnexion réussie" });
};

export default { login, logout };
