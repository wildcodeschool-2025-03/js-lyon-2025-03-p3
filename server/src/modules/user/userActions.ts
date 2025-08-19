import argon2 from "argon2";
import type { RequestHandler } from "express";
import type { NextFunction, Request, Response } from "express";
import type { JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import shipRepository from "../ship/shipRepository";
import userRepository from "./userRepository";

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  // Extraction du mot de passe de la requête
  const { password } = req.body;

  if (!password) {
    res.status(400).json({ message: "Le mot de passe est requis" });
    return;
  }
  // Vérification: le mot de passe doit contenir plus de 8 caractères.
  if (password.length < 8) {
    res
      .status(400)
      .json({ message: "Le mot de passe doit contenir au moins 8 caractères" });
    return;
  }
  // Hachage du mot de passe avec les options spécifiées
  const hashedPassword = await argon2.hash(password, hashingOptions);

  // Remplacement du mot de passe non haché par le mot de passe haché dans la requête
  req.body.hashed_password = hashedPassword;

  // Oubli du mot de passe non haché de la requête : il restera un secret même pour notre code dans les autres actions
  req.body.password = undefined;

  next();
};

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const user = await userRepository.readAll();

    // Respond with the users in JSON format
    res.json(user);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const browseRent: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const rent = await userRepository.readRent();

    // Respond with the users in JSON format
    res.json(rent);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies.auth_token;

    // Fetch a specific user based on the provided ID

    const payload = jwt.verify(
      token,
      process.env.APP_SECRET as string,
    ) as JwtPayload;
    const userId = Number(payload.sub);
    const user = await userRepository.read(userId);
    const isAdmin = user.is_admin;
    const firstname = user.firstname;
    const lastname = user.lastname;

    const email = user.email;
    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (user === null) {
      res.sendStatus(404);
    }
    res.status(201).json({
      message: "Infos utilisateur",
      user: { isAdmin, email, firstname, lastname },
    });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const readRent: RequestHandler = async (req, res, next) => {
  try {
    const shipId = Number(req.params.id);
    const ship = await userRepository.read(shipId);
    if (!ship) {
      res.sendStatus(404);
      return;
    }

    // Récupère les réservations
    const rentCount = await userRepository.readRentSingle(shipId);
    res.json(rentCount);
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the user data from the request body
    const newuser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      hashed_password: req.body.hashed_password,
      is_admin: false,
    };

    // Create the user
    const insertId = await userRepository.create(newuser);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId, newuser });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const rentShip: RequestHandler = async (req, res, next) => {
  try {
    // Check credentials + ship id
    const token = req.cookies.auth_token;
    const payload = jwt.verify(
      token,
      process.env.APP_SECRET as string,
    ) as JwtPayload;

    const userId = Number(payload.sub);
    const shipId = Number(req.body.shipId);

    if (!userId || !shipId) {
      res.status(400).json({ error: "Paramètres manquants" });
    }

    // Check availability
    const ship = await shipRepository.shipAvailable(shipId);

    if (
      !ship ||
      ship.ship_available === undefined ||
      ship.ship_available <= 0
    ) {
      res.status(400).json({ error: "Vaisseau indisponible" });
    }

    // 3. Create rent
    const insertId = await userRepository.createRent(shipId, userId);

    res.status(201).json({
      message: "Réservation confirmée",
      rent: {
        user_id: userId,
        ship_id: shipId,
        insertId,
      },
    });
  } catch (err) {
    next(err);
  }
};
export default {
  browse,
  read,
  add,
  hashPassword,
  rentShip,
  browseRent,
  readRent,
};
