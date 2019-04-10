import React from 'react';
import {Link} from 'react-router-dom';
// import styled, { keyframes } from "styled-components";
import styled from "styled-components";

import {Page} from '../../utils/styledClasses';
import {slideInLeft, slideOutLeft} from '../../utils/styledTransitions';
import Navbar from '../layout/Navbar';
import './css/Home.css';

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
      <section className="home_container">
        <section className="home_header">
          <h1>Miguel Garcia</h1>
        </section>
        <section className="home_button">
          <Link to='/work'>Work</Link>
        </section>
      </section>
    </HomePageElm>
  )
}

export default Home;