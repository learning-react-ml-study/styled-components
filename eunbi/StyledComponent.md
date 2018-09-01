# Styled Component

Styled Component는 component를 만들 때 스타일을 선언하는 방식이다

```
const SC01 = styled.div`
	/* css */
	`;

const SC02 = styled(ReactComponenet)`
	/* css */
	`;
	
render(){
    return(
    <SC01/>
    <SC02/>
    )
}
```

 styled component를 render method 밖에 선언하여야 한다

왜냐하면 method 안에 선언 할 시 매 rendering 과정 마다 새로 만들어지기 때문이다

>  styled('div')도 가능



## Passed props

넘겨받은 props로 styled component 템플릿 리터럴에 적용 할 수있다

```
const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
```



## injectGlobal

global하게 적요해야 할 스타일이 있을 시 `injectGlobal`을 사용 한다

```
injectGlobal`
  body {
    margin: 0;
    background-color: #F7F7F7;
  }
`;
```



## Extending Styles 

####  extend · withComponent() · styled() 

```
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const ShadowedButton = Button.extend`
  box-shadow: 0px 5px 15px rgba(0, 0, 0, .3);
`; 

const Link = Button.withComponent('a')

render(
  <div>
    <Button>Normal Button</Button>
    <Link>Normal Link</Link>
  </div>
);
```

<dl>
<dt>extend</dt>
<dd>원래 존재하는 스타일 컴포넌트를 상속할 때 사용</dd>
<dt>withComponenet()</dt>
<dd> 원래 존재하는 스타일컴포넌트를 상속하면서 다른 컴포넌트나 태그로 변경하고 싶을때 사용</dd>
</dl>



## Attaching additional props 

#### .attrs

styled component에 props를 붙일 수있는 방법이다

```
const Input = styled.input.attrs({
  type: 'password',

  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

render(
  <div>
    <Input placeholder="A small text input" size="1em" />
    <br />
    <Input placeholder="A bigger text input" size="2em" />
  </div>
);
```



## Animations

```
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

render(
  <Rotate>&lt; 💅 ">">&gt;</Rotate>
);
```

