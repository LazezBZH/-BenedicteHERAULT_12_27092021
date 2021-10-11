import "./Settings.css";
import Construction from "../../components/Construction/Construction";
import Demo from "../../components/Demo/Demo";
import Header from "../../components/Header/Header";
import Aside from "../../components/Aside/Aside";

function Settings() {
  return (
    <div className="home">
      <Header />
      <Aside />
      <h1>RÉGLAGES</h1>
      <Construction />
      <Demo />
    </div>
  );
}

export default Settings;
