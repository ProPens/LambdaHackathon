import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { StarterApp } from "./components/SampleView/StarterApp";

function App() {
  return (
    <div className="App">
      <div>
        <StarterApp />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
