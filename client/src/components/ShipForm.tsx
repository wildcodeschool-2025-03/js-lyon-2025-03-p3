import "./ShipForm.css";
import { useState } from "react";

function ShipForm() {
  const baseURL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    name: "",
    catchphrase: "",
  });

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    fetch(`${baseURL}/api/ships`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      response.json();
      setFormData({ name: "", catchphrase: "" });
      console.log(formData, "formdata");
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
