import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import shipActions from "./modules/ship/shipActions";

router.get("/api/ships", shipActions.browse);
router.get("/api/ships/:id", shipActions.read);
router.post("/api/ships", shipActions.add);

/* ************************************************************************* */

export default router;
