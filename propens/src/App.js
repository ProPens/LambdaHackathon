import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TopNav from './components/Navigation/TopNav';
import BottomBar from './components/App/NavBars/BottomBar';
import Dashboard from './components/Dashboard/DashBoard';
import UserRegistration from './components/Auth/UserRegistration';
import UserLoginForm from './components/Auth/UserLogin';

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
            <Route path='/login'>
                <UserLoginForm />
            </Route>
        </Switch>
        <BottomBar />
      </>
    );
}

export default App;