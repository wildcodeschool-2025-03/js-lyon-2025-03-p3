import LoginForm from "../components/LoginForm";
import CreateUser from "../components/createUser";
import "./Connection.css";
import "../components/CreateUser.css";
import "../components/LoginForm.css";

function Connection() {
  return (
    <section className="connection-register">
      <LoginForm />
      <CreateUser />
    </section>
  );
}
export default Connection;
