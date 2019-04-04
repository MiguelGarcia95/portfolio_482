import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import {Page} from '../../utils/styledClasses';
import {slideInRight, slideOutRight, slideOutBottom, slideInTop} from '../../utils/styledTransitions';

export const fadeIn = keyframes`
  from {
    opacity: 0;
    visibility: visible;
  }

  to {
    opacity: 1;
    visibility: visible;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }

  to {
    opacity: 0;
    visibility: visible;
  }
`;


const WorkPageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInTop} 0.5s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutBottom} 0.5s ease forwards;
  }
`;

class Work extends React.Component {
  render() {
    return (
      <WorkPageElm className='app work'>
        <h1>Work</h1>
        <Link to='/work/1'>
          <h2>Go To work 1</h2>
        </Link>
      </WorkPageElm>
    )
  }
}

export default Work;
