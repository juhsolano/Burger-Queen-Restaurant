import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Lounge from './pages/lounge';
import Kitchen from './pages/kitchen';
import Main from './pages/main';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/lounge' component={Lounge} />
        <Route path='/kitchen' component={Kitchen} />
        <Route path='/' component={Main} />
      </Switch>
    </Router>);
};

export default App;