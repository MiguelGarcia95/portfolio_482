import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

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
      workContent.style.height = '200px';
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

    return (
      <WorkPageElm className='app work'>
        <h1>Work</h1>
        <section className='work_content' >
          <section className="work_item">
            <section className="work_item_image"></section>
            <Link to='/work/testing-data' onClick={() => {this.unloadContent()}}>
              <h2>Go 1</h2>
            </Link>
          </section>
        </section>
      </WorkPageElm>
    )
  }
}

export default Work;
