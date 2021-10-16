import React from "react";
import "./Score.css";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function Score({ data }) {
  const todayScore = data;
  const scorePerCent = todayScore * 100;
  const rest = 100 - scorePerCent;
  const score = [
    { name: "done", value: scorePerCent, fillColor: "#e60000" },
    { name: "notdone", value: rest, fillColor: `white` },
  ];
  const renderLabel = score[0].value + "%";
  console.log(renderLabel);

  return (
    <section className="ScoreContainer">
      <div className="ScoreTitle">Score</div>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            data={score}
            fill="#8884d8"
            innerRadius={68}
            outerRadius={80}
            startAngle={90}
            endAngle={480}
          >
            {score.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fillColor}
                cornerRadius="50%"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="ScoreLegend">
        <p className="renderLabel">{renderLabel}</p>
        <p>
          de votre <br />
          objectif
        </p>
      </div>
    </section>
  );
}
