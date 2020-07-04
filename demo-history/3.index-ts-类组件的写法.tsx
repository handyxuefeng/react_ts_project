import React, {
  DetailedReactHTMLElement,
  FunctionComponentElement,
  ReactElement,
} from "react";
import ReactDOM, { render } from "react-dom";

interface Props {
  className: string;
}
interface State {
  id: string;
}

const props: Props = { className: "title" };

//开始定义类
class HelloClassComponent extends React.Component<Props, State> {
  state = { id: "react-typescript" };
  render() {
    return React.createElement("h1", props, this.state.id);
  }
}

const element: ReactElement<Props> = React.createElement<Props>(
  HelloClassComponent,
  props
);

ReactDOM.render(element, document.getElementById("root"));
