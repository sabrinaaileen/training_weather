import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <p>
        <a
          href="https://github.com/sabrinaaileen/training_weather"
          target="_blank"
          rel="noreferrer"
        >
          Open-source Code
        </a>{" "}
        by Sabrina Aileen Hodapp
      </p>
    </div>
  );
}

export default App;
