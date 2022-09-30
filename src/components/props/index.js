import React, { Component } from 'react'
import Child from "./child"

// 函数式组件可以直接在第一个参数里接收到父组件传过来的参数，函数式组件的this是undefined的
function Test(props) {
    const {bg} = props
    return (
        <div style={{'background': bg}}>测试</div>
    )
}
// 函数式组件的验证和默认值，只能通过以下方式了
// Test.propTypes = {}
// Test.defaultProps = {}

export default class App extends Component {
  render() {
    const obj = {
        name: "我的",
        age: 18
    }
    return (
      <div>
        <div>props属性学习</div>
        <div>跟vue类似，父组件在组件上定义属性，子组件通过this.props可以接受到所有的属性值</div>
        {/* vue中如果想要在template里插如js表达式，则会分为两种情况，一个是属性绑定，通过冒号:方式绑定变量，一个是标签里的内容，通过{{}}绑定变量，但是在react中，想要在html中插入js，统一都是用{} */}

        <Child name="首页" age={18}></Child>

        {/* 当对象的属性名跟父组件要传给子组件的属性名一致时，可以简写 */}
        {/* <Child name={obj.name} age={obj.age} ></Child> */}
        <Child {...obj}></Child>

        {/* 函数式组件传参 */}
        <Test bg="yellow"></Test>
      </div>
    )
  }
}
