import React from 'react';
import ProjectSlider from './ProjectSlider';

const WorkSlider = ({project}) => {
  return (
    <section className="show_work_display">
      <section className="show_work_display_header">
        <h1 className="show_work_name">{project.name}</h1>
        <a href="linkhere.com" className="show_work_link">Visit Page</a>
      </section>
      <ProjectSlider images={project.images} />
    </section>
  )
}

export default WorkSlider;