import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TopBar from './components/App/NavBars/TopBar';
import BottomBar from './components/App/NavBars/BottomBar';
import Dashboard from './components/Dashboard/DashBoard';
import Registration from './components/User/Registration/Registration';
import Login from './components/User/Login/Login';

const App = () => {
    return (
        <>
        <TopBar />
        <Switch>
            <Route exact path ='/'>
                <Dashboard />
            </Route>
            <Route path='/register'>
                <Registration />
            </Route>
            <Route>
                <Login />
            </Route>
        </Switch>
        <BottomBar />
      </>
    );
}

export default App;