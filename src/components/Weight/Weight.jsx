import { useParams } from "react-router";
import {
  BarChart,
  CartesianGrid,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Weight.css";
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

export default function Weight() {
  const urlId = useParams();
  const id = parseInt(urlId.id);
  console.log(id);

  const { data, loading, error } = useFetch(`../user/${id}/activity.json`);
  const weight = data.sessions;
  console.log(weight);
  const formatXAxis = (tickItem) => {
    return tickItem + 1;
  };

  if (error) {
    return <span>Oups il y a eu un petit problème</span>;
  } else if (loading) {
    return <div>loading</div>;
  }

  return (
    <section className="WeightContainer">
      <div className="WeightLegend">
        <div className="WeightTitle">Activité quotidienne</div>
        <div className="WeightCircles">
          <div className="WeightCircle">
            <div className="weight-circle_black"></div>
            <p>Poids (kg)</p>
          </div>
          <div className="WeightCircle">
            <div className=" Weight-circle_red"></div>
            <p>Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={weight}
          margin={{
            top: 30,
            right: 50,
            left: 20,
            bottom: 10,
          }}
          barCategoryGap="35%"
          barGap={2}
        >
          <CartesianGrid
            strokeDasharray="2 5"
            vertical={false}
            stroke="#DEDEDE"
          />
          <XAxis
            tickFormatter={formatXAxis}
            tickLine={false}
            padding={{ left: -45, right: -45 }}
            tickSize="25"
          />
          <YAxis yAxisId="left" orientation="left" hide={true} />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={["dataMin-10", "dataMax+2"]}
            axisLine={false}
            tickLine={false}
            tickSize="50"
          />
          <Tooltip position={{ y: 40 }} content={<CustomTooltip />} />

          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="black"
            radius={[50, 50, 0, 0]}
            maxBarSize={12}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            radius={[50, 50, 0, 0]}
            maxBarSize={12}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
