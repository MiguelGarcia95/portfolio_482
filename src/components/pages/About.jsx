import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";
import {Page} from '../../utils/styledClasses';

const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;
const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutRight = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
`;

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
