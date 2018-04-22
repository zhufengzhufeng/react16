import React, { Component } from 'react';
import { render } from 'react-dom';
// 受控组件 状态不变化视图就不变化
// 表单元素 想区分是谁 一般会增加一个name属性
class Control extends Component {
    constructor() {
        super();
        this.state = { username: '123', password: '' }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    handleChange = (e) => {
        let key = e.target.name;
        // key是当前输入框的name属性，指的是当前是哪个状态需要改变
        this.setState({
            [key]: e.target.value.toUpperCase()
        });
    }
    render() {
        let { username, password } = this.state;
        return (<form onSubmit={this.handleSubmit}>
            <input type="text" value={username} onChange={this.handleChange} name="username" />
            <input type="text" value={password} onChange={this.handleChange} name="password" />
            {/* textarea 也是通过value控制的 */}
            {/* <textarea value={username} name="username" onChange={this.handleChange}></textarea> */}
            <input type="submit"/>
        </form>)
    }
}
render(<Control />, window.root);