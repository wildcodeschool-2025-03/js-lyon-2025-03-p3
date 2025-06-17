import type { RequestHandler } from "express";

// Import access to data
import shipRepository from "./shipRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const ships = await shipRepository.readAll();

    // Respond with the ships in JSON format
    res.json(ships);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific ship based on the provided ID
    const shipId = Number(req.params.id);
    const ship = await shipRepository.read(shipId);

    // If the ship is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the ship in JSON format
    if (ship == null) {
      res.sendStatus(404);
    } else {
      res.json(ship);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the ship data from the request body
    const newship = {
      name: req.body.name,
      catchphrase: req.body.catchphrase,
    };

    // Create the ship
    const insertId = await shipRepository.create(newship);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add };
