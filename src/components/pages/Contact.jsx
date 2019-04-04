import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import {Page} from '../../utils/styledClasses';
import {slideInRight, slideOutRight} from '../../utils/styledTransitions';

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
    emailjs.init("user_8o2vUClVi4MeQTPwf50P6")
  }

  render() {
    return (
      <ContactPageElm className='app contact'>
        <h1>Contact</h1>
        <Link to='/'>
          <h2>Go To Home</h2>
        </Link>
      </ContactPageElm>
    )
  }
}

export default Contact;
