import React, { Component } from 'react';
import { render } from 'react-dom'
class Counter extends Component {
    constructor() {
        super();
        this.state = { count: 0 }
    }
    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }
    // willMount 被 constructor和didMount所取代了
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState);
        console.log('father shouldComponentUpdate');
        return true
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

//willMount
//willUpdate
//willReceiveProps
//componentDidCatch
class SubCounter extends Component {
    constructor(){
        super();
        this.state = {b:1}
    }
    componentWillUnmount() {
        // 可以移除事件监听 ，和事件绑定 定时器
        console.log('child componentWillUnmount');
    }
    // 返回一个对象这个对象就是新的状态
    static getDerivedStateFromProps(){
        // 因为静态方法中this指向的不是实例，不能再调用setState，不需要再调用了
        return {a:1}; // 不改状态
    }
    render() {
        console.log('child render',this.state)
        return (<div>{this.props.count}</div>)
    }
    getSnapshotBeforeUpdate(){
        // 官方：这个方法一般不会用到
        console.log('getSnapshotBeforeUpdate');
        return {a:1} // 返回值会作为componentDidUpdate的第三个参数
    }
    componentDidUpdate(nextProps,nextState,c){
        console.log(c)
    }
    componentDidMount() {
        console.log('child componentDidMount');
    }
}
render(<Counter />, window.root);