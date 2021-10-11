import "./Dashboard.css";
import { useParams } from "react-router-dom";
import Hello from "../../components/Hello/Hello";
import DashboardAside from "../../components/DashboardAside/DashboardAside";
import Weight from "../../components/Weight/Weight";
import Header from "../../components/Header/Header";
import Aside from "../../components/Aside/Aside";
import Goals from "../../components/Goals/Goals";
import Score from "../../components/Score/Score";
import RadarFig from "../../components/Radar/Radar";

export default function Dashboard() {
  let userId = useParams();
  console.log(userId);
  return (
    <div className="dashboard">
      <Header />
      <Aside />
      <Hello />
      <DashboardAside />
      <div className="allFigures">
        <Weight />
        <div className="figures">
          <Goals />
          <RadarFig />
          <Score />
        </div>
      </div>
    </div>
  );
}
