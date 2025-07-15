import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type User = {
  id: number;
  email: string;
  hashed_password: string;
  is_admin: boolean;
};
type Rent = {
  id: number;
  user_id: number;
  ship_id: number;
  rent_time: Date;
};

class UserRepository {
  // The C of CRUD - Create operation

  async create(user: Omit<User, "id" | "is_admin">) {
    // Execute the SQL INSERT query to add a new ship to the "ship" table
    const [result] = await databaseClient.query<Result>(
      "insert into user (email, hashed_password ) values (?, ?)",
      [user.email, user.hashed_password],
    );
    // Return the ID of the newly inserted ship
    return result.insertId;
  }

  async createRent(shipId: number, userId: number) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO rent(user_id, ship_id) VALUES (?, ?)",
      [userId, shipId],
    );
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

  async readByEmail(email: string) {
    // Execute the SQL SELECT query to retrieve a specific user by its email
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where email = ?",
      [email],
    );
    // Return the first row of the result, which represents the user
    return rows[0] as User;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all ships from the "ship" table
    const [rows] = await databaseClient.query<Rows>("select * from user");
    // Return the array of ships
    return rows as User[];
  }

  async readRent() {
    // Execute the SQL SELECT query to retrieve all ships from the "ship" table
    const [rows] = await databaseClient.query<Rows>("select * from rent");
    // Return the array of ships
    return rows as Rent[];
  }

  async readRentSingle(shipId: number) {
    // Execute the SQL SELECT query to retrieve all ships from the "ship" table
    const [rows] = await databaseClient.query<Rows>(
      "select * from rent where ship_id = ?",
      [shipId],
    );
    // Return the array of ships
    return rows as Rent[];
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
