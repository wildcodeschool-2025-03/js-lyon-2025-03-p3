import { useState } from "react";
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

  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [strengthColor, setStrengthColor] = useState("black");

  function evaluatePasswordAndStrength(password: string) {
    let score = 0;

    if (!password) return "";

    // Check password length
    if (password.length > 8) score += 1;
    // Contains lowercase
    if (/[a-z]/.test(password)) score += 1;
    // Contains uppercase
    if (/[A-Z]/.test(password)) score += 1;
    // Contains numbers
    if (/\d/.test(password)) score += 1;
    // Contains special characters
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    switch (score) {
      case 0:
      case 1:
      case 2:
        setStrengthColor("red");
        return "faible";
      case 3:
        setStrengthColor("orange");
        return "moyen";
      case 4:
      case 5:
        setStrengthColor("green");
        return "fort";
      default:
        return "";
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setPassword(value);
    setStrength(evaluatePasswordAndStrength(value));
  };
  return (
    <section className="section-register">
      <h2>Ou bien créez un compte</h2>

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
            value={password}
            onChange={handleChange}
            required
          />
          <small>
            Votre mot de passe est{" "}
            <span
              style={{
                fontWeight: "bold",
                color: strengthColor,
              }}
            >
              {strength}
            </span>
          </small>
        </div>
        <button type="submit">Créer le Compte </button>
      </form>
    </section>
  );
}
export default CreateUser;
