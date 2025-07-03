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
import authActions from "./modules/auth/authActions";

router.post("/api/login", authActions.login);

import userActions from "./modules/user/userActions";

router.get("/api/users", userActions.browse);
router.get("/api/users/:id", userActions.read);
router.post("/api/users", userActions.hashPassword, userActions.add);

export default router;
