import React, { Component } from 'react';
import { render } from 'react-dom'
class Counter extends Component {
    constructor() {
        super();
        console.log('father constructor')
        this.state = { count: 0 }
    }
    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }
    componentWillMount() {
        console.log('father componentWillMount')
    }
    // 默认shouldComponentUpdate返回的值是true,视图是否更新
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState);
        console.log('father shouldComponentUpdate');
        return true
    }
    componentWillUpdate() {
        console.log('father componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('father componentDidUpdate');
    }
    render() {
        console.log('father render')
        return (<div>
            计数器 {this.state.count}
            <button onClick={this.handleClick}>+</button>
            {this.state.count == 10 ? null : <SubCounter count={this.state.count}></SubCounter>}
        </div >
        );
    }
    componentDidMount() {
        console.log('father componentDidMount');
    }
}
// 父亲想渲染完成 必须等待子组件渲染完成
// 组件constructor willMount didMount 只会执行一次 render会执行多次
// 父组件渲染子组件也会重新渲染(虽然儿子没有变化  优化点)
class SubCounter extends Component {
    componentWillUnmount() {
        // 可以移除事件监听 ，和事件绑定 定时器
        console.log('child componentWillUnmount');
    }
    componentWillMount() {
        console.log('child componentWillMount');
    }
    // shouldComponentUpdate(){
    //     return true
    // }
    componentWillReceiveProps(nextProps) { // 不需要写返回值
        // 不能阻止是否重新渲染， 他是一个为一可以调用setState
        // 这个方法被废弃了
        // 这里可能会被乱用，而且页面第一次加载时不会执行
        console.log('child componentWillReceiveProps')
    }
    render() {
        console.log('child render')
        return (<div>{this.props.count}</div>)
    }
    componentDidMount() {
        console.log('child componentDidMount');
    }
}
render(<Counter />, window.root)