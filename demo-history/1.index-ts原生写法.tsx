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