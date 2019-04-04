import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import {Page} from '../../utils/styledClasses';
import {slideInRight, slideOutRight} from '../../utils/styledTransitions';

const slideOutLeft2 = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

export const slideInTop = keyframes`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const ShowWorkPageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInTop} 0.5s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.5s ease forwards;
  }
`;

class ShowWork extends React.Component {
  render() {
    const {workName} = this.props.match.params;
    console.log(workName);
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
