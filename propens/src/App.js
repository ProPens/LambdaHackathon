import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TopNav from './components/Navigation/TopNav';
import BottomNav from './components/Navigation/BottomNav';
import Dashboard from './components/Dashboard/DashBoard';
import UserRegistration from './components/Forms/UserRegistration';
import UserLogin from './components/Forms/UserLogin';

const App = () => {
    return (
        <>
        <TopNav />
        <Switch>
            <Route exact path ='/'>
                <Dashboard />
            </Route>
            <Route path='/register'>
                <UserRegistration />
            </Route>
            <Route>
                <UserLogin />
            </Route>
        </Switch>
        <BottomNav />
      </>
    );
}

export default App;