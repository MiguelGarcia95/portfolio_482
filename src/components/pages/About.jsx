import React from 'react';
import {Link} from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <div className="App about">
        <h1>About</h1>
        <Link to='/'>
          <h2>Go To Home</h2>
        </Link>
      </div>
    )
  }
}

export default About;
