import { useNavigate } from "react-router";

function LoginForm() {
  const baseURL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const formData = {
      email: form.get("email") as string,
      password: form.get("password") as string,
    };

    console.info(formData); // vérifie que tout est bon

    fetch(`${baseURL}/api/login`, {
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
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
