import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import {Page} from '../../utils/styledClasses';
import {slideInRight, slideOutRight, slideOutBottom, slideInTop} from '../../utils/styledTransitions';

export const sss = keyframes`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const WorkPageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInTop} 0.5s linear forwards;
  }
  &.page-exit {
    animation: ${slideOutBottom} 0.5s linear forwards;
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
