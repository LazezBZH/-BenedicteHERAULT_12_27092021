import "./Error.css";
import Demo from "../../components/Demo/Demo";
import Header from "../../components/Header/Header";
import Aside from "../../components/Aside/Aside";

function Error() {
  return (
    <div className="home">
      <Header />

      <Aside />
      <h1 className="error">Erreur 404</h1>
      <Demo />
    </div>
  );
}

export default Error;
