import { useEffect, useState } from "react";
import "./Home.css";

/* const ships = [
  {
    name: "Exodius",
    image: "../src/assets/images/ships/ship1.png",
    text: "Laissez vous emporter",
  },
  {
    name: "Pandora",
    image: "../src/assets/images/ships/ship2.png",
    text: "Plus vite que la lumière",
  },
  {
    name: "Gérard",
    image: "../src/assets/images/ships/ship3.png",
    text: "Toujours plus loin",
  },
]; */
interface ShipsProps {
  id: number;
  name: string;
  image: string;
  catchphrase: string;
}
function Home() {
  const [ships, setShips] = useState<ShipsProps[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/ships")
      .then((response) => response.json())
      .then((data) => setShips(data));
  }, []);
  console.info(ships);
  return (
    <section>
      <figure className="ship-highlight">
        <img src={ships[1].image} alt="exodius" className="ship-img" />
        <figcaption className="ship-txt">
          <h2>{ships[1].name}</h2>
          <p> {ships[1].catchphrase}</p>
        </figcaption>
        <section className="button-group">
          <button type="button" className="button-rent">
            Reservez
          </button>
          <button type="button" className="button-info">
            Plus d'infos
          </button>
        </section>
      </figure>
    </section>
  );
}

export default Home;
