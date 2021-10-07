import "./Network.css";
import logo from "../../assets/logo.svg";
import logoReact from "../../assets/react.png";

function Network() {
  return (
    <div className="network">
      <h1>COMMUNAUTÉ</h1>
      Cette page
      <img src={logo} className="logo-sportsee" alt="logo de SportSee" />
      est en cours de <i className="fas fa-cogs"></i> construction
      <i className="fas fa-cogs"></i> avec React
      <img src={logoReact} className="logo-react" alt="logo de React" />
    </div>
  );
}

export default Network;
