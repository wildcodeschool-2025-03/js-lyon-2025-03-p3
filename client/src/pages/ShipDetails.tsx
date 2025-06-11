import Details from "../assets/images/ships/SHIP_1-Living_Room_2-Square.png";
import Ship1 from "../assets/images/ships/ship1.png";
import "./ShipDetails.css";
import "../UI/UX/StyleUIUX.css";
import BtnBooked from "../UI/UX/btnBooked";
import BtnMoreInformations from "../UI/UX/btnMoreInformations";

function ShipDetails() {
  return (
    <>
      <div className="main-content">
        <img src={Ship1} alt="ship1" />
        <div className="text-content">
          <h3 className="ship-brand">PICTOR</h3>
          <h2 className="ship-title">ZETA LEONIS</h2>
        </div>
        <div className="buttons-wrapper">
          <BtnBooked />
          <BtnMoreInformations />
        </div>
      </div>
      <div>
        <img src={Details} alt="details" />
      </div>
    </>
  );
}

export default ShipDetails;
