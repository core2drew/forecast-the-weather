import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import 'bulma/bulma.sass';
import './sass/main.scss';
import Home from './pages/Home'
import Location from './pages/Location'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/location/:woeid" component={Location} />
        <Redirect from="/location" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
