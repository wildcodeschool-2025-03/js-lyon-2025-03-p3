import path from "node:path";
import type { RequestHandler } from "express";
import multer from "multer";

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

/* Setting up Multer and and the target repository */
const storage = multer.diskStorage({
  //indicate the route to our upload folder from this file
  destination: path.join(__dirname, "../../../upload"),
  filename: (_req, _file, callBack) => {
    //creating a new unique name composer of 19 characters because multer doesn't provide the file extension by default
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 10)}.jpg`;
    // callback takes 2 parameters, first one is error management, Null because shouldn't get one, and second is the unique name we've created.
    callBack(null, uniqueName);
  },
});
//exporting the middleware in order ti use it in our router.ts
export const upload = multer({ storage });

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the ship data from the request body
    const newship = {
      name: req.body.name,
      image: `/upload/${req.file?.filename}`,
      catchphrase: req.body.catchphrase,
    };

    // Create the ship
    const insertId = await shipRepository.create(newship);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId, newship });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add };
