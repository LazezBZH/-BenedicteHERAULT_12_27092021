import React from "react";
import { useParams } from "react-router";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import "./Radar.css";
import useFetch from "../../utils/getDatas";

export default function RadarFig() {
  const urlId = useParams();
  const id = parseInt(urlId.id);
  console.log(id);

  const { data, loading, error } = useFetch(`../user/${id}/performance.json`);

  const formatActivity = (kind, array) => {
    const arrayKind = array[kind];
    let activityInFrench;
    switch (arrayKind) {
      case "cardio":
        activityInFrench = "Cardio";
        break;
      case "energy":
        activityInFrench = "Énergie";
        break;
      case "endurance":
        activityInFrench = "Endurance";
        break;
      case "strength":
        activityInFrench = "Force";
        break;
      case "speed":
        activityInFrench = "Vitesse";
        break;
      case "intensity":
        activityInFrench = "Intensité";
        break;
      default:
        activityInFrench = "";
        break;
    }
    return activityInFrench;
  };
  const allKinds = data.kind;
  const performance = data.data;
  if (error) {
    return <span>Oups il y a eu un petit problème</span>;
  } else if (loading) {
    return <div>loading</div>;
  }
  return (
    <section className="RadarContainer">
      <ResponsiveContainer width="100%" height="100%" padding={5}>
        <RadarChart
          cx="50%"
          cy="48%"
          innerRadius="10%"
          outerRadius="70%"
          data={performance}
          startAngle={-150}
          endAngle={210}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            tickFormatter={(kind) => formatActivity(kind, allKinds)}
            tick={{ fontSize: 14, fontWeight: 500 }}
            stroke="white"
            dy={4}
          />

          <Radar
            name="Performance"
            dataKey="value"
            fill="#e60000"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}
