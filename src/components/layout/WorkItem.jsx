import React from 'react';
import {Link} from 'react-router-dom';

const WorkItem = ({project, unloadContent}) => {
  let imageStyle = {
    backgroundImage: `url(${project.imageUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <section className="work_item">
      <section className="work_item_image" style={imageStyle} ></section>
      <Link to='/work/testing-data' onClick={() => {unloadContent()}}>
        <h2>Go 1</h2>
      </Link>
    </section>
  )
}

export default WorkItem;