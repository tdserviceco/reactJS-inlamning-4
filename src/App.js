import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Tickets from './pages/Tickets';
import Buy from './pages/Buy';
import NoMatch from './pages/NoMatch';
import Events from './pages/Events';

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to='/events' />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/buy/ticket-:id">
            <Buy />
          </Route>
          <Route exact path="/tickets/:id">
            <Tickets />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </main>
  )
}

export default App;