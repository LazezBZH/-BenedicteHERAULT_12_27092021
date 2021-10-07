import logo from "../../assets/logo.svg";
import "./Error.css";

function Error() {
  return (
    <div className="error">
      <h1>ERROR 404 </h1>

      <img src={logo} className="logo-sportsee" alt="logo de SportSee" />
    </div>
  );
}

export default Error;
