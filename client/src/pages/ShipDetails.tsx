import Details from "../assets/images/ships/SHIP_1-Living_Room_2-Square.png";
import Ship1 from "../assets/images/ships/ship1.png";
import "./ShipDetails.css";
import "../UI/UX/StyleUIUX.css";
import BtnBooked from "../UI/UX/btnBooked";
import BtnMoreInformations from "../UI/UX/btnMoreInformations";
import stewardess from "../assets/images/Shipdetailsimages/stewardess.png";

function ShipDetails() {
  return (
    <>
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

      <section className="section-wrapper 1">
        <ul className="overview">
          <h3 id="ow-h3">Un confort exceptionnel...</h3>
          <h4 id="ow-h4">...Où que vous soyez</h4>
          <li className="ow-list">
            Salon <div className="ow-line" />
            <span>1</span>
          </li>
          <li className="ow-list">
            Chambre <div className="ow-line" />
            <span>1</span>
          </li>
          <li className="ow-list">
            Salle de bain <div className="ow-line" />
            <span>1</span>
          </li>
          <li className="ow-list">
            Salle de massage <div className="ow-line" />
            <span>1</span>
          </li>
        </ul>
        <section className="section-details one">
          <p className="text-details one">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            recusandae rerum similique enim excepturi quibusdam ab adipisci
            officiis, dolor obcaecati ut quia error magnam odit eos nihil!
            Molestiae ipsam eius, minus labore. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Et cum corrupti a quos voluptatem
            deleniti officia, voluptas vel repudiandae illo voluptates
            voluptatibus dicta asperiores porro quidem minus, eum nam modi.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ab
            numquam blanditiis? Expedita rem amet dolorem dolores cum quis,
            impedit voluptatum, inventore culpa repellat quaerat nam earum?
            Sapiente omnis laudantium, eius aliquid dolores voluptate quam ipsum
            officia ipsam facilis praesentium. Vitae iste aperiam ipsa rem vero
            culpa eius magnam, perspiciatis reprehenderit exercitationem
            consequatur minus. Aspernatur fugiat ullam animi tempore numquam eos
            nihil quas harum amet dignissimos aliquid deserunt, sequi maiores ab
            dolore pariatur voluptates rerum, sint sunt nostrum. Magni earum
            quia necessitatibus illo totam consequatur cumque eaque, facilis
            odit eveniet est nesciunt, voluptates quibusdam voluptatibus
            eligendi asperiores a aperiam dolor!
          </p>
          <img className="details-img" src={Details} alt="details" />
        </section>
      </section>
      {/* section 2 */}
      <section className="section-wrapper two">
        <section className="overview two">
          <h3 id="ow-h3">Regarder l'univers...</h3>
          <h4 id="ow-h4">...Depuis son lit</h4>
        </section>
        <section className="section-details two">
          <img className="details-img two" src={Details} alt="details" />
          <p className="text-details two">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            recusandae rerum similique enim excepturi quibusdam ab adipisci
            officiis, dolor obcaecati ut quia error magnam odit eos nihil!
            Molestiae ipsam eius, minus labore. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptates dolor suscipit explicabo
            nam earum repellendus error tempore consequatur soluta sapiente.
          </p>
        </section>
      </section>

      <section>
        {/* section 3 */}
        <section>
          <h2 className="title2-section3">Nos Stewardess...</h2>
          <h3 className="title3-section3">....à votre service</h3>
        </section>
        <section className="section-details-three">
          <section className="text-details-three">
            <p className="smalltext">
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
            <img src={stewardess} alt="stewardess" className="stewardess-img" />
          </section>
        </section>
      </section>
    </>
  );
}

export default ShipDetails;
