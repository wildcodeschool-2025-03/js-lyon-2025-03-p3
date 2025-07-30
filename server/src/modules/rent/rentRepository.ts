import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

class RentRepository {
  async create(userID: string, shipID: string) {
    if (!userID || !shipID) {
      throw Error("MISSING PARAMETER");
    }
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO rent (user_id, ship_id) values (?, ?)",
      [userID, shipID],
    );
    return result.insertId;
  }
}

export default new RentRepository();
