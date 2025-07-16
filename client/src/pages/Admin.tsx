import { useEffect, useState } from "react";
import NotAuth from "../components/NotAuth";

function Admin() {
  const [isAuth, setIsAuth] = useState(Boolean);
  const baseURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`${baseURL}/api/me`, {
          credentials: "include", // send the cookie to the server to verify the credentials
        });

        if (res.ok) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (err) {
        setIsAuth(false);
      }
    };

    checkAuth();
  }, []);
  return isAuth ? <h2>Page Admin</h2> : <NotAuth />;
}

export default Admin;
