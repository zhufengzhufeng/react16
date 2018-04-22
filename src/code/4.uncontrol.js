import React, { Component } from 'react';
import { render } from 'react-dom';
// 当页面一加载就获取焦点
// ref有两种写法
// 非受控的好处 可以直接获取dom元素 和第三方库配合 而且不用配状态
// 16.3新增的 
class Control extends Component {
    constructor(){
        super();
        // 如果将this.text 绑定到表单元素上 可以通过this.text.current获取这个dom
        this.text = React.createRef();
    }
    componentDidMount() {
        this.text.current.focus();     
    }
    render() {
        return (
            <input type="text" ref={this.text} />
        )
    }
}
// class Control extends Component {
//     componentDidMount(){
//         //this.text.focus();
//     }
//     render() {
//         return (
//              <input type="text" ref={input=>this.text=input} />
//         )
//     }
// }
render(<Control />, window.root);