import "./Dashboard.css";
import { useParams } from "react-router-dom";
import Hello from "../../components/Hello/Hello";
import DashboardAside from "../../components/DashboardAside/DashboardAside";
import Goals from "../../components/Goals/Goals";

export default function Dashboard() {
  let userId = useParams();
  console.log(userId);
  return (
    <div className="dashboard">
      <Hello />
      <DashboardAside />
      <Goals />
    </div>
  );
}
