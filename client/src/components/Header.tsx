import "./Header.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import admin from "../assets/images/logos/admin.svg";
import help from "../assets/images/logos/help.svg";
import logoWhite from "../assets/images/logos/logoWhite.png";
import logoWhiteMobile from "../assets/images/logos/logoWhiteMobile.png";
import menu from "../assets/images/logos/menu.svg";
import LogoutButton from "../components/LogoutButton";

function Header() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 650);
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

  const [isAuth, setIsAuth] = useState(Boolean);
  const baseURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`${baseURL}/api/me`, {
          credentials: "include", // send the cookie to the server to verify the credentials
        });

        if (res.ok) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (err) {
        setIsAuth(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <section className="header">
      <Link to="/">
        <img className="menuBurger" src={menu} alt="menu burger" />
        <img
          src={isMobile ? logoWhiteMobile : logoWhite}
          alt="website icon"
          className="logoWhite"
        />
      </Link>
      {!isMobile && (
        <ul
          className={`headerNavBar ${
            isHome || isShipDetails ? "home-render" : "base-render"
          }`}
        >
          <li>
            <Link to="/ships">Notre flotte</Link>
          </li>
          <li>
            <Link to="/addship">Ajouter votre vaisseau</Link>
          </li>
          <li className="liButton">
            <Link to="/whoarewe">Qui sommes nous ?</Link>
          </li>
        </ul>
      )}
      {isAuth ? (
        <section className="isLogged-true">
          <div aria-label="logged in">🟢</div>
          <LogoutButton onLogout={() => setIsAuth(false)} />
        </section>
      ) : (
        <section className="isLogged-false">
          <div aria-label="not logged">🔴</div>
          <Link to="/connexion" className="login-out-button">
            Connexion
          </Link>
        </section>
      )}

      <div className="logosRight">
        <img className="helpLogo" src={help} alt="help logo" />
        <Link to="/admin">
          <img className="contactLogo" src={admin} alt="contact logo" />
        </Link>
      </div>
    </section>
  );
}

export default Header;
