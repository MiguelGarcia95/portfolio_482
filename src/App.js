import React, { Component } from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';

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
