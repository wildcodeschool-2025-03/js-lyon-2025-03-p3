import LoginForm from "../components/LoginForm";
import CreateUser from "../components/createUser";
import "./Connection.css";

function Connection() {
  return (
    <section className="connection-register">
      <h2>Connectez-vous</h2>
      <LoginForm />
      <h2>Ou bien créez un compte</h2>
      <CreateUser />
    </section>
  );
}
export default Connection;
