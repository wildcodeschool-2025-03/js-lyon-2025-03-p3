import "./ShipForm.css";
import { useState } from "react";

function ShipForm() {
  const baseURL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    name: "",
    catchphrase: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((dataChanges) => ({ ...dataChanges, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch(`${baseURL}/api/ships`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };
  return (
    <form className="ship-form" onSubmit={handleSubmit}>
      <input
        id="input-shipName"
        placeholder="Nom du vaisseau"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      {/* Next will be the image input */}
      <input
        id="input-catchphrase"
        placeholder="Votre slogan"
        type="text"
        name="catchphrase"
        value={formData.catchphrase}
        onChange={handleChange}
      />
      <button id="button-addShip" type="submit">
        Creez votre offre
      </button>
    </form>
  );
}
export default ShipForm;
