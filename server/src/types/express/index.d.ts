import type { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    export interface Request {
      user?: string | JwtPayload;
      /* ************************************************************************* */
      // Add your custom properties here, for example:
      //
      // user?: { ... }
      /* ************************************************************************* */
    }
  }
}
