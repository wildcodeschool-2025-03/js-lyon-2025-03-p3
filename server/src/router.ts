import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import shipActions, { upload } from "./modules/ship/shipActions";

router.get("/api/ships", shipActions.browse);
router.get("/api/ships/:id", shipActions.read);
router.post("/api/ships", upload.single("image"), shipActions.add);

/* ************************************************************************* */

export default router;
