import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies?.auth_token;

  if (!token) {
    res.sendStatus(401);
    return;
  }

  const secret = process.env.APP_SECRET;
  if (!secret) {
    console.error("JWT secret is not defined");
    res.sendStatus(500); // Erreur serveur si la variable est absente
    return;
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    res.sendStatus(403);
  }
};

export default verifyToken;
