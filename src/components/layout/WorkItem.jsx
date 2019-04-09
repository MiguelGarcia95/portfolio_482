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
      <section className="work_item_details">
        <h2 className="work_item_name noselect">{project.name}</h2>
        <Link className='noselect' to={`/work/${project.name}`} onClick={() => {unloadContent('.work_content')}}>
          <h3>Check Out</h3>
        </Link>
      </section>
    </section>
  )
}

export default WorkItem;