import React from "react";
// import { red, heartIcon, orange } from "../../../Images";
// import {
//   yellow,
//   blue,
//   green,
//   circleMenu,
//   messageIcon
// } from "../../../Images";

import NoteIcon from '../../../Images/noteIcon.png';
import HeartIcon from '../../../Images/heartIcon.png';
import MessageIcon from '../../../Images/messageIcon.png';
import CircleMenu  from '../../../Images/circleMenu.png';

import Green from '../../../Images/green.png';
import Blue from '../../../Images/blue.png';
import Red from '../../../Images/red.png';
import Orange from '../../../Images/orange.png';
import Yellow from '../../../Images/yellow.png';


const BottomBar = () => {
  return (
    <footer className="bottombar">
      <div className="row">
        <img src={NoteIcon} className="barbutton" alt="note icon" />
        <img src={HeartIcon} className="barbutton" alt="heart icon" />
      </div>
      <div className="row">
        <img src={Green} className="colorbutton" alt="green little orb" />
        <img src={Blue} className="colorbutton" alt="blue little orb" />
        <img src={Red} className="colorbutton"  alt="red little orb"/>
        <img src={Orange} className="colorbutton" alt="orange little orb" />
        <img src={Yellow} className="colorbutton" alt="yellow little orb" />
      </div>
      <div className="bottomright">
        <img src={CircleMenu} className="barbutton" alt="circle menu" />
        <img src={MessageIcon} className="barbutton" alt="message icon" />
      </div>
    </footer>
  );
};

export default BottomBar;
