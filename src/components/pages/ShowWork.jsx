import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import {Page} from '../../utils/styledClasses';
import {slideInTop, slideOutBottom} from '../../utils/styledTransitions';

export const slideInTop2 = keyframes`
  from {
    transform: translate3d(0, ${window.innerHeight}px, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const ShowWorkPageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInTop} 0.5s linear forwards;
  }
  &.page-exit {
    animation: ${slideOutBottom} 0.5s linear forwards;
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
