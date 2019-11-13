import React, { Component } from 'react';

export default class EventHandle extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      username: ''
    };
  }

  submit = () => {
    // console.log('submit',this.state.username);
    console.log('submit', this.refs.username.value, this.props.tellMe('啦啦啦啦啦啦啦'));
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    const { username } = this.state;
    const { store } = this.props;
    return (
      <div>
        <h1>表单</h1>
        <input value={username} onChange={this.handleChange} ref="username" />
        <button onClick={this.submit}>login</button>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>名称</td>
              <td>内容</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{store.id}</td>
              <td>{store.name}</td>
              <td>{store.content}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
