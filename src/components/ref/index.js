import React, { Component } from 'react'

export default class Ref extends Component {

  myValue = React.createRef()

  render() {
    return (
      <div>
        <div>Ref学习: 如何获取input标签里的值？</div>
        {/* 方法1（已被弃用）: 通过字符串的方式直接给标签添加引用，然后this.refs.引用名就可以获得其DOM节点，不被推荐的原因是：如果有多个相同的引用名，那前面的引用名将会被最后一个给替代 */}
        <input ref="myText"></input>
        <button onClick={() => {
            console.log(this.refs.myText.value);
        }}>方式1</button>

        <hr></hr>

        {/* 方法2（推荐）： 通过React.createRef()创建一个对象，然后将此对象绑定到元素中,通过this.引用名.current就可以获得其Dom节点 */}
        <input ref={this.myValue}></input>
        <button onClick={() => {
            console.log(this.myValue.current.value);
        }}>方式2</button>

      </div>
    )
  }
}
