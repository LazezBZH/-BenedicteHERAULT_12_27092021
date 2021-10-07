import "./Settings.css";
import logo from "../../assets/logo.svg";
import logoReact from "../../assets/react.png";

function Settings() {
  return (
    <div className="home">
      <h1>RÉGLAGES</h1>
      Cette page
      <img src={logo} className="logo-sportsee" alt="logo de SportSee" />
      est en cours de <i className="fas fa-cogs"></i> construction
      <i className="fas fa-cogs"></i> avec React
      <img src={logoReact} className="logo-react" alt="logo de React" />
    </div>
  );
}

export default Settings;
