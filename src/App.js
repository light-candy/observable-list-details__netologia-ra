import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { List } from './components/List';
import { Details } from './components/Details';
import './App.css';

function App() {
  return (
   <Router>
      <Route exact path='/' component={List} />
      <Switch>
       <Route path='/:id/details' component={Details} />
      </Switch>
   </Router>
  );
}

export default App;
