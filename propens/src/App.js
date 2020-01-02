import React from 'react';
import TopBar from './components/App/NavBars/TopBar';
import BottomBar from './components/App/NavBars/BottomBar';
import Dashboard from './components/Dashboard/DashBoard';

const App = () => {
    return (
        <>
        <TopBar />
        <Dashboard />
        <BottomBar />
      </>
    );
}

export default App;