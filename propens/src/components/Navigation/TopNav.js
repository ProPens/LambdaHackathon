import React from 'react';
import {NavLink} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {useStyles} from '../../StyledComponents/MaterialUIGlobalStyles';

const TopNav =  () =>{
    const logOutRedirect = useHistory();
    const userData = JSON.parse(localStorage.getItem('userdata'));
    const classes = useStyles();
    
    const logOutHandler = () =>{
      localStorage.clear();
      logOutRedirect.push('/');
    }

    return(
     <div className={classes.topNavigation}>
      <h1>ProPens</h1>
      <div className={classes.topNavigaionLinks}>
        <NavLink to="/" className={classes.topNavigationLink}>Dashboard</NavLink>
        <NavLink to="/register" className={classes.topNavigationLink}>Register</NavLink>
        {userData ? 
          <NavLink to="/" className={classes.topNavigationLink} onClick={logOutHandler}>Log Out</NavLink> : 
          <NavLink to="/login" className={classes.topNavigationLink}>Login</NavLink>
        }
      </div>
    </div>
    )
}

export default TopNav;