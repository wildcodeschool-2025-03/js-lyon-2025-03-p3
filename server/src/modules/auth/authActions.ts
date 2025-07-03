import type { RequestHandler } from "express";

import argon2 from "argon2";

// Import access to data
import userRepository from "../user/userRepository";

const login: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided email
    const user = await userRepository.readByEmailWithPassword(req.body.email);

    if (user == null) {
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
      res.json(userWithoutHashedPassword);
      //console info to help visualize the process
      console.info("credential matching");
    } else {
      console.info("email adress or password not matching");
      res.sendStatus(422);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
export default { login };
