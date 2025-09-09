import NotAuth from "../components/NotAuth";
import "./DeleteShip.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface ShipsProps {
  id: number;
  name: string;
  image: string;
}

export default function DeleteShip() {
  const [ships, setShips] = useState<ShipsProps[]>([]);
  const baseURL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch(`${baseURL}/api/ships`)
      .then((response) => response.json())
      .then((data) => setShips(data));
  }, []);

  const deleteShipBtn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const select = event.currentTarget.elements.namedItem(
      "ships",
    ) as HTMLSelectElement;
    const shipId = select.value;

    const shipName = select.options[select.selectedIndex].text;
    if (
      !confirm(`Etes-vous sûr de vouloir supprimer le vaisseau ${shipName} ?`)
    ) {
      return;
    }

    await fetch(`${baseURL}/api/ships/${shipId}`, {
      method: "DELETE",
    });

    // Optionnel : rafraîchir la liste après suppression
    setShips((prev) => prev.filter((ship) => ship.id !== Number(shipId)));

    toast.error(`Vaisseau "${shipName}" supprimé !`, {
      position: "bottom-right",
      autoClose: 3000,
    });
  };
  const [isAuth, setIsAuth] = useState(Boolean);
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

  return isAuth ? (
    <section id="containerDS">
      <h1 id="title">SUPPRIMER UN VAISSEAU SPATIAL</h1>
      <form onSubmit={deleteShipBtn}>
        <div id="divDS">
          <label htmlFor="deleteShip" id="labelDS">
            Choissisez le vaisseau à supprimer :{" "}
          </label>
          <select name="ships" id="deleteShip">
            {ships.map((ship) => (
              <option key={ship.id} value={ship.id}>
                {ship.id}.{ship.name}
              </option>
            ))}
          </select>
        </div>
        <div id="disclaimerDS">
          <h2 id="subTitleH2">
            ATTENTION: LA SUPPRESSION D'UN VAISSEAU EST IRRÉVERSIBLE.
          </h2>
          <p>
            Veuillez bien contrôler que vous avez choisi le bon vaisseau avant
            de cliquer sur le bouton "SUPPRIMER"{" "}
          </p>
        </div>
        <button type="submit" id="buttonDS" disabled={ships.length === 0}>
          SUPPRIMER LE VAISSEAU
        </button>
      </form>
    </section>
  ) : (
    <NotAuth />
  );
}
