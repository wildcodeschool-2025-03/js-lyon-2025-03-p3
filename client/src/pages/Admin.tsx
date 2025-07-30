import { useEffect, useState } from "react";
import { AdminDashboard } from "../components/AdminDashboard";
import "./Admin.css";

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
  console.info("isAdmin ?", user?.email);
  return user?.isAdmin ? (
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
