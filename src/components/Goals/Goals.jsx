import React from "react";
import { useParams } from "react-router";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import "./Goals.css";
import useFetch from "../../utils/getDatas";

export default function Goals() {
  const urlId = useParams();
  const id = parseInt(urlId.id);
  console.log(id);

  const { data, loading, error } = useFetch(`../user/${id}.json`);
  const todayScore = data.todayScore;
  const scorePerCent = todayScore * 100;
  const rest = 100 - scorePerCent;
  const goals = [
    { name: "done", value: scorePerCent, fillColor: "#e60000" },
    { name: "notdone", value: rest, fillColor: `white` },
  ];
  const renderLabel = goals[0].value + "%";
  console.log(renderLabel);

  if (error) {
    return <span>Oups il y a eu un petit problème</span>;
  } else if (loading) {
    return <div>loading</div>;
  }
  return (
    <section className="GoalsContainer">
      <div className="GoalsTitle">Score</div>

      <ResponsiveContainer width="60%" height={180}>
        <PieChart>
          <Pie
            dataKey="value"
            data={goals}
            fill="#8884d8"
            innerRadius={65}
            outerRadius={80}
            startAngle={90}
            endAngle={480}
          >
            {goals.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fillColor}
                cornerRadius="50%"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="GoalsLegend">
        <p className="renderLabel">{renderLabel}</p>
        <p>
          de votre <br />
          objectif
        </p>
      </div>
    </section>
  );
}
