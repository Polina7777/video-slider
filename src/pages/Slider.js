import { BrowserRouter as Router, Switch, Route, Link, useLocation} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SliderPage from "../components/SliderPage";
// import SliderPage from "../components/Slider2";
import General from "../components/General";
import "../App.css";


function Slider() {

    const {state} = useLocation();
    const { active, videos } = state; // Read values passed on state
    console.log(active,videos)

  return (
    <div className="main">
      <Sidebar />
      <SliderPage videosArr={videos} active={active}/>
    </div>
  );
}

export default Slider;