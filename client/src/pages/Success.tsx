import { Link } from "react-router";
import Header from "../components/Header"; // Si ton header est un composant global
import "./Success.css";

function Success() {
  return (
    <>
      <Header />
      <section className="success-container">
        <h2>🎉 Paiement réussi !</h2>
        <p>Merci pour votre réservation de vaisseau. 🚀</p>
        <p>Vous recevrez une confirmation par email.</p>

        <Link to="/" className="btn-home">
          Retour à l'accueil
        </Link>
      </section>
    </>
  );
}

export default Success;
