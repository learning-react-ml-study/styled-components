import React, { Component } from 'react';
// import './App.css';
import styled, {injectGlobal, keyframes, css} from "styled-components";
import ThemeApp from './Theme';

injectGlobal`
  body{
    padding:0;
    margin:0;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Button>success</Button>
        <Button danger rotationTime={1}>danger</Button>
        <Anchor href="http://google.com">google</Anchor>
        <br/>
        <Input placeholder="hello" />
        <ThemeApp/>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Input = styled.input.attrs({
  required: true
})`
  border: none;
  ${awesomeCard};
`;

// const Button = ({danger})=>(
//   <button className={danger?"button button--danger":"button button--success"}>button</button>)
const Button = styled.button` 
border-radius: 50px;
padding: 5px;
min-width:128px;
color:white;
font-weight:600;
-webkit-apperance:none;
cursor:pointer;
&:active,
&:focus{
  outline:none
}
background-color: ${props => (props.danger ? "#e44335" : "#17b491")};
${props => {
  if (props.danger) {
    return `animation: ${rotation} ${props.rotationTime}s linear infinite`;
  }
}};
`;

const Anchor = Button.withComponent("a").extend`
text-decoration:none;
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
