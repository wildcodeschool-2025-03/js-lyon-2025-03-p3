import "./Filter.css";

function Filter() {
  return (
    <form className="filter-form">
      <section id="group-ships">
        <section id="ships">
          <button type="button" className="btn-ship">
            Corvette
          </button>
          <button type="button" className="btn-ship">
            Frégate
          </button>
          <button type="button" className="btn-ship">
            Man'o'war
          </button>
        </section>

        <section id="withdrawal-return">
          <section id="withdrawal-return-text-select">
            <p id="withdrawalAndReturnText">Retrait et retour</p>
            <select name="withdrawalAndReturn" id="select-withdrawal-return">
              <option value="withdrawal">Laguna Vista - Texas - US</option>
              <option value="return">Flamingo - Floride -US</option>
              <option value="return">Mana - Guyane - FR</option>
              <option value="return">Ras el Khaïmah - AE</option>
              <option value="return">Zhangzhou - Fujian - CN</option>
            </select>
          </section>

          <button type="button" id="btn-withdrawal-return">
            + lieu de retour différent
          </button>
        </section>
      </section>

      <section id="group-services">
        <h2>Services</h2>
        <section id="btn-group-services">
          <button type="button" className="btn-service">
            Premium
          </button>
          <button type="button" className="btn-service">
            Gold
          </button>
          <button type="button" className="btn-service">
            Platine
          </button>
        </section>
      </section>
      <section id="group-date">
        <section id="btn-group-date">
          <label htmlFor="start" className="label-date">
            Date de départ
            <input type="date" id="start" name="trip-start" />
          </label>

          <label htmlFor="end" className="label-date">
            Date de retour
            <input type="date" id="end" name="trip-end" />
          </label>
        </section>
        <button type="button" id="btn-seeships">
          Voir les vaisseaux
        </button>
      </section>
    </form>
  );
}

export default Filter;
