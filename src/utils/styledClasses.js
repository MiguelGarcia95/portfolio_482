import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  color: white;
  overflow: hidden;
  
  &.home {
    background-color: mediumslateblue;
  }

  &.work {
    background-color: burlywood;
  }

  h1 {
    font-weight: 300;
    color: white;
  }

  h2 {
    font-weight: 400;
  }
  p {
    font-size: 1rem;
    max-width: 400px;
    margin: 20px auto;
    color: #37474f;
  }
  a {
    color: white;
    text-decoration: none; 
    margin-top: 50px;
  }
`;