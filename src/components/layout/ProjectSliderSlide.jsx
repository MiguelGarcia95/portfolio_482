import React from 'react';

const ProjectSliderSlide = ({image}) => {
  let imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <section className='project_image_slide' style={imageStyle}>
    </section>
  );
}

export default ProjectSliderSlide;