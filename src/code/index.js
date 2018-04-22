import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// 1.children可以将组件中的内容引用过来
export default class Index extends Component {
    constructor() {
        super();
    }
    render() {
        return (<div>
            <Link to="/home">首页</Link>
            <Link to="/profile">个人中心</Link>
            <Link to="/user">用户</Link>
            {this.props.children}
     </div>)
    }
}
