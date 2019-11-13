import React, { Component } from 'react';

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            counter: 0
        }
        this.setCounter = this.setCounter.bind(this);
    }

    setCounter = () => {
        // setState是异步
        // this.setState({
        //     counter: this.state.counter + 1
        // },()=>{
        //     console.log('satt',this.state.counter);
        // });

        /*
        this.setState({
            counter: this.state.counter + 1
        });

        this.setState({
            counter: this.state.counter + 2
        });
        */

        /* 方法一、setState异步->同步用回调函数
        this.setState(nextState => {
            return {
                counter: nextState.counter + 1
            }
        });

        this.setState(nextState => {
            return {
                counter: nextState.counter + 2
            }
        })
        */

        /* 方法二、setState异步->同步
        setTimeout(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 0);
        */

        console.log(this.state.counter);
    }

    render() {
        const name = '小明';
        const { date, counter } = this.state;
        return (
            <div>
                <h1>{name}</h1>
                <h2>{date.toLocaleTimeString()}</h2>
                <h3 id="counter" onClick={this.setCounter}>counter: {counter}</h3>
            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000);

        // 方法三、setState异步->同步
        document.querySelector('#counter').addEventListener('click',()=>{
            this.setState({
                counter: this.state.counter + 1
            })
        });
    }

    // 组件卸载之前完成
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
}
