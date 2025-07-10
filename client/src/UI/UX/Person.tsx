import "./StyleUIUX.css";

import person from "../../assets/images/iconCard/person.svg";

export default function Person() {
  return (
    <>
      <section className="ContainerInfos">
        <img src={person} alt="" />
        <p className="InfosP">4</p>
      </section>
    </>
  );
}
