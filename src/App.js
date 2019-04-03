import React, { Component } from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';
// import barba from '@barba/core'; // Or nothing if loaded via the browser

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
