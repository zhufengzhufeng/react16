import React from 'react';
import {Link} from 'react-router-dom';
// 拆分成组件：复用 ， 项目太大
// 什么样的东西放在this上 什么东西放在this.state
export default class List extends React.Component {
  constructor(){
    super();
    let userList = JSON.parse(localStorage.getItem('userList'))||[];
    this.state = {userList}
  }
  render(){
    return <table className="table table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>用户名</th>
        </tr>
      </thead>
      <tbody>
        {this.state.userList.map((item,index)=>(
          <tr key={index}>
              <td>
                <Link to={{
                  pathname:`/user/detail/${item.id}`,
                  state:item
                }}>{item.id}</Link>
            </td>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  }
}
