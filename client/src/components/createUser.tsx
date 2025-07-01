import { useNavigate } from "react-router";

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
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="votre email"
          type="email"
          id="input-email"
          name="email"
          required
        />
      </div>

      <input
        placeholder="votre mot de passe"
        type="password"
        id="input-password"
        name="password"
        required
      />
      <button type="submit">Créer le Compte </button>
    </form>
  );
}
export default CreateUser;
