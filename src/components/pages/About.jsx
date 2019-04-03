import React from 'react';
import {Link} from 'react-router-dom';

class About extends React.Component {

  render() {

    return (
      <div id="barba-wrapper">
        <div className="barba-container">
          <div className="App about">
            <h1>About</h1>
            <Link to='/'>
              <h2>Go To Home</h2>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
