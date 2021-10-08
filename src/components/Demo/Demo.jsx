import "./Demo.css";
import { Link } from "react-router-dom";

export default function Demo() {
  return (
    <div className="profile-link">
      <p>
        Cette appli a besoin pour fonctionner d'une API, vous pouvez néanmoins
        voir une démo avec les données mockées en cliquant ci-dessous:
      </p>
      <div className="demo">
        <Link className="btn" to="/user/12">
          <div>performances de Karl</div>
        </Link>
        <Link className="btn" to="/user/18">
          <div>performances de Cécilia</div>
        </Link>
      </div>
    </div>
  );
}
