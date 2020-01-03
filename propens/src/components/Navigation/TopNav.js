import React from 'react';
import {NavLink} from 'react-router-dom';
import {useStyles} from '../../StyledComponents/MaterialUIGlobalStyles';

const TopNav =  () =>{
    const classes = useStyles();
    return(
     <div className={classes.topNavigation}>
      <h1>ProPens</h1>
      <div className={classes.topNavigaionLinks}>
        <NavLink to="/" className={classes.topNavigationLink}>Dashboard</NavLink>
        <NavLink to="/register" className={classes.topNavigationLink}>Register</NavLink>
        <NavLink to="/login" className={classes.topNavigationLink}>Login</NavLink>
      </div>
    </div>
    )
}

export default TopNav;