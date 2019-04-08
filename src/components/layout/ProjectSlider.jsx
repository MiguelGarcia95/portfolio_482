import React from 'react';
import Slider from "react-slick";
import ProjectSliderSlide from './ProjectSliderSlide';

const displaySlides = slides => {
  return slides.map((image, index) => {
    return <ProjectSliderSlide key={index} image={image} />
  })
}

const ProjectSlider = ({images}) => {
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
        {displaySlides(images)}
        {/* <ProjectSliderSlide color='grey' />
        <ProjectSliderSlide color='skyblue' />
        <ProjectSliderSlide color='blue' /> */}
      </Slider>
    </section>
  );
}

export default ProjectSlider;