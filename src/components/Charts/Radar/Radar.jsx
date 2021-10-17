import React from "react";
import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "./Radar.css";

export default function RadarFig({ data: { data } }) {
  const formatActivity = (kind) => {
    let activitiInFrench;
    switch (kind) {
      case "cardio":
        activitiInFrench = "Cardio";
        break;
      case "energy":
        activitiInFrench = "Énergie";
        break;
      case "endurance":
        activitiInFrench = "Endurance";
        break;
      case "strength":
        activitiInFrench = "Force";
        break;
      case "speed":
        activitiInFrench = "Vitesse";
        break;
      case "intensity":
        activitiInFrench = "Intensité";
        break;
      default:
        activitiInFrench = "";
        break;
    }
    return activitiInFrench;
  };
  return (
    <section className="RadarContainer">
      <ResponsiveContainer
        className="containerRadar"
        width="100%"
        height="100%"
        padding={5}
      >
        <RadarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius="70%"
          data={data}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            tickFormatter={(kind) => formatActivity(kind)}
            tick={{ fontSize: 12, fontWeight: 500 }}
            stroke="white"
            dy={4}
            radius="100"
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

RadarFig.propTypes = {
  data: PropTypes.object.isRequired,
};
