import { useNavigate } from "react-router";
import "./RentForm.css";

interface ShipProps {
  id: number;
}

function RentForm({ id }: ShipProps) {
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_API_URL;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      shipId: id,
    };
    fetch(`${baseURL}/api/rent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.error("Network error :", err);
      });
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit} className="rent-form">
      <input
        placeholder="Votre email"
        type="email"
        id="input-email"
        name="email"
        required
      />
      <button type="submit">Confirmez votre location</button>
    </form>
  );
}

export default RentForm;
