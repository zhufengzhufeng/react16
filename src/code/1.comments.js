import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'; // 基于promise的，不支持jsonp
// 如果是同步获取数据 render -> componentDidMount -> render
class List extends Component {
    render() {
        let { avatar, title, content ,change} = this.props
        return (
            <div className="media">
                {/* 不能获取父组件的key */}
                <div className="media-left">
                    <img src={avatar} alt="" style={{ width: '64px' }} />
                </div>
                <div className="media-body">
                    <div className="media-heading h2">
                        {title}
                    </div>
                    <p>{content}
                        <button className="btn btn-danger" onClick={change}>喜欢</button>
                    </p>
                </div>
            </div>
        )
    }
}
class Total extends Component {
    render() {
        return <div className="h3">喜欢总数 {this.props.favorate}</div>
    }
}
// 绑定this的方式 es7 =()=> bind 箭头函数
class Comments extends Component {
    constructor() {
        super();
        // 同步设置状态 可以放到constructor中
        this.state = { comments: [], favorate: 0 };
        //this.handleChange = this.handleChange.bind(this);

    }
    async componentDidMount() {
        let { data: comments } = await axios.get('/user.json');
        this.setState({ comments });
    }
    handleChange = () => {
        this.setState({ favorate: this.state.favorate + 1 });
    }
    render() {
        return (
            <div className="container">
                {this.state.comments.map((item, index) => (
                    <List key={index} {...item} change={this.handleChange}></List>
                ))}
                {/* 平级组件的交互 */}
                <Total favorate={this.state.favorate}></Total>
            </div>
        )
    }
}

render(<Comments />, window.root);


