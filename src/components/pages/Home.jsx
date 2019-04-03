import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import {Page} from '../../utils/styledClasses';
import {slideInLeft, slideOutLeft} from '../../utils/styledTransitions';

const HomePageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInLeft} 0.5s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 0.5s ease forwards;
  }
`;

const Home = () => {
  return (
    <HomePageElm className='app home'>
      <h1>Home</h1>
      <Link to='/about'>
        <h2>Go To About</h2>
      </Link>
    </HomePageElm>
  )
}

export default Home;