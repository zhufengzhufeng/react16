import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// 他优化了shouldComponentUpadate 如果是同一个对象 不进行重渲染
// 只比较是否是同一个空间，是同一个空间不会更新，所以为了优化考虑更新时一定采用用一个新对象覆盖掉老对象
// PureComponent + immutablejs
class Todo extends React.PureComponent {
    constructor() {
        super();
        this.state = { todos: [] };
    }
    render() {
        return <div>
            {/* 不要直接修改对象 */}
            <input type="text" onKeyDown={(e) => {
                // react不推荐直接更改状态对象
                //this.state.todos.push(e.target.value);
                this.setState({ todos: [...this.state.todos, e.target.value]});
        }} />
            {this.state.todos.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
            <Sub></Sub>
        </div>
    }
}
class Sub extends React.PureComponent{
    render(){
        console.log('render')
        return (
            <div>hello</div>
        )
    }
}
ReactDOM.render(<Todo/>,window.root)