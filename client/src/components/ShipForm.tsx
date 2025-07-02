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
    });

    navigate("/");
  };

  return (
    <form className="ship-form" onSubmit={handleSubmit}>
      <input
        id="input-shipName"
        placeholder="Nom du vaisseau"
        type="text"
        name="name"
        required
      />
      <input
        id="input-img"
        placeholder="Nom du vaisseau"
        type="file"
        name="image"
        required
      />
      <input
        id="input-catchphrase"
        placeholder="Votre slogan"
        type="text"
        name="catchphrase"
        required
      />
      <button id="button-addShip" type="submit">
        Créez votre offre
      </button>
    </form>
  );
}

export default ShipForm;
