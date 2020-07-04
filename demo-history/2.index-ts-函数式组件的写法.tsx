import React, {
  DetailedReactHTMLElement,
  FunctionComponentElement,
} from "react";
import ReactDOM from "react-dom";

interface Props {
  className: string;
}

const props: Props = { className: "title" };

/**
 * 开始定义函数式组件
 */
function HelloComponent(props: Props) {
  return React.createElement<Props, HTMLHeadingElement>(
    "h1",
    props,
    "hello-函数式组件"
  );
}

const element: FunctionComponentElement<Props> = React.createElement<Props>(
  HelloComponent,
  props,
  "hello-函数式组件"
);

ReactDOM.render(element, document.getElementById("root"));
