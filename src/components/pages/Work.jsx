import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import {projects} from '../../utils/projectsData';
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
    setInterval(() => {
      this.loadContent();
    }, 500)
  }

  loadContent = () => {
    const workContent = document.querySelector('.work_content');
    if (workContent) {
      workContent.style.height = this.getContentHeight();
    }
  }

  unloadContent = () => {
    const workContent = document.querySelector('.work_content');
    if (workContent) {
      workContent.style.height = '0px';
    }
  }

  getContentHeight = () => {
    //should depend on page size;
    return `${(Math.ceil(projects.length / 2) * 350) + 50}px`;
  }

  displayWork = projects => {
    return projects.map(project => {
      return <WorkItem key={project.name} unloadContent={this.unloadContent} project={project}/>
    }) 
  }

  render() {
    return (
      <WorkPageElm className='app work'>
        <section className="nav_menu">
          
        </section>
        <section className='work_content' >
          {this.displayWork(projects)}
        </section>
      </WorkPageElm>
    )
  }
}

export default Work;
