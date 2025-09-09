import { useEffect, useState } from "react";
import "./Home.css";
import BtnBooked from "../UI/UX/btnBooked";
import BtnMoreInformations from "../UI/UX/btnMoreInformations";

interface ShipsProps {
  id: number;
  name: string;
  image: string;
  catchphrase: string;
}
function Home() {
  const baseURL = import.meta.env.VITE_API_URL;
  const [ships, setShips] = useState<ShipsProps[]>([]);
  useEffect(() => {
    fetch(`${baseURL}/api/ships`)
      .then((response) => response.json())
      .then((data) => setShips(data));
  }, []);

  return (
    <section>
      {ships.map((ship) => (
        <figure key={ship.id} className="ship-highlight">
          <img
            src={`http://localhost:3310${ship.image}`}
            alt="exodius"
            className="ship-img"
          />
          <figcaption className="ship-txt">
            <h2>{ship.name}</h2>
            <p> {ship.catchphrase}</p>
          </figcaption>
          <section className="button-group">
            <BtnBooked id={ship.id} />
            <BtnMoreInformations id={ship.id} />
          </section>
        </figure>
      ))}
    </section>
  );
}
export default Home;
