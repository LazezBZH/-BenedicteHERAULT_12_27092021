import React from "react";
import { useParams } from "react-router";
import useFetch from "../../utils/getDatas";
import calories from "../../assets/calories-icon.svg";
import proteines from "../../assets/protein-icon.svg";
import gludides from "../../assets/carbs-icon.svg";
import lipides from "../../assets/fat-icon.svg";
import "./DashboardAside.css";

export default function DashboardAside() {
  const urlId = useParams();
  //console.log(urlId.id);
  const id = urlId.id;
  //console.log(id);
  const { data, loading, error } = useFetch(`../user/${id}.json`);
  const user = data.keyData;
  //console.log(user);

  if (error) {
    return <span>Oups il y a eu un petit problème</span>;
  } else if (loading) {
    return <div>loading</div>;
  }

  return (
    <div className="dashboard-aside">
      <div className="count calorieCount">
        <img src={calories} className="icone-calories" alt="calories" />
        <div className="textCount">
          {user.calorieCount}kCal
          <p>Calories</p>
        </div>
      </div>
      <div className="count proteinCount">
        <img src={proteines} className="icone-proteines" alt="protéines" />
        <div className="textCount">
          {user.proteinCount}g<p>Protéines</p>
        </div>
      </div>
      <div className="count carbohydrateCount">
        <img src={gludides} className="icone-glucides" alt="glucides" />
        <div className="textCount">
          {user.carbohydrateCount}g<p>Glucides</p>
        </div>
      </div>
      <div className="count lipidCount">
        <img src={lipides} className="icone-lipides" alt="lipides" />
        <div className="textCount">
          {user.lipidCount}g<p>Lipides</p>
        </div>
      </div>
    </div>
  );
}
