import React from 'react';
// import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import {Page} from '../../utils/styledClasses';
import {slideInLeft, slideOutLeft} from '../../utils/styledTransitions';
import Navbar from '../layout/Navbar';

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
      <Navbar />
      <h1>Home</h1>
    </HomePageElm>
  )
}

export default Home;