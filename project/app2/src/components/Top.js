import React, { Component } from 'react'
import { handleConsumer } from '../AppContext';

export default class Top extends Component {
    render() {
        const Top1=handleConsumer(TopBar);
        return (
            <Top1></Top1>
        )
    }
}

function TopBar(props){
    return <div className="top">
            <h1>Top</h1>
            {props.user.name}
           </div>
}