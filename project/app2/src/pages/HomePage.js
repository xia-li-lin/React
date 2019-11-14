import React, { Component } from 'react'
import { Consumer } from '../AppContext';
import Top from '../components/Top';

export default class HomePage extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>HomePage</h1>
                <Top />
                <Consumer>
                    {
                        ctx => <div>{ctx.user.name}</div>
                    }
                </Consumer>
            </div>
        )
    }
}
