import "./Home.css";
import ship1 from "../assets/images/ships/ship1.png";
import ship2 from "../assets/images/ships/ship2.png";
import ship3 from "../assets/images/ships/ship3.png";

function Home() {
  return (
    <section>
      <figure className="ship-highlight">
        <img src={ship1} alt="exodius" className="ship-img" />
        <figcaption className="ship-txt">
          <h2>Exodius</h2>
          <p> Laissez vous emporter</p>
        </figcaption>
        <section className="button-group">
          <button type="button" className="button-rent">
            Reservez
          </button>
          <button type="button" className="button-info">
            Plus d'infos
          </button>
        </section>
      </figure>

      <figure className="ship-highlight">
        <img src={ship2} alt="Pandora" className="ship-img" />
        <figcaption className="ship-txt">
          <h2>Pandora</h2>
          <p> Plus vite que la lumière</p>
        </figcaption>
        <section className="button-group">
          <button type="button" className="button-rent">
            Reservez
          </button>
          <button type="button" className="button-info">
            Plus d'infos
          </button>
        </section>
      </figure>

      <figure className="ship-highlight">
        <img src={ship3} alt="Gérard" className="ship-img" />
        <figcaption className="ship-txt">
          <h2> Gérard</h2>
          <p>Toujours plus loin</p>
        </figcaption>
        <section className="button-group">
          <button type="button" className="button-rent">
            Reservez
          </button>
          <button type="button" className="button-info">
            Plus d'infos
          </button>
        </section>
      </figure>
    </section>
  );
}

export default Home;
