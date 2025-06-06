import "./Home.css";

const ships = [
  {
    name: "Exodius",
    image: "../src/assets/images/ships/ship1.png",
    text: "Laissez vous emporter",
  },
  {
    name: "Pandora",
    image: "../src/assets/images/ships/ship2.png",
    text: "Plus vite que la lumière",
  },
  {
    name: "Gérard",
    image: "../src/assets/images/ships/ship3.png",
    text: "Toujours plus loin",
  },
];

function Home() {
  return (
    <section>
      <figure className="ship-highlight">
        <img src={ships[0].image} alt="exodius" className="ship-img" />
        <figcaption className="ship-txt">
          <h2>{ships[0].name}</h2>
          <p> {ships[0].text}</p>
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
        <img src={ships[1].image} alt="Pandora" className="ship-img" />
        <figcaption className="ship-txt">
          <h2>{ships[1].name}</h2>
          <p> {ships[1].text}</p>
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
        <img src={ships[2].image} alt="Gérard" className="ship-img" />
        <figcaption className="ship-txt">
          <h2> {ships[2].name}</h2>
          <p>{ships[2].text}</p>
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
