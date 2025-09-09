import { toast } from "react-toastify";
import "./ShipForm.css";
import { useNavigate } from "react-router";

function ShipForm() {
  const baseURL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //FormData => Browser API who will prepare our form datas (files or not) before sending it to the back.
    const form = new FormData(event.currentTarget);

    await fetch(`${baseURL}/api/ships`, {
      method: "POST",
      body: form,
      credentials: "include",
    });

    navigate("/");
    toast.success("Vaisseau ajouté avec succès", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  return (
    <form className="ship-form" onSubmit={handleSubmit}>
      <div className="label-wrapper">
        <label htmlFor="input-shipName">Nom du vaisseau *</label>
        <input
          id="input-shipName"
          placeholder="Nom du vaisseau"
          type="text"
          name="name"
          required
        />
      </div>
      <div className="label-wrapper">
        <label htmlFor="input-catchphrase">Phrase d'accroche *</label>
        <input
          id="input-catchphrase"
          placeholder="Votre slogan"
          type="text"
          name="catchphrase"
          required
        />
      </div>
      <div className="label-wrapper inputFile">
        <label htmlFor="input-img">Envoyez votre image *</label>
        <input id="input-img" type="file" name="image" required />
      </div>
      <div className="label-wrapper">
        <label htmlFor="input-quantity">Quantité *</label>
        <input
          id="input-quantity"
          placeholder="Quantité"
          type="number"
          min="1"
          max="10"
          name="quantity"
          required
        />
      </div>
      <button id="button-addShip" type="submit">
        Créez votre offre
      </button>
    </form>
  );
}

export default ShipForm;
