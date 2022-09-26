import React, { Component } from 'react';
import "./app.css"

class Navbar extends Component{
    render() {
        let name = 'Navbar'
        const obj = {
            color: "red",
            /**js对象属性规则
             * 对象属性名必须满足标识符的格式，即只能是由字母、数字、_、$这四种组成，如果要添加其他符号，如_、@等其他，则属性名必须用""包起来
             */
            // "background-color": "green"
            // 在react这里，可以通过驼峰命名的方式代替短横线，因为react内部会帮我们解析，遇到驼峰最终也会转换为字符串短横线的方式出现
            backgroundColor: "yellow"
        }
        return (
            // 若是想在这里表达js逻辑，则需用{} 包围起来，否则只会被当作普通的文本,相当于vue中的{{}}语法
            <div>
                {/* 原生行内样式写法： style="color: red; background-color: green"
                react中如果想要用行内样式，必须写成对象形式
                <div style={{color: 'red'}}>name: {name}</div> */}
                <div style={obj}>name: {name}</div>
                {/* 不能用class来表示属性类名，因为在js中，class会被识别为关键字，表类 */}
                <div className="active">测试class</div>
                {/* 同样，在js中使用for会被认为是循环的关键字，必须改用htmlFor表示标签属性 */}
                <label htmlFor="username">用户名</label>
                <input id='username' />
            </div>
        )
    }
}
function Swiper() {
    return <div>Swiper</div>
}

class Tabbar extends Component{
    render() {
        return <div>Tabbar</div>
    }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <div>根组件</div>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}
