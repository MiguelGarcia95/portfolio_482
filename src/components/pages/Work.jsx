import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import WorkItem from '../layout/WorkItem';
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
    setInterval(() => {
      this.loadContent();
    }, 500)
  }

  loadContent = () => {
    const workContent = document.querySelector('.work_content');
    if (workContent) {
      workContent.style.height = '500px';
      // document.querySelector('.work_content').style.overflow = 'auto';
    }
  }

  unloadContent = () => {
    const workContent = document.querySelector('.work_content');
    if (workContent) {
      workContent.style.height = '0px';
      // document.querySelector('.work_content').style.overflow = 'auto';
    }
  }

  // https://docs.microsoft.com/en-us/sharepoint/dev/images/design-placeholders-and-fallbacks.png

  render() {
    
    // Math.ceil(5/2)
    return (
      <WorkPageElm className='app work'>
        <section className='work_content' >
          <WorkItem />
          <WorkItem />
        </section>
      </WorkPageElm>
    )
  }
}

export default Work;
