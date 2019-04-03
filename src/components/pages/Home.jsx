import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div id="barba-wrapper">
        <div className="barba-container">
          <div className="App home">
            <h1>Home</h1>
            <Link to='/about'>
              <h2>Go To About</h2>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;