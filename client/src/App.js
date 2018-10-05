import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/resume" component={HomePage} />
    </Switch>
  </main>
);

export default App;
