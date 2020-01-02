import React from 'react';
import {background, redOrb, yellowOrb, blueOrb, orangeOrb, greenOrb} from '../../Images';


const Dashboard = () => {
    return(
        <>
        <img src={background} className="backing" alt="background"></img>
        <div className="row1">
          <img src={redOrb} className="orb"  alt="red orb"/>
        </div>
        <div className="row2">
          <img src={blueOrb} className="orb" alt="blue orb" />
          <img src={orangeOrb} className="orb" alt="orange orb" />
        </div>
        <div className="row3">
          <img src={greenOrb} className="orb" alt="green orb" />
          <img src={yellowOrb} className="orb"  alt="yellow orb"/>
        </div>
        </>
    )
}

export default Dashboard;