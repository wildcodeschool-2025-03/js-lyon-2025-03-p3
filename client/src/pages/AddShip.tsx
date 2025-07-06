import ShipForm from "../components/ShipForm";
import "./AddShip.css";

function AddShip() {
  return (
    <>
      <section className="addShip-wrapper">
        <h2 className="addShip-title">Ajoutez votre vaisseau spatial</h2>
        <ShipForm />
      </section>
    </>
  );
}

export default AddShip;
