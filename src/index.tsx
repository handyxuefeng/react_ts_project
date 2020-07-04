/*
1.typeScrip原生式写法
import React, { DetailedReactHTMLElement } from 'react';
import ReactDOM from 'react-dom';

interface Props {
    className: string
}

const props: Props = {className:"title"};

const element: DetailedReactHTMLElement<
  Props,
  HTMLHeadingElement
> = (
    React.createElement<Props, HTMLHeadingElement>("h1", props,'hello typescript_react')
);
ReactDOM.render(element,document.getElementById('root'));
*/

/*
import React, { DetailedReactHTMLElement,FunctionComponentElement } from "react";
import ReactDOM from "react-dom";

interface Props {
  className: string;
}

const props: Props = { className: "title" };

//开始定义函数式组件
function HelloComponent(props: Props) {
    return React.createElement<Props, HTMLHeadingElement>("h1", props,'hello-函数式组件');
}

const element: FunctionComponentElement<Props> = (
    React.createElement<Props>(HelloComponent,props,'hello-函数式组件')
);

ReactDOM.render(element, document.getElementById("root"));

*/

import React, { DetailedReactHTMLElement, ReactElement } from "react";
import ReactDOM, { render } from "react-dom";

interface Props {
  className: string;
}
interface State {
    id:string
}

const props: Props = { className: "title" };

//开始定义类
class HelloClassComponent extends React.Component<Props,State>{
   state = {id:"react-typescript"}
   render(){
     return React.createElement('h1',props,this.state.id)
   }
}

const element: ReactElement<Props> = (
    React.createElement<Props>(HelloClassComponent,props)
);

ReactDOM.render(element, document.getElementById("root"));





