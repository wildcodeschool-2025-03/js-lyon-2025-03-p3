import express from "express";
import Stripe from "stripe";
import verifyToken from "../../middlewares/verifiyToken";
import rentRepository from "../rent/rentRepository";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

router.post("/api/create-checkout-session", verifyToken, async (req, res) => {
  console.log(req.body, "SHIP ID");
  console.log(req.user, "USER INFORMATION");
  if (!req.user || !req.user.sub) {
    res.status(401).json({ message: "Missing user from token" });
    return;
  }
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Location de vaisseau",
            },
            unit_amount: 50000000, // Prix en centimes (50€)
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
      metadata: {
        userId: req.user.sub as string,
        shipId: req.body.shipId,
      },
    });
    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Impossible de créer la session Stripe" });
  }
});

export default router;
