import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Lounge from './pages/Lounge';
import Kitchen from './pages/Kitchen';
import Nav from './components/Nav';

const App = () => {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/lounge" component={Lounge} />
                    <Route path="/kitchen" component={Kitchen} />
                </Switch>
            </div>
        </Router>);
};

export default App;