import { useNavigate } from "react-router";

type Props = {
  onLogout: () => void;
};

function LogoutButton({ onLogout }: Props) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await fetch("http://localhost:3310/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Important pour envoyer les cookies
    });

    // Optionnel : redirection ou message
    console.info("Déconnecté");
    onLogout();
    navigate("/connexion");
  };

  return (
    <div>
      <button type="button" onClick={handleLogout}>
        Se déconnecter
      </button>
    </div>
  );
}

export default LogoutButton;
