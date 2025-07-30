import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import shipActions, { upload } from "./modules/ship/shipActions";

router.get("/api/ships", shipActions.browse);
router.get("/api/ships/:id", shipActions.read);
router.get("/api/available/ship/:id", shipActions.shipAvailable);
router.post("/api/ships", verifyToken, upload.single("image"), shipActions.add);
router.delete("/api/ships/:id", shipActions.remove);

/* ************************************************************************* */

import authActions from "./modules/auth/authActions";

router.post("/api/login", authActions.login);
router.post("/api/logout", authActions.logout);
// router.post("/api/auth", verifyToken, userActions.add);

import userActions from "./modules/user/userActions";

router.get("/api/users", userActions.browse);
router.get("/api/users/:id", userActions.read);
router.post("/api/users", userActions.hashPassword, userActions.add);
router.post("/api/rent", verifyToken, userActions.rentShip);
router.get("/api/rent/:id", userActions.readRent);

import verifyToken from "./middlewares/verifiyToken";

router.get("/api/me", verifyToken, (req, res) => {
  res.json(req.user);
});
router.get("/api/auth", verifyToken, userActions.read);

/*import stripeWebhook from "./modules/stripe/stripeWebhook";
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook,
);
*/
export default router;
