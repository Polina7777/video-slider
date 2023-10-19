import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Sidebar from './components/Sidebar'
import General from './components/General'
import './App.css';
import SliderPage from './components/SliderPage';
import Main from './pages/Main';
import Slider from './pages/Slider'

function App() {
  return (
    // <Router>
    <div className="App">
      <Routes>
      <Route index element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/slider" element={<Slider/>} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Sidebar/> */}
      {/* <div>
      <Button>Click me</Button>
    </div> */}
    {/* <General/> */}
    {/* <SliderPage/> */}
    </Routes>
    </div>
  );
}

export default App;
