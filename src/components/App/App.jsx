import { BrowserRouter as Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Home from "../../pages/Home/Home";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Settings from "../../pages/Settings/Settings";
import Network from "../../pages/Network/Network";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Aside />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Dashboard />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/network">
          <Network />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
