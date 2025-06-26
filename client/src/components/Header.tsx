import "./Header.css";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import contact from "../assets/images/logos/contact.svg";
import help from "../assets/images/logos/help.svg";
import logoWhite from "../assets/images/logos/logoWhite.png";
import logoWhiteMobile from "../assets/images/logos/logoWhiteMobile.png";
import menu from "../assets/images/logos/menu.svg";

function Header() {
  // Init a useState as a boolean to define if the screen is smaller or equal to 650px, if the size <= 650 isMobile === true
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 650);
  // Using a useEffect to re render the component dynamically depending on our window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 650) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    // We "listening" on the window size to set if isMobile true or not via the handleResize function
    window.addEventListener("resize", handleResize);
    // Security added to remove the listener if our component is unmounted, to avoid memory leaks and bugs
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
          <li>
            <Link to="/ships">Notre flotte</Link>
          </li>
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
