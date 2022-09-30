import React, { Component } from 'react'
import types from "prop-types"
export default class Child extends Component {
//   react中的属性验证：通过引入prop-types库，借助里面封装好的一些方法，就可以实现了，注意属性验证必须写在类属性（即静态属性）上
  static propTypes = {
    name: types.string,
    age: types.number
  }
// react中的默认属性设置：通过defaultProps(写在类属性上)
  static defaultProps = {
    age: 20
  }

  render() {
    return (
      <div>
        <div>child</div>
        <div>name: {this.props.name}</div>
        <div>age: {this.props.age}</div>
      </div>
    )
  }
}
// Child.propTypes = {
//     name: types.string,
//     age: types.number
// }