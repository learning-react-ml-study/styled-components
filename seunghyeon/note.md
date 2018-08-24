# 1 셋업 : button challenge
-> create button with hover, active state, background color

- className은 별로다. (global하니까, 모듈을 사용할 때 등등)

# 2 Hello World with Styled Components
- react는 css가 내부에 있는 컴포넌트를 줄 것이다

const [컴포넌트명] = styeld.[스타일을 주려는 HTML 요소]`CSS`

예시
```javascript
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
  background-color: ${props => props.danger ? "#c0392b" : "#2ecc71"}
`
// css 안에서 바로 props 값을 바로 체크할 수 있음

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color:pink;
`
```

# 3 injectCobal and Extend

-파일 상단에

```javascript
injectGlobal`
  body{
    padding: 0;
    margin: 0; 
  } 
`;
```

- Extension: 내 컴포넌트를 재활용하는 방법

```javascript
const Anchor = Button.withComponent("a").extend`text-decoration: none;`;
// [기존에 작성한 컴포넌트].withComponent("[html element]").extend`덧붙이고 싶은 css`;

class App extends Component {
  render() {
    return (
        <Anchor href="https://www.google.com">Go to Google</Anchor>
        // 다른 설정 없이 알아서 기본 attribute를 잡아줌
    );
  }
}

```
    
# 4 Animations
1. css 안에서 props를 체크할 수도 있고 (#2 참고)
2. props 값에 따라 css를 적용해줄 수도 있음 ↓
```javascript
// keyframe 생성
const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

//css에 적용
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
      return `animation: ${rotation} ${props.rotationTime}}s linear infinite`
    }
  }}
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
```

-> css를 함수, 컴포넌트화 시킬 수 있고 props를 가질 수 있으며 props로 스타일 변경 가능 (즉 컴포넌트에서 바로 값을 변경할 수도 있음)

# 5 Extra Attributes and Mixins
- custom attribute
    ```javascript
    const Input = styled.input.attrs({
    /*주고 싶은 attr들을 object로 전달*/
    required: true
    })`
    border-radius: 5px;
    `;  

    ```


- Mixin 
    - 그룹화한 CSS -> 재사용 가능한 방법
        1. 다른 컴포넌트 쓰고 -> 확장 (#3 extension 참고)
        2. Mixin : header, footer, card 콤비네이션, 폰트 콤비네이션 등 여러가지 상황에 유용!
            1. import {css} from 'styled-components'
            2. 
            ```javascript
            /*--- mixin */
            const awesomeCard = css`
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0,0,0,0.08)l
            background-color: white;
            border-radius: 10px;
            padding: 20px;
            `;
            ```
            3. 주고 싶은 엘리먼트에 입력
            ```javascript
            const Input = styled.input.attrs({
            required: true
            })`
            border-radius: 5px;
            ${awesomeCard}; 
            `;
            /* ${} 형태로 삽입*/
            ```
        TIP) file로 share하여 css 통일해줄 수도 있음

# 6 Theming
1. 독립된 파일 생성 (ex. theme.js)
    ```javascript
    const theme = {
    mainColor: "#9b59b6",
    dangerColor: "#c0392b",
    successColor: "#2ecc71"
    }

    export default theme;
    ```

2.  import {ThemeProvider} from "styled-components";
    import theme from './theme.js'; // theme 파일

3. 
theme을 props로 가져옴
```javascript
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Form />
        </Container>
      </ThemeProvider>
    );
  }
}

const Form = () => (
<Card>
  <Button>Hello</Button>
  </Card>
);
```
```javascript
const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor}
`;
// background-color가 theme 내 색상으로 바로 설정됨!
```
-> props로 받아오는 theme만 바꿔주면 바로 전체에 적용됨



