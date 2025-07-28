import { useEffect, useState } from "react";
import ShipForm from "../components/ShipForm";
import "./AddShip.css";
import NotAuth from "../components/NotAuth";

function AddShip() {
  const [isAuth, setIsAuth] = useState(Boolean);
  const baseURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`${baseURL}/api/me`, {
          credentials: "include", // send the cookie to the server to verify the credentials
        });
        console.info(res);
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
  return isAuth ? (
    <section className="addShip-wrapper">
      <h2 className="addShip-title">Ajoutez votre vaisseau spatial</h2>
      <ShipForm />
    </section>
  ) : (
    <NotAuth />
  );
}

export default AddShip;
