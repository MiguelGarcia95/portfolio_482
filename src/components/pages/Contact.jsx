import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import {Page} from '../../utils/styledClasses';
import {slideInRight, slideOutRight} from '../../utils/styledTransitions';
import Navbar from '../layout/Navbar';
import './css/Contact.css';

const emailjs = window.emailjs;

const ContactPageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInRight} 0.5s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.5s ease forwards;
  }
`;

class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    subject: '',
    attachment: null
  }

  componentDidMount() {
    emailjs.init("user_8o2vUClVi4MeQTPwf50P6");
    setInterval(() => {
      this.loadContent();
    }, 500);
  }

  loadContent = () => {
    const contactContent = document.querySelector('.contact_content');
    if (contactContent) {
      contactContent.style.height = '400px';
    }
  }

  unloadContent = () => {
    const contactContent = document.querySelector('.contact_content');
    if (contactContent) {
      contactContent.style.height = '0px';
    }
  }

  // getContentHeight = () => {
  //   //should depend on page size;
  //   return `${(Math.ceil(projects.length / 2) * 350) + 50}px`;
  // }

  render() {
    return (
      <ContactPageElm className='app contact'>
        <Navbar />
        <section className="contact_content">
          <h1>Contact</h1>
          <section className="contact_form">

          </section>
        </section>
      </ContactPageElm>
    )
  }
}

export default Contact;
