import "./ShipCard.css";
import { useEffect, useState } from "react";
import BtnBooked from "../UI/UX/btnBooked";
import BtnMoreInformations from "../UI/UX/btnMoreInformations";
import tucanaYellow from "../assets/images/iconCard/Tucana_Yellow.webp";
import battery from "../assets/images/iconCard/battery.svg";
import capacity from "../assets/images/iconCard/capacity.svg";
import bed from "../assets/images/iconCard/hotel.svg";
import person from "../assets/images/iconCard/person.svg";
import speed from "../assets/images/iconCard/speed.svg";

interface ShipProps {
  name: string;
  image: string;
  id: number;
}
function ShipCard({ name, image, id }: ShipProps) {
  const [availability, setAvailability] = useState<number>(0);
  const baseURL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch(`${baseURL}/api/available/ship/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAvailability(data.ship_available);
      });
  }, [id]);
  console.info(availability);
  return availability > 0 ? (
    <figure className="ship-card">
      <section className="infos-top">
        <div className="logo-name-wrapper">
          <img
            className="logo-manufacturer"
            src={tucanaYellow}
            alt="logo manufacturer"
          />
          <h2 className="ship-name">{name}</h2>
        </div>
        <div className="wrapper-logos">
          <section className="ship-infos">
            <div className="icon-info">
              <img src={capacity} alt="capacity" /> <p>2</p>
            </div>
            <div className="icon-info">
              <img src={bed} alt="bed" /> <p>1</p>
            </div>
            <div className="icon-info">
              <img src={person} alt="person" /> <p>1</p>
            </div>
            <div className="icon-info">
              <img src={battery} alt="battery" /> <p>2 UA</p>
            </div>
          </section>
          <div className="icon-info large">
            <img src={speed} alt="speed" /> <p>Supraluminique type 4</p>
          </div>
        </div>
      </section>
      <img src={`${baseURL}${image}`} alt={name} />
      <div className="quantity-wrapper">
        <p className="ship-quantity">Quantité disponible : {availability}</p>
      </div>
      <div className="btn-wrapper">
        <BtnBooked id={id} />
        <BtnMoreInformations id={id} />
      </div>
      <div className="prices-info">
        <p>5000 k€ / jours terra</p> <p> 40000 k€ / 8jours terra</p>
      </div>
    </figure>
  ) : (
    ""
  );
}

export default ShipCard;
