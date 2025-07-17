import { Link } from "react-router";
import "./StyleUIUX.css";

interface ShipProps {
  id: number;
}

export default function BtnMoreInformations({ id }: ShipProps) {
  return (
    <button type="button" className="BtnMoreInformations">
      <Link to={`/shipDetails/${id}`}>Plus d'informations...</Link>
    </button>
  );
}
