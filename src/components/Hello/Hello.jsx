import React from "react";
import { useParams } from "react-router";
import useFetch from "../../utils/getDatas";
import "./Hello.css";

export default function Hello() {
  const urlId = useParams();
  //console.log(urlId.id);
  const id = urlId.id;
  //console.log(id);
  const { data, loading, error } = useFetch(`../user/${id}.json`);
  const user = data.userInfos;
  //console.log(user);

  if (error) {
    return <span>Oups il y a eu un petit problème</span>;
  } else if (loading) {
    return <div>loading</div>;
  }

  return (
    <div className="dashboard-header">
      <h1>
        Bonjour <span className="firstname">{user.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier</p>
    </div>
  );
}
