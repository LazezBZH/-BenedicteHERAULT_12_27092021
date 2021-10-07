import "./Home.css";
import logoReact from "../../assets/react.png";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div>
        <h1>ACCUEIL</h1>
        Cette page
        <img src={logo} className="logo-sportsee" alt="logo de SportSee" />
        est en cours de <i className="fas fa-cogs"></i> construction
        <i className="fas fa-cogs"></i> avec React
        <img src={logoReact} className="logo-react" alt="logo de React" />
      </div>
      <div className="profile-link">
        <Link to="/user/12">
          <div className="btn">performances de Karl</div>
        </Link>
        <Link to="/user/18">
          <div className="btn">performances de Cécilia</div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
