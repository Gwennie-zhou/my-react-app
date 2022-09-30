import React from "react"; 
import ReactDom from "react-dom";
// import ClassComp from "./components/base/class-comp"
// import FunctionComp from "./components/base/function-comp"
// import App from "./components/app"
// import EventBind from "../src/components/event-binding/index"
// import Ref from "./components/ref/index"
// import State from "./components/state/index"
// import TodoList from "./components/todolist/index"
import Props from "./components/props/index"

// ReactDom.render("11", document.querySelector("#root"))
// ReactDom.render(<h1>哈哈</h1>, document.querySelector("#root"))

/**以上代码等同于下面的代码
 * ReactDom.render(React.createElement('div', {
 *     id: "container",
 *     className: "wrap" //不能用class来表示属性类名，因为在js中，class会被识别为关键字，表类
 * }, '哈哈'), document.querySelector("#root"))
 * 
 */

// 自定义组件名首字母必须大写，因为如果是小写的，会被认为是html自带的标签名
//  ReactDom.render(<ClassComp></ClassComp>, document.querySelector("#root"))
// ReactDom.render(<FunctionComp></FunctionComp>, document.querySelector('#root'))
// ReactDom.render(<App></App>, document.querySelector('#root'))
// ReactDom.render(<EventBind></EventBind>, document.querySelector('#root'))
// ReactDom.render(<Ref></Ref>, document.querySelector('#root'))
// ReactDom.render(<State></State>, document.querySelector('#root'))
// ReactDom.render(<TodoList></TodoList>, document.querySelector('#root'))
ReactDom.render(<Props></Props>, document.querySelector('#root'))

/**
 * 以上即为jsx文件  jsx = js + xml 
 * JSX将HTML语法直接加入JavaScript代码中，再通过翻译器（Babel的jsx编译器）转换为纯js后由浏览器执行
 * 
*/ 


/**xml文件格式如下：
<?xml version="1.0" encoding="ISO-8859-1"?>
- <note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>
 */