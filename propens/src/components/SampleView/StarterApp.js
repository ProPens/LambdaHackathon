import React from "react";
import {
  background,
  redOrb,
  yellowOrb,
  blueOrb,
  orangeOrb,
  greenOrb
} from "../App/Images/index";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";

export const StarterApp = () => {
  return (
    <>
      <TopBar />
      <img src={background} className="backing"></img>
      <div className="row1">
        <img src={redOrb} className="orb" />
      </div>
      <div className="row2">
        <img src={blueOrb} className="orb" />
        <img src={orangeOrb} className="orb" />
      </div>
      <div className="row3">
        <img src={greenOrb} className="orb" />
        <img src={yellowOrb} className="orb" />
      </div>

      <BottomBar />
    </>
  );
};
