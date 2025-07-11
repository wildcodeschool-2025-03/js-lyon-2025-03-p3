import { useOutletContext } from "react-router";
import { useNavigate } from "react-router";
import "../components/LoginForm.css";

type User = {
  id: number;
  email: string;
  is_admin: boolean;
};

type Auth = {
  user: User;
  token: string;
};

function LoginForm() {
  const baseURL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const { setAuth } = useOutletContext() as {
    auth: Auth | null;
    setAuth: (auth: Auth | null) => void;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const formData = {
      email: form.get("email") as string,
      password: form.get("password") as string,
    };

    try {
      const response = await fetch(`${baseURL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Identifiants invalides");
      }

      const data = await response.json();
      setAuth(data);

      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Erreur de connexion");
    }
  };

  return (
    <section className="section-login">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="credentials-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Votre email"
            required
          />
        </div>
        <div className="credentials-input">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Votre mot de passe"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default LoginForm;
