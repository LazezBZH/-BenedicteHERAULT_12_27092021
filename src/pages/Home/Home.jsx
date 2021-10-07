import "./Home.css";
import Construction from "../../components/Construction/Construction";
import Demo from "../../components/Demo/Demo";

function Home() {
  return (
    <div className="home">
      <h1>ACCUEIL</h1>
      <Construction />
      <Demo />
    </div>
  );
}

export default Home;
