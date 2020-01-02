import React from 'react';
import TopNav  from './components/Navigation/TopNav';
import BottomNav from './components/Navigation/BottomNav';
import Dashboard from './components/Dashboard/DashBoard';

const App = () => {
    return (
        <>
        <TopNav />
        <Dashboard />
        <BottomNav />
      </>
    );
}

export default App;