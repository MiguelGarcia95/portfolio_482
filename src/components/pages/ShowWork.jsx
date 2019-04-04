import React from 'react';
import {Link} from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import {Page} from '../../utils/styledClasses';
import {slideInTop, slideOutBottom} from '../../utils/styledTransitions';

export const fadeIn = keyframes`
  from {
    opacity: 0;
    visibility: visible;
  }

  to {
    opacity: 1;
    visibility: visible;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }

  to {
    opacity: 0;
    visibility: visible;
  }
`;

const ShowWorkPageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInTop} 0.5s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutBottom} 0.5s ease forwards;
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
