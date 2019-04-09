import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import {projects} from '../../utils/projectsData';
import WorkItem from '../layout/WorkItem';
import Navbar from '../layout/Navbar';
import {Page, OverflowPage} from '../../utils/styledClasses';
import {loadContent, unloadContent} from '../../utils/functions';
import {slideInRight, slideOutRight, slideOutBottom, slideInTop} from '../../utils/styledTransitions';
import './css/Work.css';


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
      loadContent('.work_content', this.getContentHeight());
    }, 500)
  }

  getContentHeight = () => {
    //should depend on page size;
    return `${(Math.ceil(projects.length / 2) * 350) + 50}px`;
  }

  displayWork = projects => {
    return projects.map(project => {
      return <WorkItem key={project.name} unloadContent={unloadContent} project={project}/>
    }) 
  }

  render() {
    return (
      <WorkPageElm className='app work'>
        <Navbar />
        <section className='work_content' >
          {this.displayWork(projects)}
        </section>
      </WorkPageElm>
    )
  }
}

export default Work;
