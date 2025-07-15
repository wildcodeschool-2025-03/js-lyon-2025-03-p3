import "./StyleUIUX.css";

import hotel from "../../assets/images/iconCard/hotel.svg";

export default function Bedroom() {
  return (
    <>
      <section className="ContainerInfos">
        <img src={hotel} alt="" />
        <p className="InfosP">2</p>
      </section>
    </>
  );
}
