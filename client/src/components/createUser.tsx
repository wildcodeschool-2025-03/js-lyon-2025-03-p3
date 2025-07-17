import { useNavigate } from "react-router";
import "../components/CreateUser.css";

function CreateUser() {
  const baseURL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const formData = {
      email: form.get("email") as string,
      password: form.get("password") as string,
    };

    fetch(`${baseURL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    navigate("/");
  };

  return (
    <section className="section-register">
      <form onSubmit={handleSubmit} className="register-form">
        <div className="credentials-input">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Votre email"
            type="email"
            id="input-email"
            name="email"
            required
          />
        </div>
        <div className="credentials-input">
          <label htmlFor="password">Mot de passe</label>
          <input
            placeholder="Votre mot de passe"
            type="password"
            id="input-password"
            name="password"
            required
          />{" "}
        </div>
        <button type="submit">Créer le Compte </button>
      </form>
    </section>
  );
}
export default CreateUser;
