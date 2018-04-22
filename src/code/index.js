import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// 1.children可以将组件中的内容引用过来
export default class Index extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">珠峰管理系统</a>
            </div>
            <div className="navbar-nav nav">
              <li><Link to="/home">首页</Link></li>
              <li><Link to="/profile">个人中心</Link></li>
              <li><Link to="/user">用户</Link></li>
            </div>
          </div>
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
