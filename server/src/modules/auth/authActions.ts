import argon2 from "argon2";
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";

// Import access to data
import userRepository from "../user/userRepository";

const login: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided email
    const user = await userRepository.readByEmailWithPassword(req.body.email);

    if (user === null) {
      console.info("user not found");
      res.sendStatus(422);
      return;
    }
    //checking if the passwords are matching by hashing the password in the request with the same parameters than the one in our database
    const verified = await argon2.verify(
      user.hashed_password,
      req.body.password,
    );

    if (verified) {
      //destructuring the user, extracting the password and using all the other element in our response, the last element with ... will contain all the elements we didn't extract, in our case : id, email, is_admin
      const { hashed_password, ...userWithoutHashedPassword } = user;
      const myPayload: JwtPayload = {
        sub: user.id.toString(),
        isAdmin: user.is_admin,
      };

      const token = await jwt.sign(
        myPayload,
        process.env.APP_SECRET as string,
        {
          expiresIn: "1h",
        },
      );
      res.json({
        token,
        user: userWithoutHashedPassword,
      }); //console info to help visualize the process
      console.info(
        `credentials matching, welcome ${user.email} your token : ${token}`,
      );
    } else {
      console.info("email adress and password aren't matching");
      res.sendStatus(422);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
export default { login };
