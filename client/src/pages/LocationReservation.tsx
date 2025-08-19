import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import ShipCard from "../components/ShipCard";
import "./LocationReservation.css";
import CheckoutButton from "../components/CheckoutButton";
import NotAuth from "../components/NotAuth";

interface ShipProps {
  id: number;
  name: string;
  image: string;
}
export default function LocationReservation() {
  const params = useParams();
  const shipID = params.id;
  useEffect(() => {
    fetch(`${baseURL}/api/available/ship/${shipID}`)
      .then((response) => response.json())
      .then((data) => {
        setAvailability(data.ship_available);
      });
  }, [shipID]);
  const [availability, setAvailability] = useState<number>(0);
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

  const [ship, setShip] = useState<ShipProps | null>(null);

  useEffect(() => {
    fetch(`${baseURL}/api/ships/${shipID}`)
      .then((response) => response.json())
      .then((data) => setShip(data));
  }, [shipID]);

  if (!isAuth) return <NotAuth />;
  if (!ship) return null;

  return (
    <section className="reservation-recap" key={ship.id}>
      {availability > 0 ? (
        <>
          <h2>Vous allez louer le vaisseau suivant :</h2>
          <ShipCard name={ship.name} image={ship.image} id={ship.id} />
          <CheckoutButton shipId={ship.id} />
        </>
      ) : (
        <section className="not-available-wrapper">
          <div className="not-available">
            <h2>Ce vaisseau n'est pas disponible pour le moment.</h2>
          </div>
          <Link to="/ships" className="return-to-ship-button">
            {" "}
            Retour au choix des vaisseaux
          </Link>
        </section>
      )}
    </section>
  );
}
