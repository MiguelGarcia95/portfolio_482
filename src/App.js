import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './components/pages/Home';
import About from './components/pages/About';
import styled, { keyframes } from "styled-components";

const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #e3f2fd;
  font-family: "Open Sans", sans-serif;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Route 
        render={({location}) => {
          return (
            <PageContainer>
              <TransitionGroup component={null}>
                <CSSTransition
                  timeout={300}
                  classNames='page'
                  key={location.key}
                >
                <Switch location={location} >
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                </Switch>
                </CSSTransition>
              </TransitionGroup>
            </PageContainer>
          )
        }}
      />
    </BrowserRouter>
  );
}

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path='/' component={Home} />
//         <Route exact path='/about' component={About} />
//       </Switch>
//     </BrowserRouter>
//   );
// }

export default App;
