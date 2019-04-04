import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import {Page} from '../../utils/styledClasses';
import {slideInRight, slideOutRight} from '../../utils/styledTransitions';

const WorkPageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInRight} 0.5s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.5s ease forwards;
  }
`;

class Work extends React.Component {
  render() {
    return (
      <WorkPageElm className='app work'>
        <h1>Work</h1>
        <Link to='/'>
          <h2>Go To Home</h2>
        </Link>
      </WorkPageElm>
    )
  }
}

export default Work;
