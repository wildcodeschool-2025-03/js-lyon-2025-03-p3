import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShipCard from "../components/ShipCard";

import "./LocationReservation.css";
import NotAuth from "../components/NotAuth";
import RentForm from "../components/RentForm";

interface ShipProps {
  id: number;
  name: string;
  image: string;
}
export default function LocationReservation() {
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
  const params = useParams();
  const shipID = params.id;

  useEffect(() => {
    fetch(`${baseURL}/api/ships/${shipID}`)
      .then((response) => response.json())
      .then((data) => setShip(data));
  }, [shipID]);
  console.log(ship);

  return ship && isAuth ? (
    <section className="reservation-recap" key={ship.id}>
      <h2>Vous allez louer le vaisseau suivant :</h2>
      <ShipCard name={ship.name} image={ship.image} id={ship.id} />
      <RentForm id={ship.id} />
    </section>
  ) : (
    <NotAuth />
  );
}
