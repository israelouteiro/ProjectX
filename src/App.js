import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Start from './screens/Start';
import Home from './screens/Home';

export default function App() {
  return (
    <Router>
      <div>
        {/* componentes globais */}
        <Switch>
          <Route path="/" exact={true}>
            <Start />
          </Route>
          <Route path="/home" exact={true}>
            <Home />
          </Route>
          <Route path="/add-user" exact={true}>
            <Add-User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
