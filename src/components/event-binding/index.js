import React, { Component } from 'react'

export default class eventBind extends Component {
  render() {
    return (
      <div>
        <div>事件绑定</div>
        <input></input>
        {/* 第一种写法直接在{}里写函数声明,  对于复杂逻辑不友好*/}
        <button onClick={() => {
            console.log('dd')
        }}>add1</button>
        {/* 第二种写法：在{}里写函数名,切记一定不能加括号，因为不是由我们自己手动调用，而是在我们点击按钮时react内部的事件系统自动帮我们调用的*/
        <button onClick={this.add2}>add2</button>

        /*此种方式的声明由弊端：当遇到函数内用到this时将会有问题,因为此时的this为undefined，原因是函数内的this并不是指向当前eventBind类的实例对象，因为是react中事件代理对象调用的此函数

        react并不会真正的绑定事件到某个具体的元素身上，而是采用事件代理的方式，将事件绑定在根节点root身上
        同样会有事件对象，不过这是react内部自己构建的，其属性和方法与原生浏览器的事件对象基本一致
        */}
        {/* 若是想将函数内的this指向实例对象，可以这样做 */}

        <button onClick={this.add2.bind(this)}>add2</button>

        {/* 第三种写法 --推荐*/}
        <button onClick={() => {
            this.add4()
        }}>add4</button>
        {/* 简写后 */}
        <button onClick={(event) => this.add4(event)}>add4</button>



      </div>
    )
  }
// 此种方式的函数是声明在原型对象上，当实例化对象后，调用此方法是通过原型链继承找到此方法的
  add2(event) {
    console.log("add2");
    console.log(this);
    console.log(event);
  }
// 此种方式的函数是声明在实例对象上，即是实例对象本身就拥有此方法，调用时直接调用，写在constructor中的属性或方法也是直接实例对象拥有的
  add3 = () => {
    console.log("add3");
  }
  add4(event) {
    console.log("add4");
    console.log(event);
  }
}
