import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import {Page} from '../../utils/styledClasses';
import {slideInRight, slideOutRight} from '../../utils/styledTransitions';

const AboutPageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInRight} 0.5s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.5s ease forwards;
  }
`;

class About extends React.Component {
  render() {
    return (
      <AboutPageElm className='app about'>
        <h1>About</h1>
        <Link to='/'>
          <h2>Go To Home</h2>
        </Link>
      </AboutPageElm>
    )
  }
}

export default About;
