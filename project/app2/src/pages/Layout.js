import React, { Component } from 'react'
import Top from '../components/Top'

export default class Layout extends Component {
    render() {
        const { children, showTop } = this.props;
        const arr = [];
        console.log(this.props);
        if (children.$$typeof) { // 不具名插槽
            arr.push(children);
        } else {
            for (let item in children) {
                arr.push(children[item]);
            }
        }
        console.log(arr);
        return (
            <div>
                {showTop && <Top />}
                {/* <p>相当于vue的不具名插槽</p> */}
                {/* {children} */}
                {/* <p>具名插槽</p> */}
                {/* {children.btn} */}
                {/* {children.text} */}
                {/* {children.p} */}

                {/* 兼容具名插槽与不具名插槽 */}
                {
                    arr.map((item, index) => {
                        return <React.Fragment key={index}>{item}</React.Fragment>
                    })
                }
            </div>
        )
    }

    componentDidMount() {
        const { title = "商城" } = this.props;
        document.title = title;
    }
}
