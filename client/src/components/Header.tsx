import "./Header.css";
import contact from "../assets/images/logos/contact.svg";
import help from "../assets/images/logos/help.svg";
import logoWhite from "../assets/images/logos/logoWhite.png";
import logoWhiteMobile from "../assets/images/logos/logoWhiteMobile.png";
import menu from "../assets/images/logos/menu.svg";

import { useState } from "react";

import { useEffect } from "react";

function Header() {
  // Init a useState as a boolean to define if the screen is smaller or equal to 650px, if the size <= 650 isMobile === true
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 650);
  // Using a useEffect to re render the component dynamically depending on our window size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="header">
      <img className="menuBurger" src={menu} alt="menu burger" />

      <img
        src={isMobile ? logoWhiteMobile : logoWhite}
        alt="website icon"
        className="logoWhite"
      />
      {isMobile ? (
        ""
      ) : (
        <ul className="headerNavBar">
          <li>Notre flotte</li>
          <li>Nos services</li>
          <li>Nos tarifs</li>
          <li className="liButton">Qui sommes nous ?</li>
        </ul>
      )}
      <div className="logosRight">
        <img className="helpLogo" src={help} alt="help logo" />
        <img className="contactLogo" src={contact} alt="contact logo" />
      </div>
    </section>
  );
}

export default Header;
