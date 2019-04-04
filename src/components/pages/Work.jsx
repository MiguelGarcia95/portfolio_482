import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";
import {projects} from '../../utils/projectsData';

import {Page, OverflowPage} from '../../utils/styledClasses';
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


const WorkPageElm = styled(OverflowPage)`
  &.page-enter {
    animation: ${slideInTop} 0.5s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutBottom} 0.5s ease forwards;
  }
`;

class Work extends React.Component {
  render() {
    // console.log(projects)
    return (
      <WorkPageElm className='app work'>
        <h1>Work</h1>
        <Link to='/work/1'>
          <h2>Go To work 1</h2>
        </Link>
        <section style={{height: '2000px', backgroundColor: 'red', width: '100%'}}>

        </section>
      </WorkPageElm>
    )
  }
}

export default Work;
