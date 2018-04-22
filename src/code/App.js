// 路由的使用 路由分类
// hash # 上线时不会使用这种方式
// history 浏览器的api 没有#  create-react-app集成了webpack
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// /home  Home  /profile Profile  /user User
// let Home = () => <h1>首页</h1>;
// let Profile = () => <h1>个人中心</h1>;
// let User = () => <h1>用户</h1>;
// 1.在根组件中要有一个路由容器 配置的路由要放到内部
// 2.Router组件只能包含一个节点
// 3.路由匹配是从上到下匹配的，匹配到就渲染
// 4.exact 可以实现精确匹配
// 5.Switch组件表示匹配到一个后停止匹配
// 6.Redirect 可以实现路径的重定向
import Home from './Home';
import Profile from './Profile';
import User from './User';
import Index from './index'
class App extends Component {
    render() {
        return <Router>
            <Index>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/home" exact={true} component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/user" component={User} />
                    <Redirect to="/" />
                </Switch>
            </Index>
        </Router>
    }
}
render(<App />, window.root);