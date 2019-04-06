import React from 'react';
import Slider from "react-slick";
import ProjectSliderSlide from './ProjectSliderSlide';

const displaySlides = slides => {
  return slides.map((slide, index) => {
    return <ProjectSliderSlide key={index} />
  })
}

const ProjectSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className='project_slider'>
      <Slider {...settings} className='project_slider_slider'>
        {/* {displaySlides()} */}
        <ProjectSliderSlide />
        <ProjectSliderSlide />
        <ProjectSliderSlide />
      </Slider>
    </section>
  );
}

export default ProjectSlider;