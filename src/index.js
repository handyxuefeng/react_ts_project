"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
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
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var props = { className: "title" };
//开始定义类
var HelloClassComponent = /** @class */ (function (_super) {
    __extends(HelloClassComponent, _super);
    function HelloClassComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { id: "react-typescript" };
        return _this;
    }
    HelloClassComponent.prototype.render = function () {
        return react_1["default"].createElement('h1', props, this.state.id);
    };
    return HelloClassComponent;
}(react_1["default"].Component));
var element = (react_1["default"].createElement(HelloClassComponent, props));
react_dom_1["default"].render(element, document.getElementById("root"));
var a1;
(function (a1) {
    var b = /** @class */ (function () {
        function b() {
        }
        return b;
    }());
})(a1 || (a1 = {}));
var a2;
(function (a2) {
    var b = /** @class */ (function () {
        function b() {
        }
        return b;
    }());
})(a2 || (a2 = {}));
