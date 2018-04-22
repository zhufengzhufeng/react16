import React from 'react';
// /user/detail/1
// /user/detail/:id=>{id:1} =params
// render里不能放return this.props.history('/')
export default class Detail extends React.Component {
  constructor(props) {
    super();
    if (!props.location.state) {
      return props.history.push('/user/list')
    }
  }
  render() {
    if (!this.props.location.state) {
      return null;
    }
    let {id, name} = this.props.location.state;
    return <div className="h3">用户{id} {name}</div>
  }
}
