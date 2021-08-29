import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import CurrentPrice from './components/CurrentPrice';
import Select from './components/HistorySelect';
import Result from './components/HistoryResult';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path = '/' exact>
          <CurrentPrice/>
        </Route>
        <Route path = '/current'>
          <CurrentPrice/>
        </Route>
        <Route path = '/history/select'>
          <Select/>
        </Route>
        <Route path = '/history/result'>
          <Result/>
        </Route>
        <Route path = '/about'>
          <AboutMe/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
