import "./Header.css";
import { Link,NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
/* Link remplace la balise a */
export default function Header() {
  return (
    <header className="header">
      <Link to="/" >
      <img src={logo} className="logo" alt="kaza" />
      </Link>
      <nav className="navbar">
        <NavLink to="/" className="link">Accueil</NavLink>
        <NavLink to="/about" className="link">&Agrave; propos</NavLink>
      </nav>
    </header>
  );
}
