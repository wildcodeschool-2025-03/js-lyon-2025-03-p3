import argon2 from "argon2";
import type { RequestHandler } from "express";
// Import access to data
import userRepository from "./userRepository";

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword: RequestHandler = async (req, res, next) => {
  try {
    // Extraction du mot de passe de la requête
    const { password } = req.body;

    // Hachage du mot de passe avec les options spécifiées
    const hashedPassword = await argon2.hash(password, hashingOptions);

    // Remplacement du mot de passe non haché par le mot de passe haché dans la requête
    req.body.hashed_password = hashedPassword;

    // Oubli du mot de passe non haché de la requête : il restera un secret même pour notre code dans les autres actions
    req.body.password = undefined;

    next();
  } catch (err) {
    next(err);
  }
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

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific user based on the provided ID
    const userId = Number(req.params.id);
    const user = await userRepository.read(userId);

    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the user data from the request body
    const newuser = {
      email: req.body.email,
      hashed_password: req.body.hashed_password,
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

export default { browse, read, add, hashPassword };
