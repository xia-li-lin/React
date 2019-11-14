import React, { Component } from 'react'
import Layout from './Layout';

export default class UserPage extends Component {
    render() {
        return (
            <Layout showTop={true} title="用户中心">
                <div>
                    <h1>UserPage</h1>
                </div>
                {/* {
                    {
                        btn: <button>按钮</button>,
                        text: "文案",
                        p: <p>文字段落</p>
                    }
                } */}
            </Layout>
        )
    }
}
