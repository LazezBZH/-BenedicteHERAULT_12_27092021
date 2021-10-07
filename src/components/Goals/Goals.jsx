import { useParams } from "react-router";
import {
  BarChart,
  CartesianGrid,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import "./Goals.css";
import useFetch from "../../utils/getDatas";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p> {`${payload[0].value} kg`}</p>
        <p> {`${payload[1].value} kCal`}</p>
      </div>
    );
  }

  return null;
};

export default function Goals() {
  const urlId = useParams();
  const id = parseInt(urlId.id);
  console.log(id);

  const { data, loading, error } = useFetch(`../user/${id}/activity.json`);
  const goal = data.sessions;
  console.log(goal);

  if (error) {
    return <span>Oups il y a eu un petit problème</span>;
  } else if (loading) {
    return <div>loading</div>;
  }

  return (
    <section className="GoalsContainer">
      <div className="GoalsTitle">Activité quotidienne</div>
      <BarChart
        width={600}
        height={300}
        data={goal}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barCategoryGap="30%"
      >
        <CartesianGrid
          strokeDasharray="2 5"
          vertical={false}
          stroke="#DEDEDE"
        />
        <XAxis
          dataKey="day"
          tickLine={false}
          padding={{ left: -25, right: -25 }}
        />
        <YAxis yAxisId="left" orientation="left" hide={true} />
        <YAxis
          yAxisId="right"
          orientation="right"
          domain={["dataMin-10", "dataMax+2"]}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip position={{ y: 40 }} content={<CustomTooltip />} />
        <Legend
          verticalAlign="top"
          align="right"
          iconSize="10"
          iconType="circle"
          height={40}
        />
        <Bar
          yAxisId="right"
          dataKey="kilogram"
          fill="black"
          radius={[50, 50, 0, 0]}
        />
        <Bar
          yAxisId="left"
          dataKey="calories"
          fill="#E60000"
          radius={[50, 50, 0, 0]}
        />
      </BarChart>
    </section>
  );
}
