import React, { Component } from 'react';
import {Link,Switch,Redirect,Route} from 'react-router-dom';
import Add from "./Add";
import List from "./List";
import Detail from "./Detail";
export default class User extends Component {
    constructor() {
        super();
    }
    render() {
        return (<div className="row">
            <div className="col-md-3">
                <nav className="nav nav-stacked">
                    <li><Link to="/user/add">添加用户</Link></li>
                    <li><Link to="/user/list">添加列表</Link></li>
                </nav>
            </div>
            <div className="col-md-9">
                <Switch>
                    <Route path="/user/" exact={true} component={Add} />
                    <Route path="/user/add" component={Add} />
                    <Route path="/user/list" component={List}/>
                    <Route path="/user/detail/:id" component={Detail}/>
                    <Redirect to="/user/"/>
                </Switch>
            </div>
     </div>)
    }
}
