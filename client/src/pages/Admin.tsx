import { useEffect, useState } from "react";
import { AdminDashboard } from "../components/AdminDashboard";
import "./Admin.css";
import { Link } from "react-router";
import "../components/Header.css";

interface User {
  email: string;
  firstname: string;
  lastname: string;
  isAdmin: boolean;
}
function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const baseURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        fetch(`${baseURL}/api/auth`, {
          credentials: "include", // send the cookie to the server to verify the credentials
        })
          .then((res) => res.json())
          .then((data) => setUser(data.user));
      } catch (err) {}
    };

    checkAuth();
  }, []);

  return user?.isAdmin ? (
    <>
      <section className="header">
        <ul className="headerNavBarAdmin base-render">
          <li>
            <Link to="/addship">Ajouter un vaisseau</Link>
          </li>
          <li>
            <Link to="/deleteship">Supprimer un vaisseau</Link>
          </li>
        </ul>
      </section>
      <section className="admin-page">
        <div className="admin-page-infos">
          {" "}
          <AdminDashboard
            email={user?.email}
            firstname={user?.firstname}
            lastname={user?.lastname}
            isAdmin={user?.isAdmin}
          />{" "}
        </div>
      </section>
    </>
  ) : (
    <section className="admin-page">
      <div className="admin-page-infos">
        {" "}
        Vous n'avez pas les droits d'accès à cette page.
      </div>
    </section>
  );
}

export default Admin;
