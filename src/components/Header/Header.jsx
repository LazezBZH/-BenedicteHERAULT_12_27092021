import logo from "../../assets/logo.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo-header">
        <img src={logo} alt="logo de Kasa" />
      </div>

      <ul className="nav-header">
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </div>
  );
}

export default Header;
