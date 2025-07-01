import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type User = {
  id: number;
  email: string;
  password: string;
  is_admin: boolean;
};

class UserRepository {
  // The C of CRUD - Create operation

  async create(user: Omit<User, "id" | "is_admin">) {
    // Execute the SQL INSERT query to add a new ship to the "ship" table
    const [result] = await databaseClient.query<Result>(
      "insert into user (email, password ) values (?, ?)",
      [user.email, user.password],
    );

    // Return the ID of the newly inserted ship
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific ship by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the ship
    return rows[0] as User;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all ships from the "ship" table
    const [rows] = await databaseClient.query<Rows>("select * from user");

    // Return the array of ships
    return rows as User[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item: Item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new UserRepository();
