import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Ship = {
  name: string;
  image: string;
  catchphrase: string;
  quantity: number;
  ship_available?: number;
};

class ShipRepository {
  // The C of CRUD - Create operation

  async create(ship: Omit<Ship, "id">) {
    // Execute the SQL INSERT query to add a new ship to the "ship" table
    const [result] = await databaseClient.query<Result>(
      "insert into ship (name, image, catchphrase, quantity) values (?, ?, ?, ?)",
      [ship.name, ship.image, ship.catchphrase, ship.quantity],
    );

    // Return the ID of the newly inserted ship
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific ship by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from ship where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the ship
    return rows[0] as Ship;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all ships from the "ship" table
    const [rows] = await databaseClient.query<Rows>("select * from ship");
    // Return the array of ships
    return rows as Ship[];
  }

  async delete(id: number) {
    // Execute the SQL DELETE query to remove a ship from the "ship" table
    const [result] = await databaseClient.query<Result>(
      "delete from ship where id = ?",
      [id],
    );

    // Return the ID of the newly inserted ship
    return result.affectedRows;
  }

  async shipAvailable(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `
   select ship.id, ship.quantity - COUNT(ship_id) as ship_available, ship.name 
from ship
left join rent on ship_id = ship.id
where ship.id = ?
  `,
      [id],
    );

    return rows[0] as Ship;
  }

  async markAsBooked(id: number) {
    const [result] = await databaseClient.query<Result>(
      `
    UPDATE ship SET quantity = quantity - 1 WHERE id = ? AND quantity > 0
    `,
      [id],
    );

    return result.affectedRows;
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

export default new ShipRepository();
