import React from "react";
import '../../../App.css';
import PurpleArtsDot from '../BarSubjectDots/Arts/PurpleArtsDot';
import RedAthletDot from '../BarSubjectDots/Athl/RedAthletDot';
import YellowEngDot from '../BarSubjectDots/Eng/YellowEngDot';
import BlueMathDot from '../BarSubjectDots/Math/BlueMathDot';
import GreenSciDot from '../BarSubjectDots/Sci/GreenSciDot';
import OrngSocDot from '../BarSubjectDots/SS/OrngSocDot';

// import BlueMathDot from '../BarSubjectDots/Math/BlueMathDot';
// import GreenSciDot from '../BarSubjectDots/Sci/GreenSciDot';
// import OrngSocDot from '../BarSubjectDots/SS/OrngSocDot';
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


const BottomBar = () => {
  return (
    <footer className="bottombar">
      <div className="row">
        <img src={NoteIcon} className="barbutton" alt="note icon" />
        <img src={HeartIcon} className="barbutton" alt="heart icon" />
      </div>
      <div className="row3">
        <div className= "colorbutton">
        <PurpleArtsDot />
        </div>
        <div className= "colorbutton">
        <RedAthletDot className= "colorbutton"/>
        </div>
        <div className= "colorbutton">
        <YellowEngDot className= "colorbutton"/>
        </div>
        <div className= "colorbutton">
        <BlueMathDot className= "colorbutton"/>
        </div>
        <div className= "colorbutton">
        <GreenSciDot className= "colorbutton"/>
        </div>
        <div className= "colorbutton">
        <OrngSocDot className= "colorbutton"/>
        </div>
      </div>
      <div className="bottomright">
        <img src={CircleMenu} className="barbutton" alt="circle menu" />
        <img src={MessageIcon} className="barbutton" alt="message icon" />
      </div>
    </footer>
  );
};

export default BottomBar;
