import Battery from "../UI/UX/Battery";
import Bedroom from "../UI/UX/Bedroom";
import Passengers from "../UI/UX/Passagers";
import Person from "../UI/UX/Person";
import Speed from "../UI/UX/Speed";
import "./BetterUnderstand.css";

export default function BetterUnderstand() {
  return (
    <>
      <section id="BUContainer">
        <section id="BUPartOne">
          <section id="BUIcons">
            <h1 id="BUTitle">Mieux comprendre notre signalétique</h1>
            <section className="BUIconText">
              <div>
                <Passengers />
              </div>
              <p className="BUText">
                : Nombre d’aventuriers pouvant embarquer dans le vaisseau.
              </p>
            </section>
            <section className="BUIconText">
              <div>
                <Bedroom />
              </div>
              <p className="BUText">
                : Nombre de chambres. Tous nos lits sont KingSize.
              </p>
            </section>
            <section className="BUIconText">
              <div>
                <Person />
              </div>
              <p className="BUText">
                : Personnels à bord. Composé d’au moins une Stewardess
              </p>
            </section>
            <section className="BUIconText">
              <div>
                <Battery />
              </div>
              <p className="BUText">
                : Autonomie maximal du vaisseau. 1 UA = 149 597 870km
              </p>
            </section>
          </section>
        </section>
        <section id="BUPartTwo">
          <section id="BUSpeed">
            <section className="BUIconText">
              <div>
                <Speed />
              </div>
              <div id="BUTextTable">
                <div>
                  <p className="BUText">
                    : Nos vaisseaux propose tous des vitesses Supraluminique,
                    retrouvez ci-dessous la définition des types :
                  </p>
                </div>
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Vitesse en km/h</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>370 000</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>440 000</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>510 000</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>580 000</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>650 000</td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>720 000</td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>790 000</td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td>860 000</td>
                      </tr>
                      <tr>
                        <th scope="row">9</th>
                        <td>930 000</td>
                      </tr>
                      <tr>
                        <th scope="row">10</th>
                        <td>1 000 000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
