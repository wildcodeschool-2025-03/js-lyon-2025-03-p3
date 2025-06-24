import Details from "../assets/images/ships/SHIP_1-Living_Room_2-Square.png";
import Ship1 from "../assets/images/ships/ship1.png";
import "./ShipDetails.css";
import "../UI/UX/StyleUIUX.css";
import BtnBooked from "../UI/UX/btnBooked";
import BtnMoreInformations from "../UI/UX/btnMoreInformations";
import hotesse from "../assets/images/Shipdetailsimages/hotesse.png";

function ShipDetails() {
  return (
    <>
      <section>
        <section className="main-content">
          <img className="ship-img" src={Ship1} alt="ship1" />
          <section className="text-content">
            <h3 className="ship-brand">PICTOR</h3>
            <h2 className="ship-title">ZETA LEONIS</h2>
          </section>
          <section className="buttons-wrapper">
            <BtnBooked />
            <BtnMoreInformations />
          </section>
        </section>
        <section>
          <img className="ship-img" src={Details} alt="details" />
        </section>
        <section>
          <h2 className="gap-start">Nos Stewardess...</h2>
          <h3 className="gap-end">....à votre service</h3>
        </section>
        <section className="Shippart3">
          <section className="texte">
            <p className="petittexte">
              Lorem ipsum dolor sit amet. Aut perferendis esse non laboriosam
              mollitia et tempora dicta ab doloribus quibusdam sed voluptas
              veniam ea quae corrupti! Sed nulla recusandae aut sequi iste sed
              esse recusandae est assumenda voluptatem! Et voluptas quia qui
              incidunt quod aut nulla magni qui libero maiores quo eius nostrum.
              Non facilis facere et enim harum eum nesciunt nihil a rerum animi
              qui dolores nihil eos sunt odio.
            </p>
          </section>
          <section>
            <img
              src={hotesse}
              alt="hôtesse de l'espace"
              className="stewardess-img"
            />
          </section>
        </section>
      </section>
    </>
  );
}

export default ShipDetails;
