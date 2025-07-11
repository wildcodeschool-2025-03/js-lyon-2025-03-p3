import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShipCard from "../components/ShipCard";
import RentForm from "./RentForm";
import "./LocationReservation.css";
interface ShipProps {
  id: number;
  name: string;
  image: string;
}
export default function LocationReservation() {
  const params = useParams();
  const shipID = params.id;
  const [ship, setShip] = useState<ShipProps | null>(null);
  const baseURL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch(`${baseURL}/api/ships/${shipID}`)
      .then((response) => response.json())
      .then((data) => setShip(data));
  }, [shipID]);
  console.log(ship);

  return ship ? (
    <section className="reservation-recap">
      <h2>Vous allez louer le vaisseau suivant :</h2>
      <ShipCard
        key={ship.id}
        name={ship.name}
        image={ship.image}
        id={ship.id}
      />{" "}
      <RentForm />
    </section>
  ) : null;
}
