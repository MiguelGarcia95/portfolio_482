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

const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #e3f2fd;
  font-family: "Open Sans", sans-serif;
`;

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