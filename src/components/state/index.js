import React, { Component } from 'react'

export default class State extends Component {

  state = {
    isShow: true,
    list: ["aa","bb", "cc"],
    count: 1
  }

  // constructor() {
  //   super()
  //   this.state = {
  //       isShow: true,
  //       list: ["aa","bb", "cc"]
  //   }
  // }

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

        <hr></hr>

        <div>Vue中，当在一个方法中修改状态时（如：连续修改一个值时），状态是同步更新的，但是页面中对应的dom确是异步更新的</div>
        <div>但是在react中，当用setState()修改数据时，却要视情况而定</div>
        <div>如果setState处在同步的逻辑中，将异步更新状态，异步更新真实Dom</div>
        <div>如果setState处在异步的逻辑中，将同步更新状态，同步更新真实Dom</div>

        <div>例如：</div>
        <div>{this.state.count}</div>
        <button onClick={() => {this.add1()}}>add1</button>
        <button onClick={() => {this.add2()}}>add2</button>

        <div>vue中怎么知道dom什么时候更新完，或者说我们得在更新完的dom中进行操作时，可以采用nextTick()</div>
        <div>那react中，在同步逻辑里，我们该怎么知道dom更新完呢？</div>
        <div>setState接受第二个参数，第二个参数是函数，当状态和dom更新完后会被触发</div>
        <button onClick={() => {this.add3()}}>add3</button>
      </div>
    )
  }
// 同步逻辑异步更新
  add1() {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count);

    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count);
  }

  // 异步逻辑同步更新
  add2() {
    setTimeout(()=>{
      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count);
  
      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count);
    }, 0)
  }
 // setState的第二个参数可以让我们操作更新完的dom
  add3() {
    this.setState({
      count: this.state.count + 1
    }, ()=> {
      console.log("更新后", this.state.count);
    })
  }
}
