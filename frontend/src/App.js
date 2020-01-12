import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage';
import LoginPage from './pages/login';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './App.css';

library.add(fab, faBars);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
