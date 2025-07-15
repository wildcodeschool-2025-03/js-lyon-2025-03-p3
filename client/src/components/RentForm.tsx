import "./RentForm.css";

interface ShipProps {
  id: number;
}

function RentForm({ id }: ShipProps) {
  const baseURL = import.meta.env.VITE_API_URL;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("form soumis");
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
        console.log("Server response :", res);
        return res.json();
      })
      .catch((err) => {
        console.error("Network error :", err);
      });
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
