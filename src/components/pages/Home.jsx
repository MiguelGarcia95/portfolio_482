import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

import {Page} from '../../utils/styledClasses';
import {loadContent, unloadContent} from '../../utils/functions';
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

class Home extends React.Component {
  componentDidMount() {
    setInterval(() => {
      loadContent('.home_container', '90vh');
    }, 500);
  }

  compoenntWillUnmount() {
    setInterval(() => {
      unloadContent('.home_container');
    }, 500);
  }

//   Hey! 

//     CSS
//     Javascript (ReactJS)
//     any Javascript animation library (GSAP, and Three.JS in particular),
//     PHP (Laravel)
//     Wordpress (seeing what some plugins do is something else).

// Personal hobbies include reading, art/design, video games, and occasionally lurk blogs and forums.

  render() {
    return (
      <HomePageElm className='app home'>
        <Navbar />
        <section className="home_container">
          <section className="home_header">
            <h1>Miguel Garcia</h1>
          </section>
          <section className="home_button">
            <Link to='/work'>
              <i className="fas fa-long-arrow-alt-right fa-2x"></i>
            </Link>
          </section>
          <section className="home_content">
            <p>
              I’m Miguel, a Web Developer with an ever growing passion for frontend development, 
              and some interest in backend technologies. I also enjoy character design on the side as a hobby.
              Web Apps are the future after all. 
              Preferred web technologies to work with include:
            </p>
          </section>
        </section>
      </HomePageElm>
    )
  }
}

export default Home;