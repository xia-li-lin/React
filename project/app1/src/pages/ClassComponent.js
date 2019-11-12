import React, { Component } from 'react';

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        });
    }

    render() {
        console.log('render');
        const name = '小明';
        const { date } = this.state;
        return (
            <div>
                <h1>{name}</h1>
                <h2>{date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
