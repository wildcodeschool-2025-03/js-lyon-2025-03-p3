import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import ShipCard from "../components/ShipCard";
import "./Ships.css";
interface ShipsProps {
  id: number;
  name: string;
  image: string;
}
function Ships() {
  const [ships, setShips] = useState<ShipsProps[]>([]);
  const baseURL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch(`${baseURL}/api/ships`)
      .then((response) => response.json())
      .then((data) => setShips(data));
  }, []);
  console.info(ships);

  return (
    <>
      <Filter />
      <section className="shipCards-wrapper">
        {ships.map((ship) => (
          <ShipCard key={ship.id} name={ship.name} image={ship.image} />
        ))}
      </section>
    </>
  );
}

export default Ships;
