import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import General from "../components/General";
import "../App.css";


function Main() {
  return (
    // <Router>
    <div className="main">
      <Sidebar />
      <General />
    </div>
  );
}

export default Main;
