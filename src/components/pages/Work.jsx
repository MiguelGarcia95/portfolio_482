import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";
import {projects} from '../../utils/projectsData';

import {Page, OverflowPage} from '../../utils/styledClasses';
import {slideInRight, slideOutRight, slideOutBottom, slideInTop} from '../../utils/styledTransitions';

const WorkPageElm = styled(OverflowPage)`
  &.page-enter {
    animation: ${slideInTop} 0.5s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutBottom} 0.5s ease forwards;
  }
`;

class Work extends React.Component {
  componentDidMount() {
    document.getElementById('root').style.overflowY = 'auto';

  }

  loadContent = () => {
    document.querySelector('.work_content').style.height = 'auto';
    document.querySelector('.work_content').style.overflow = 'auto';
  }

  render() {
    // console.log(projects)
    return (
      <WorkPageElm className='app work'>
        <h1>Work</h1>
        <Link to='/work/1'>
          <h2>Go To work 1</h2>
        </Link>
        <section className='work_content' style={{height: '200px', backgroundColor: 'red', width: '100%'}}>

        </section>
      </WorkPageElm>
    )
  }
}

export default Work;
