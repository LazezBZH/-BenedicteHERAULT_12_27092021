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
        {user.calorieCount}
        <br></br>Calories
      </div>
      <div className="count proteinCount">
        <img src={proteines} className="icone-proteines" alt="protéines" />
        {user.proteinCount}
        <br></br>Protéines
      </div>
      <div className="count carbohydrateCount">
        <img src={gludides} className="icone-glucides" alt="glucides" />
        {user.carbohydrateCount}
        <br></br>Glucides
      </div>
      <div className="count lipidCount">
        <img src={lipides} className="icone-lipides" alt="lipides" />
        {user.lipidCount}
        <br></br>Lipides
      </div>
    </div>
  );
}
