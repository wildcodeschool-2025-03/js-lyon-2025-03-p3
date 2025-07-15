import "./StyleUIUX.css";

import capacity from "../../assets/images/iconCard/capacity.svg";

export default function Passengers() {
  return (
    <>
      <section className="ContainerInfos">
        <img src={capacity} alt="" />
        <p className="InfosP">4</p>
      </section>
    </>
  );
}
