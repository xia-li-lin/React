import React, { Component } from 'react'
import Top from '../components/Top'

function Child(props) {
    return <div>{props.name}</div>
}

// const foo = Cmp => {
//     return props => {
//         return <Cmp {...props} />
//     }
// }

const foo=Cmp=>props=>{
    return <Cmp {...props}/>
}

const fn=aa=>bb=>{
    return aa*bb;
}

export default class HocPage extends Component {
    render() {
        console.log(fn(11)(12));
        const obj={
            name:'xiaoxia'
        }
        const Foo = foo(Child);
        return (
            <div>
                <Top/>
                <h1>HocPage - 高阶组件</h1>
                <p>
                    定义：首先是个函数，函数接收一个组件，返回一个组件
                </p>
                <Foo name={obj.name}/>
            </div>
        )
    }
}
