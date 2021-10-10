import React from "react";
import { useParams } from "react-router";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./Goals.css";
import useFetch from "../../utils/getDatas";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip_goals">
        <p> {`${payload[0].value} `}min</p>
      </div>
    );
  }

  return null;
};

export default function Goals() {
  const urlId = useParams();
  const id = parseInt(urlId.id);
  console.log(id);

  const { data, loading, error } = useFetch(
    `../user/${id}/average-session.json`
  );
  const goals = data.sessions;
  const formatXAxis = (day) => {
    let letterForDay;
    switch (day) {
      case 1:
        letterForDay = "L";
        break;
      case 2:
        letterForDay = "M";
        break;
      case 3:
        letterForDay = "M";
        break;
      case 4:
        letterForDay = "J";
        break;
      case 5:
        letterForDay = "V";
        break;
      case 6:
        letterForDay = "S";
        break;
      case 7:
        letterForDay = "D";
        break;
      default:
        letterForDay = "";
        break;
    }
    return letterForDay;
  };

  if (error) {
    return <span>Oups il y a eu un petit problème</span>;
  } else if (loading) {
    return <div>loading</div>;
  }
  return (
    <section className="GoalsContainer">
      <div className="GoalsTitle">Durée moyenne des sessions</div>
      <ResponsiveContainer width="100%" height={340} padding={5}>
        <LineChart
          data={goals}
          margin={{ top: 0, right: 0, left: 0, bottom: -10 }}
        >
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            padding={{ left: 10, right: 10 }}
            tick={false}
          />
          <YAxis
            hide={true}
            domain={["dataMin-30", "dataMax+40"]}
            tickLine={false}
            axisLine={false}
            tickCount={0}
            padding={{ top: 0, bottom: -20 }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "black",
              strokeOpacity: 0.05,
              strokeWidth: 50,
            }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.6)"
            dot={false}
            activeDot={{
              stroke: "white",
              strokeOpacity: 0.2,
              fill: "white",
              strokeWidth: 15,
              r: 5,
            }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="formatXAxis">
        {goals.map((item) => (
          <div key={item.day} className="letters">
            {formatXAxis(item.day)}
          </div>
        ))}
      </div>
    </section>
  );
}
