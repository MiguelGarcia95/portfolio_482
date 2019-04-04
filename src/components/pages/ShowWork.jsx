import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import {Page} from '../../utils/styledClasses';
import {slideInRight, slideOutRight} from '../../utils/styledTransitions';

const ShowWorkPageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInRight} 0.5s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.5s ease forwards;
  }
`;

class ShowWork extends React.Component {
  render() {
    return (
      <ShowWorkPageElm className='app show_work'>
        <h1>ShowWork</h1>
        <Link to='/work'>
          <h2>Go To work</h2>
        </Link>
      </ShowWorkPageElm>
    )
  }
}

export default ShowWork;
