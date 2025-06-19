import "./ShipForm.css";
function ShipForm() {
  return (
    <form className="ship-form">
      <input
        id="input-shipName"
        placeholder="Nom du vaisseau"
        type="text"
        name="name"
      />
      {/* Next will be the image input */}
      <input
        id="input-catchphrase"
        placeholder="Votre slogan"
        type="text"
        name="catchphrase"
      />
      <button id="button-addShip" type="submit">
        Creez votre offre
      </button>
    </form>
  );
}
export default ShipForm;
