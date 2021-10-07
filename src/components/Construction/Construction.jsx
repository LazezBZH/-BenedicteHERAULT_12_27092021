import "./Construction.css";
import logoReact from "../../assets/react.png";
import logo from "../../assets/logo.svg";

export default function Construction() {
  return (
    <div className="construction">
      <div>
        Cette page
        <img src={logo} className="logo-sportsee" alt="logo de SportSee" />
        est en cours de <i className="fas fa-cogs"></i> construction
        <i className="fas fa-cogs"></i> avec React
        <img src={logoReact} className="logo-react" alt="logo de React" />
      </div>
    </div>
  );
}
