import "./ShipForm.css";
import { useNavigate } from "react-router";

function ShipForm() {
  const baseURL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const formData = {
      name: form.get("name") as string,
      catchphrase: form.get("catchphrase") as string,
    };

    fetch(`${baseURL}/api/ships`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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
      />
      {/* image input will come here */}
      <input
        id="input-catchphrase"
        placeholder="Votre slogan"
        type="text"
        name="catchphrase"
      />
      <button id="button-addShip" type="submit">
        Créez votre offre
      </button>
    </form>
  );
}

export default ShipForm;
