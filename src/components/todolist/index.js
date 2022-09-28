import React, { Component } from 'react'

export default class TodoList extends Component {

  state = {
    list: [11,22]
  }

  value = React.createRef()
  render() {
    return (
      <div>
        <div>TodoList案例</div>
        <input ref={this.value}></input>
        <button onClick={() => this.add()}>添加</button>
        <ul>
            {
              this.state.list.map((item, index) => <li key={index}>
                {/* 通过{}这种方式，react会让{}里面的内容原样展示在页面中，里面默认应该是用textContent或者是innerText进行添加，若是想要让其能识别出标签等，必须借助dangerouslySetInnerHTML, 它里面是个对象 
                vue中的{{}}语法也是一样，原样展示，若是想要解析标签什么的，需使用v-html指令
                */}
                {/* {item} */}

                <span dangerouslySetInnerHTML={
                  {
                    __html: item
                  }
                }></span>
                {/* 函数传参方法1 */}
                {/* <button onClick={this.remove.bind(this,index)}>删除</button> */}
                {/* 函数传参方法2 */}
                <button onClick={() => this.remove(index)}>删除</button>
                </li>)
            }
        </ul>
        {/* 条件渲染 */}
        {/* {this.state.list.length === 0 ? <div>暂无待办</div> : null} */}
        {/* {this.state.list.length === 0 && <div>暂无待办</div>} */}
        
      </div>
    )
  }

  add() {
    const value = this.value.current.value;
    // 复制数组，因为不要直接修改state中的数据
    const newList = [...this.state.list]
    newList.push(value)
    this.setState({
      list: newList
    })

    this.value.current.value = ""
  }
  remove(index) {
    const newList = this.state.list.slice();
    newList.splice(index,1)
    console.log("index",index);
    this.setState({
      list: newList
    })
  }
}
