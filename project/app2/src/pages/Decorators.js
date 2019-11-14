import React, { Component } from 'react'
import Top from '../components/Top'

// function Child(props) {
//     return <div>{props.name}</div>
// }

const foo=Cmp=>props=>{
    return <Cmp {...props}/>
}

@foo
class Child extends Component{
    render(){
        return (<div>{this.props.name}</div>);
    }
}

export default class Decorators extends Component {
    render() {
        const obj={
            name:'小夏',
            sex:'女'
        };
        return (
            <div>
                <Top/>
                <h1>HocPage - 高阶组件</h1>
                <p>
                    定义：首先是个函数，函数接收一个组件，返回一个组件
                </p>
                <Child name={obj.name}/>
            </div>
        )
    }
}
