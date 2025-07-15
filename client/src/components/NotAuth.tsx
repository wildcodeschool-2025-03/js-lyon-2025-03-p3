import CreateUser from "./CreateUser";
import LoginForm from "./LoginForm";
import "../components/LoginForm.css";
import "../components/CreateUser.css";

function NotAuth() {
  return (
    <section className="connection-register">
      <h2>Veuillez vous connecter pour acceder à cette page</h2>
      <LoginForm />
      <h2>Ou bien créez un compte</h2>
      <CreateUser />
    </section>
  );
}

export default NotAuth;
