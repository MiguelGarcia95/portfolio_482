import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {projects} from '../../utils/projectsData';
import {Page} from '../../utils/styledClasses';
import {slideInLeft, slideOutRight} from '../../utils/styledTransitions';
import WorkSlider from '../layout/WorkSlider';
import Navbar from '../layout/Navbar';
import './css/ShowWork.css';

const ShowWorkPageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInLeft} 0.5s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.5s ease forwards;
  }
`;

class ShowWork extends React.Component {
  state = {
    project: null
  }

  componentDidMount() {
    this.setState({project: null});
    this.setState({project: this.fetchProject(this.props.match.params.workName)});
  }

  fetchProject = name => {
    return projects.reduce((fetchedProject, project) => {
      if (project.name === name) {
        fetchedProject = project;
      }
      return fetchedProject;
    }, null)
  }
  
  displayTags = tags => {
    return tags.map(tag => {
      return <span className='tag' key={tag}>{tag}</span>
    })
  }

  displayTechUsed = list => {
    return list.map(item => {
      return <li key={item}>{item}</li>
    })
  }

  scrollDown = () => {
    this.pageDown.scrollIntoView({behavior: 'smooth'});
  }

  render() {
    const {project} = this.state;
    return (
      <ShowWorkPageElm className='app show_work'>
        <Navbar />
        {project && (
          <React.Fragment>
            <WorkSlider project={project} />
            <Link className='show_work_back' id="chevron-arrow-left" to='/work'></Link>

            <section className="scroll_down">
              <h2>Scroll Down</h2>
              <section id="chevron-arrow-down" onClick={() => this.scrollDown()}></section>
            </section>

            <section className="show_work_content">
              <section className="show_work_tags">{this.displayTags(project.tags)}</section>
              <div ref={node => this.pageDown = node}></div>
              <section className="show_work_about">
                <h2>About Project</h2>
                <p>
                  Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. Vulgtm sll'ha li'hee goka, naooboshu f'n'ghft ep 'ai goka Cthulhu f'geb orr'e, s'uhn grah'n vulgtm nnngeb cgnaiih uaaah vulgtm mg.
                  Ee shugg Shub-Niggurath k'yarnak wgah'n lloig syha'h hafh'drn, sgn'wahlog lloig phlegeth wgah'n syha'h 'ai, r'luh lloigor lw'nafh stell'bsna ep vulgtmagl. Goka y'hah h'throd 'bthnk naehye hlirgh gotha lloignyth h'nog syha'h s'uhn, ftaghu nw tharanak Yoggoth orr'e h'uln n'gha kadishtu nnnsyha'h, nglw'nafh Tsathoggua hupadgh ah ron fm'latgh hlirgh s'uhnyar lw'nafh. Nw naflAzathoth ya lw'nafhnyth y-tharanak naNyarlathotep, syha'h li'hee h'Tsathoggua fhtagn ehye f'mg, sll'ha nnnHastur ah ep.
                </p>
              </section>
              <section className="show_work_details">
                <h2>Tech/Tools Used</h2>
                <ul>
                  {this.displayTechUsed(project.technology)}
                </ul>
              </section>
              <section className="show_work_more">
                <a href="linkhere.com" className="show_work_contact_link">Visit Page</a>
                <Link className='show_work_contact' to='/contact'>Contact</Link>            
              </section>
            </section>

          </React.Fragment>
        )}
      </ShowWorkPageElm>
    )
  }
}

export default ShowWork;
