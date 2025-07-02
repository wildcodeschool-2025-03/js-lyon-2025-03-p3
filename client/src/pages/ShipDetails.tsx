import "./ShipDetails.css";
import "../UI/UX/StyleUIUX.css";
import BtnBooked from "../UI/UX/btnBooked";
import bedroom from "../assets/images/ships/ship_1-bedroom_1.webp";
import BtnMoreInformations from "../UI/UX/btnMoreInformations";
import livingroom from "../assets/images/ships/ship_1-living_room_2.webp";
import Ship1 from "../assets/images/ships/ship_1.webp";
import stewardess from "../assets/images/Shipdetailsimages/stewardess.webp";


function ShipDetails() {
  return (
    <>
      <section id="main-content">
        <img className="ship-img" src={Ship1} alt="ship1" />
        <section className="text-content">
          <section id="text-content-width">
            <h3 id="ship-brand">PICTOR</h3>
            <h2 id="ship-title">ZETA LEONIS</h2>
          </section>
        </section>
        <section className="buttons-wrapper">
          <BtnBooked />
          <BtnMoreInformations />
        </section>
      </section>

      <section className="section-wrapper one">
        <section id="section-overview">
          <section id="overview-title-ul">
            <section className="overview-title">
              <h3 className="ow-h3">Un confort exceptionnel...</h3>
              <h4 className="ow-h4">...Où que vous soyez</h4>
            </section>
            <ul className="overview">
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
          </section> 
        </section>
        <section className="section-details-one">
          <p className="text-details-one">
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
          <img className="details-img-right" src={livingroom} alt="details" />
        </section>
      </section>
      {/* section 2 */}
      <section className="section-wrapper two">
        <section className="overview-reverse">
          <section className="overview two">
            <h3 className="ow-h3 two">Regarder l'univers...</h3>
            <h4 className="ow-h4 two">...Depuis son lit</h4>
          </section>
          <section className="overview-img">
            <img className="details-img-left" src={bedroom} alt="details" />
          </section>
        </section>
        <section className="section-details-two">
          <p className="text-details-two">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            recusandae rerum similique enim excepturi quibusdam ab adipisci
            officiis, dolor obcaecati ut quia error magnam odit eos nihil!
            Molestiae ipsam eius, minus labore. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptates dolor suscipit explicabo
            nam earum repellendus error tempore consequatur soluta sapiente.
          </p>
          <p className="text-details-three">
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
        <section className="section-wrapper three">
          <section className="overview three">
            <h3 className="ow-h3 three">Nos Stewardess...</h3>
            <h4 className="ow-h4 three">....à votre service</h4>
          </section>
          <section className="section-details-four">
              <img src={stewardess} alt="stewardess" className="details-img-right" />
            <p className="text-details-four">
              Lorem ipsum dolor sit amet. Aut perferendis esse non laboriosam
              mollitia et tempora dicta ab doloribus quibusdam sed voluptas
              veniam ea quae corrupti! Sed nulla recusandae aut sequi iste sed
              esse recusandae est assumenda voluptatem! Et voluptas quia qui
              incidunt quod aut nulla magni qui libero maiores quo eius nostrum.
              Non facilis facere et enim harum eum nesciunt nihil a rerum animi
              qui dolores nihil eos sunt odio.
            </p>
            
          </section>
        </section>
      </section>
    </>
  );
}

export default ShipDetails;
