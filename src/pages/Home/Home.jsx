import "./Home.css";
import logoReact from "../../assets/react.png";
import logo from "../../assets/logo.svg";

function Home() {
  return (
    <div className="home">
      <h1>ACCUEIL</h1>
      Cette page
      <img src={logo} className="logo-sportsee" alt="logo de SportSee" />
      est en cours de <i class="fas fa-cogs"></i> construction
      <i class="fas fa-cogs"></i> avec React
      <img src={logoReact} className="logo-react" alt="logo de React" />
    </div>
  );
}

export default Home;
