import React from 'react';
import Slider from "react-slick";

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
      <h2> Single Item</h2>
      {/* <Slider {...settings}>
        <div style={{background: 'red',}}>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider> */}
    </section>
  );
}

export default ProjectSlider;