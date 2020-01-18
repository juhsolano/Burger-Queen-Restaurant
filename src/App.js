import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Lounge from './pages/lounge';
import Kitchen from './pages/kitchen';
import Nav from './components/Nav';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/lounge" component={Lounge} />
        <Route path="/kitchen" component={Kitchen} />
      </Switch>
    </Router>);
};

export default App;