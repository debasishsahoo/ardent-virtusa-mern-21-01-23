import BascicLifeCycleComponent from './Components/BascicLifeCycleComponent'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Component Life-Cycle
        </a>
        <BascicLifeCycleComponent />
      </header>
    </div>
  );
}

export default App;
