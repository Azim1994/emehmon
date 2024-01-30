import "./NavbarStyles.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, ResponsiveEmbed } from "react-bootstrap";

function Navbar() {
  const items = [
    { name: "Найти жилье", path: "/findplace" },
    { name: "Куда сходить?", path: "/whereto" },
    { name: "Туры", path: "/tours" },
    { name: "Транспорт", path: "/transport" },
  ];

  return (
    <>
      <div className="embed-responsive embed-responsive-16by9">
        <nav className="NavbarItems">
          <div className="navbar-logo">
            <a href="/">
              <img
                className="logo-header"
                src="images/logoheader.svg"
                alt="logoheader"
              />
            </a>
          </div>
          <ul className="nav-menu">
            {items.map((nav) => (
              <li>
                <a href={nav.path}>{nav.name}</a>
              </li>
            ))}
          </ul>
          <div className="nav-menu1">
            <div className="btn1">
              <select id="currencies">
                <option value="USD">USD</option>
                <option value="UZS">UZS</option>
                <option value="RUB">RUB</option>
              </select>
            </div>
            <div className="btn2">
              <select id="languages">
                <option value="Русский">Русский</option>
                <option value="Английский">Английский</option>
                <option value="Узбекский">Узбекский</option>
              </select>
            </div>
            <div className="btn3">
              <img src="images/user-circle.svg" alt="signinlogo"></img>
              <button className="login">Войти</button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
