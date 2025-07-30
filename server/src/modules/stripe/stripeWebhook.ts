import type { Request, Response } from "express";
import Stripe from "stripe";
import rentRepository from "../rent/rentRepository";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-06-30.basil",
});

const stripeWebhook = async (req: Request, res: Response): Promise<void> => {
  const sig = req.headers["stripe-signature"] as string;
  console.log("WEB HOOK FROM STRIPE !");
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string,
    );
  } catch (err) {
    console.error("Erreur de vérification du webhook :", err);
    res.status(400).send(`Webhook Error: ${(err as Error).message}`);
    return;
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const shipId = session.metadata?.shipId;
    const userId = session.metadata?.userId;

    if (!shipId || !userId) {
      console.log(session.metadata, "[SESSION] META DATA ");
      console.warn(
        "Pas d'ID de vaisseau ou d'utilisateur trouvé dans metadata.",
      );
      res.status(400).send("Missing ship or User ID.");
      return;
    }

    try {
      await rentRepository.create(userId, shipId);
      console.info("Paiement validé et base de donnée mise à jours !");
    } catch (err) {
      console.error("Erreur lors de la mise à jour du vaisseau :", err);
      res.status(500).send("Internal server error");
      return;
    }
  } else {
    console.log(`Unhandled event type ${event.type}`);
  }
  res.status(200).json({ received: true });
};

export default stripeWebhook;
