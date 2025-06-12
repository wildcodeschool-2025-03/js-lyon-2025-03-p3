import "./Footer.tsx";
import "./Footer.css";
import "../App.css";
import bluesky from "../assets/images/Logos/Bluesky.svg";
import facebook from "../assets/images/Logos/facebook.svg";
import instagram from "../assets/images/Logos/instagram.svg";
import threats from "../assets/images/Logos/threats.svg";
import youtube from "../assets/images/Logos/youtube.svg";

function Footer() {
  return (
    <main>
      <section className="footer">
        <section className="informations">
          <p className="plus">+</p>
          <section className="informationsData">
            <section className="journey, styleGroup">
              <h4 className="numbers">2 500</h4>
              <p className="informationsSub">VOYAGES</p>
            </section>
            <section className="browsed, styleGroup">
              <h4 className="numbers"> 14 000 UA</h4>
              <p className="informationsSub browsedSub">PARCOURUS</p>
            </section>
            <section className="adventurers, styleGroup">
              <h4 className="numbers">100 000</h4>
              <p className="informationsSub">AVENTURIERS</p>
            </section>
          </section>
        </section>

        <section className="brandandServiceSection">
          <section className="brand">
            <section className="brandCat">
              <h4 className="brandName">TUCANA</h4>
              <p className="brandShipName">Alpha Tauri</p>
              <p className="brandShipName">Alpha Hydrae</p>
              <p className="brandShipName">Alpha Andromedae</p>
            </section>

            <section className="brandCat">
              <h4 className="brandName">PICTOR</h4>
              <p className="brandShipName">Zeta Ceti</p>
              <p className="brandShipName">Zeta Leonis</p>
              <p className="brandShipName">Zeta Draconis</p>
            </section>

            <section className="brandCat">
              <h4 className="brandName">ANDROMEDA</h4>
              <p className="brandShipName">Theta Eridani</p>
              <p className="brandShipName">Theta Pegasi</p>
              <p className="brandShipName">Theta Serpentis</p>
            </section>
          </section>

          <section className="serviceAndBrand">
            <section className="serviceCat">
              <h4 className="serviceTitle">SERVICE</h4>
              <p className="serviceName">Service_1</p>
              <p className="serviceName">Service_2</p>
              <p className="serviceName">Service_3</p>
            </section>
            <section className="brandES">
              <h4 className="ESTitle">LA SOCIÉTÉ</h4>
              <p className="ESName">Notre histoire</p>
              <p className="ESName">Nos convictions</p>
              <p className="ESName">Qui sommes-nous ?</p>
            </section>
          </section>
        </section>
        <section className="logosAndNewsletter">
          <section className="newsletter">
            <input
              className="inputNewsletter"
              type="email"
              name="email"
              placeholder="S'inscrire à la newsletter"
            />
          </section>
          <section className="logos">
            <img className="social" src={youtube} alt="logo youtube" />
            <img className="social" src={threats} alt="logo threads" />
            <img className="social" src={instagram} alt="Logo instagram" />
            <img className="social" src={facebook} alt="logo facebook" />
            <img className="social" src={bluesky} alt="logo bluesky" />
          </section>
        </section>
      </section>
    </main>
  );
}

export default Footer;
