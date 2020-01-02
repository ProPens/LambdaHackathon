import React from "react";
import { red, heartIcon, orange } from "../App/Images/index";
import {
  yellow,
  blue,
  green,
  circleMenu,
  messageIcon,
  noteIcon
} from "../App/Images/index";

const BottomBar = () => {
  return (
    <footer className="bottombar">
      <div className="row">
        <img src={noteIcon} className="barbutton" />
        <img src={heartIcon} className="barbutton" />
      </div>
      <div className="row">
        <img src={green} className="colorbutton" />
        <img src={blue} className="colorbutton" />
        <img src={red} className="colorbutton" />
        <img src={orange} className="colorbutton" />
        <img src={yellow} className="colorbutton" />
      </div>
      <div className="bottomright">
        <img src={circleMenu} className="barbutton" />
        <img src={messageIcon} className="barbutton" />
      </div>
    </footer>
  );
};

export default BottomBar;
