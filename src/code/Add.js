import React from 'react';
import {withRouter} from  'react-router-dom'
// 1.所有通过route标签渲染出的页面属性上都会有几个属性
// 2.withRouter 携带路由
// history match location
class Back extends React.Component{
  render(){
    return <div>
      <button onClick={()=>{this.props.history.push('/')}}>跳转</button>
    </div>
  }
}
// withRouter是一个函数 函数可以把原有的Back组件进行包装在返回一个新组件,返回的新组件上 就具备着这些路由属性
Back = withRouter(Back);

export default class Add extends React.Component {
  constructor(props){
    super();
    this.input = React.createRef();
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    // 取localStorage的userList 如果取不到是一个空数组
    // 将当前内容填进去 跳转到用户列表页面
    let userList = JSON.parse(localStorage.getItem('userList')) || [];
    userList.push({id:Math.random(),name:this.input.current.value});
    localStorage.setItem('userList',JSON.stringify(userList));
    this.props.history.push('/user/list');
  };
  render() {
    return <form onSubmit={this.handleSubmit}>
      <label htmlFor="username">用户名</label>
      <input type="text"
             id="username"
             ref={this.input}
             required={true}
      />
      <button type="submit">添加</button>
      <Back/>
    </form>
  }
}
