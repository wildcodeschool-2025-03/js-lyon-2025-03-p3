import type React from "react";

type FiltreProps = {
  id: string;
  name: string;
};

const Filtre: React.FC<FiltreProps> = (props) => (
  <form className="form">
    <div className="ships">
      {/* <label className="vaisseau-label" htmlFor={props.id}>
        nom de vaisseau{props.name}
      </label> */}
      <input id={props.id} className="vaisseau-text" type="text" />
    </div>
    <div className="catchphrase">
      {/* <label className="catchphrase-label" htmlFor={props.id}>
        catchphrase{props.name}
      </label> */}
      <input id={props.id} className="catchphrase-text" type="text" />
    </div>
    <div className="btn-group">
      <button type="button" className="btn-choix de vaisseau">
        choix de vaisseau
      </button>
      <button type="button" className="btn-catchphrase">
        catchphrase
      </button>
      <button type="submit" className="btn-services">
        services
      </button>
    </div>
  </form>
);

export default Filtre;
