import { useNavigate } from "react-router";

function RentForm() {
  const baseURL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const formData = {
      shipid: form.get("shipid") as string,
    };

    await fetch(`${baseURL}/api/rent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    navigate("/");
  };

  return (
    <div>
      <p> Votre vaisseau et ces services complémentaires sont prêts </p>
      <form onSubmit={handleSubmit}>
        <h3>Information des passagers</h3>

        <div>
          <label htmlFor="name"> User:</label>

          <input type="text" id="user" name="user" required />
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default RentForm;
