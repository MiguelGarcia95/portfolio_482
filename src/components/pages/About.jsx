import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

const Page = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  color: white;
  overflow: hidden;
  
  &.home {
    background-color: mediumslateblue;
  }

  &.about {
    background-color: burlywood;
  }

  h1 {
    font-weight: 300;
    color: white;
  }

  h2 {
    font-weight: 400;
  }
  p {
    font-size: 1rem;
    max-width: 400px;
    margin: 20px auto;
    color: #37474f;
  }
  a {
    color: white;
    text-decoration: none; 
    margin-top: 50px;
  }
`;

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
    animation: ${slideInRight} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.2s forwards;
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
