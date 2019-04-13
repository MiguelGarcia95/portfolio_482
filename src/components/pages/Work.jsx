import React from 'react';
import styled from "styled-components";

import {projects} from '../../utils/projectsData';
import WorkItem from '../layout/WorkItem';
import Navbar from '../layout/Navbar';
import {OverflowPage} from '../../utils/styledClasses';
import {loadContent, unloadContent} from '../../utils/functions';
import {slideInLeft, slideOutRight} from '../../utils/styledTransitions';
import './css/Work.css';


const WorkPageElm = styled(OverflowPage)`
  &.page-enter {
    animation: ${slideInLeft} 0.7s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.7s ease forwards;
  }
`;

class Work extends React.Component {
  componentDidMount() {
    setInterval(() => {
      loadContent('.work_content', this.getContentHeight());
    }, 700)
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
        <section className="work_title">
          <h1>Work</h1>
        </section>
        <section className='work_content' >
          {this.displayWork(projects)}
        </section>
      </WorkPageElm>
    )
  }
}

export default Work;
