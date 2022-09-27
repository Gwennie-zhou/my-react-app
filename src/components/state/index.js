import React, { Component } from 'react'

export default class State extends Component {

//   state = {
//     isShow: true
//   }

  constructor() {
    super()
    this.state = {
        isShow: true,
        list: ["aa","bb", "cc"]
    }
  }

  render() {
    return (
      <div>
        <div>状态学习</div>
        <div>首先定义一个state关键字（实例对象中），对象里面保存着我们的状态，可以通过this.state.xxx获得，修改时不能直接修改，必须借助setState(),把要修改的数据写在对象里，react会去判断哪些值发生了修改，然后帮我们去修改页面</div>
        <button onClick={() => {
            // 修改状态必须用setState()
            this.setState({
                isShow: !this.state.isShow
            })
        }}>{this.state.isShow ? "收藏" : "取消收藏"}</button>

        <hr></hr>
        <div>vue中想要实现循环遍历dom节点，可以使用v-for指令，那react中如何实现循环遍历？</div>
        <div>react的设计思想是： 如无必要，不增实体，因此可以使用js原生数组的遍历方法map</div>
        <ul>
            {
                this.state.list.map((item,index) => <li key={index}>{item}</li>)
            }
        </ul>
      </div>
    )
  }
}
