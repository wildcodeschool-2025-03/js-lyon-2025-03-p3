import { useEffect, useState } from "react";
import NotAuth from "../components/NotAuth";
import ShipForm from "../components/ShipForm";
import "./AddShip.css";

function AddShip() {
  const [isAuth, setIsAuth] = useState<"loading" | "auth" | "unauth">(
    "loading",
  );
  const baseURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${baseURL}/api/me`, {
          credentials: "include",
        });

        if (res.ok) {
          setIsAuth("auth");
        } else {
          setIsAuth("unauth");
        }
      } catch {
        setIsAuth("unauth");
      }
    })();
  }, []);

  if (isAuth === "loading") {
    return <p>Chargement…</p>;
  }

  return isAuth === "auth" ? (
    <section className="addShip-wrapper">
      <h2 className="addShip-title">Ajoutez votre vaisseau spatial</h2>
      <ShipForm />
    </section>
  ) : (
    <NotAuth />
  );
}

export default AddShip;
