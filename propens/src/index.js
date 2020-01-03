import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { StarterApp } from "./components/SampleView/StarterApp";
import BlueMath from "./components/App/OrbButtons/BlueMath";
import GreenScience from "./components/App/OrbButtons/GreenScience";
import OrangeSocStud from "./components/App/OrbButtons/OrangeSocStud";
import PurpleArts from "./components/App/OrbButtons/PurpleArts";
import RedAthletics from "./components/App/OrbButtons/RedAthletics";
import YellowEnglish from "./components/App/OrbButtons/YellowEnglish";

function App() {
  return (
    <div className="App">
      <div>
        <BlueMath />
        <GreenScience />
        <OrangeSocStud />
        <PurpleArts />
        <RedAthletics />
        <YellowEnglish />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
