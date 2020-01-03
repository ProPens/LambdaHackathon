import React from 'react';
// import { yellowOrb, blueOrb, orangeOrb, greenOrb} from '../../Images';
import Background from '../../Images/background.png';
import RedOrb from '../../Images/redOrb.png';
import BlueOrb from '../../Images/blueOrb.png';
import OrangeOrb from '../../Images/orangeOrb.png';
import GreenOrb from '../../Images/greenOrb.png';
import YellowOrb from '../../Images/yellowOrb.png';


const Dashboard = () => {
    return(
        <>
        <img src={Background} className="backing" alt="background"></img>
        <div className="row1">
          <img src={RedOrb} className="orb"  alt="red orb"/>
        </div>
        <div className="row2">
          <img src={BlueOrb} className="orb" alt="blue orb" />
          <img src={OrangeOrb} className="orb" alt="orange orb" />
        </div>
        <div className="row3">
          <img src={GreenOrb} className="orb" alt="green orb" />
          <img src={YellowOrb} className="orb"  alt="yellow orb"/>
        </div>
        </>
    )
}

export default Dashboard;