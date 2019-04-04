import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import {Page} from '../../utils/styledClasses';
import {slideInRight, slideOutRight} from '../../utils/styledTransitions';

const ContactPageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInRight} 0.5s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.5s ease forwards;
  }
`;

class Contact extends React.Component {
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
