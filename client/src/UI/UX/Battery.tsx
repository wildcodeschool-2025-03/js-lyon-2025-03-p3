import "./StyleUIUX.css";

import battery from "../../assets/images/iconCard/battery.svg";

export default function Person() {
  return (
    <>
      <section className="ContainerInfos">
        <img src={battery} alt="" />
        <p className="InfosP">1 UA</p>
      </section>
    </>
  );
}
