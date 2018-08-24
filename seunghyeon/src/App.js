import React, { Component } from 'react';
import styled, {injectGlobal, keyframes} from "styled-components";

injectGlobal`
  body{
    padding: 0;
    margin: 0; 
  } 
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Button default>Hello</Button>
        <Button danger rotationTime={5}>Danger!</Button>
        <Anchor href="https://www.google.com">Go to Google</Anchor>
      </Container>
    );
  }
}

// --- 1. 기존의 방식
// const Button = ({danger}) => (
//   <button 
//   className={danger ? "button button--danger" : "button button--success"}>Hello</button>
// );

// --- 2. styled components
const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => props.danger ? "#c0392b" : "#2ecc71"};
  ${props => {
    if(props.danger){
      return `animation: ${rotation} ${props.rotationTime}s linear infinite`
    }
  }}
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color:pink;
`

// --- extension
const Anchor = Button.withComponent("a").extend`
  text-decoration: none;
`;

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export default App;
