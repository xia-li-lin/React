import React, { Component } from 'react';

export default class LifeCycle extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      counter: 0
    };
    console.log('constructor', this.state);
  }

  setCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return null;  // 返回null，不对state做改变
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', this.state);
    return null;
  }

  // 被废弃
  // UNSAFE_componentWillMount() {
  //   console.log('componentWillMount', this.state);
  // }

  render() {
    const { counter } = this.state;
    console.log('render', this.state);
    return (
      <div>
        <h1>生命周期</h1>
        <h2 onClick={this.setCounter}>{counter}</h2>
        {
          counter < 3 && <Foo counter={counter} />
        }
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount', this.state);
  }

  // 优化生命周期
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps);
    // console.log('shouldComponentUpdate', nextState);
    return true;
  }

  // 被废弃
  // UNSAFE_componentWillUpdate() {
  //   console.log('componentWillUpdate', this.state);
  // }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.state);
  }
}

class Foo extends Component {
  constructor() {
    super(...arguments);
    this.state = {};
  }

  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>Foo</h1>
        <h2>{counter}</h2>
      </div>
    );
  }

  // 被废弃
  // UNSAFE_componentWillReceiveProps(props,state){
  //   console.log('compontentWillReviceProps',props);
  // }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

}