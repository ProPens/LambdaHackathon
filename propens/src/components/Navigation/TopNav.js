import React from 'react';
import {Link} from 'react-router-dom';
import {useStyles} from '../../StyledComponents/MaterialUIGlobalStyles';

const TopNav =  () =>{
    const classes = useStyles();
    return(
     <div className={classes.topNavigation}>
      <h1>ProPens</h1>
      <div className={classes.topNavigaionLinks}>
        <Link to="/" className={classes.topNavigationLink}>Dashboard</Link>
        <Link to="/register" className={classes.topNavigationLink}>Register</Link>
        <Link to="/login" className={classes.topNavigationLink}>Login</Link>
      </div>
    </div>
    )
}

export default TopNav;