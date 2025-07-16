import "./Header.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import contact from "../assets/images/logos/contact.svg";
import help from "../assets/images/logos/help.svg";
import logoWhite from "../assets/images/logos/logoWhite.png";
import logoWhiteMobile from "../assets/images/logos/logoWhiteMobile.png";
import menu from "../assets/images/logos/menu.svg";
import LogoutButton from "../components/LogoutButton";

function Header() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 650);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";
  const isShipDetails = location.pathname
    .toLowerCase()
    .startsWith("/shipdetails");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3310/api/me", {
      credentials: "include",
    })
      .then((res) => {
        setIsLoggedIn(res.ok);
      })
      .catch(() => setIsLoggedIn(false));
  }, []);

  return (
    <section className="header">
      <img className="menuBurger" src={menu} alt="menu burger" />
      <img
        src={isMobile ? logoWhiteMobile : logoWhite}
        alt="website icon"
        className="logoWhite"
      />

      {!isMobile && (
        <ul
          className={`headerNavBar ${
            isHome || isShipDetails ? "home-render" : "base-render"
          }`}
        >
          <li>
            <Link to="/ships">Notre flotte</Link>
          </li>
          <li>Nos services</li>
          <li>Nos tarifs</li>
          <li className="liButton">Qui sommes nous ?</li>
          <li>
            {isLoggedIn ? (
              <>
                <span style={{ color: "lightgreen", marginRight: "0.5rem" }}>
                  ✅ Connecté
                </span>
                <LogoutButton onLogout={() => setIsLoggedIn(false)} />
              </>
            ) : (
              <Link to="/connexion">Se connecter</Link>
            )}
          </li>
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
