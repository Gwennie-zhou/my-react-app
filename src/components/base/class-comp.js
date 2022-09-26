import React from "react";


// 组件类，必须要继承React.Component
class App extends React.Component{
    render() {
        // jsx表达式必须只有一个，即每个组件只有一个根元素
        return (
            <div>类组件</div>
        )
    }
}

export default App