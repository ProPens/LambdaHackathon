import React from 'react';
import {Link} from 'react-router-dom';

const TopNav =  () =>{
    return(
        <div className="top-navigation">
      <h1>ProPens</h1>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
    )
}

export default TopNav;