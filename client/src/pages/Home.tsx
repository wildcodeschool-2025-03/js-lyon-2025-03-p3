import { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router";

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
  console.info(ships);

  const handleAddToCart = (id: number) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (!cart.includes(id)) {
      cart.push(id);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

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
            <button
              type="button"
              className="button-rent"
              onClick={() => handleAddToCart(ship.id)}
            >
              <Link to="./locationreservation">Reservez</Link>
            </button>
            <button type="button" className="button-info">
              Plus d'infos
            </button>
          </section>
        </figure>
      ))}
    </section>
  );
}
export default Home;
