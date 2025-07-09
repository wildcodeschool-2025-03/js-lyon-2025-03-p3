import { Link } from "react-router";
import "./StyleUIUX.css";

interface ShipProps {
  id: number;
}

export default function BtnBooked({ id }: ShipProps) {
  return (
    <button type="button" className="btnBooked">
      <Link to={`/locationreservation/${id}`}>Réservez</Link>
    </button>
  );
}
