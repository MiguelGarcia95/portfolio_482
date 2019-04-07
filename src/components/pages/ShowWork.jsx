import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {projects} from '../../utils/projectsData';
import {Page} from '../../utils/styledClasses';
import {slideInTop, slideOutBottom} from '../../utils/styledTransitions';
import ProjectSlider from '../layout/ProjectSlider';

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

const ShowWorkPageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInTop} 0.5s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutBottom} 0.5s ease forwards;
  }
`;

class ShowWork extends React.Component {
  state = {
    project: null
  }

  componentDidMount() {
    this.setState({project: null});
    this.setState({project: this.fetchProject(this.props.match.params.workName)});
    document.getElementById('root').style.overflowY = 'hidden';
  }

  fetchProject = name => {
    return projects.reduce((fetchedProject, project) => {
      if (project.name === name) {
        fetchedProject = project;
      }
      return fetchedProject;
    }, null)
  }

  render() {
    const {project} = this.state;
    // const {project} = this.props;
    return (
      <ShowWorkPageElm className='app show_work'>
        {project && (
          <React.Fragment>
            <ProjectSlider />
            <h1>{project.name}</h1>
            <Link to='/work'>
              <h2>Go To work</h2>
            </Link>
          </React.Fragment>
        )}
      </ShowWorkPageElm>
    )
  }
}

export default ShowWork;
