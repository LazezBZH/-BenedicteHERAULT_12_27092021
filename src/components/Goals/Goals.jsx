import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./Goals.css";

export default function Goals({ data: { sessions } }) {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip_goals">
          <p> {`${payload[0].value} `}min</p>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="GoalsContainer">
      <div className="GoalsTitle">Durée moyenne des sessions</div>
      <ResponsiveContainer width="100%" height="108%" padding={5}>
        <LineChart
          data={sessions}
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
        <div>L</div>
        <div>M</div>
        <div>M</div>
        <div>J</div>
        <div>V</div>
        <div>S</div>
        <div>D</div>
      </div>
    </section>
  );
}

Goals.propTypes = {
  data: PropTypes.object.isRequired,
};
