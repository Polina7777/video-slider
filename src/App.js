
import Sidebar from './components/Sidebar'
import General from './components/General'
import './App.css';
import SliderPage from './components/SliderPage';

function App() {
  return (
    <div className="App">
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
      <Sidebar/>
      {/* <div>
      <Button>Click me</Button>
    </div> */}
    <General/>
    {/* <SliderPage/> */}
    </div>
  );
}

export default App;
