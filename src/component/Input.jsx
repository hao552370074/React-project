import React, { Component } from 'react'
import { Cascader } from 'antd';
export default class MyComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            options: [
                {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                        {
                            value: 'hangzhou',
                            label: 'Hangzhou',
                            children: [
                                {
                                    value: 'xihu',
                                    label: 'West Lake',
                                },
                            ],
                        },
                    ],
                },
                {
                    value: 'jiangsu',
                    label: 'Jiangsu',
                    children: [
                        {
                            value: 'nanjing',
                            label: 'Nanjing',
                            children: [
                                {
                                    value: 'zhonghuamen',
                                    label: 'Zhong Hua Men',
                                },
                            ],
                        },
                    ],
                },
            ],
        }
    }



    onChange(value, i) {
        console.log(value, i);

    }

    render() {
        return (
            <div>
                {/* <p>{this.state.bb}</p> */}
                <button style={{ width: "100px", height: "50px" }} onClick={() => { this.props.cancel('我是儿子') }}>返回</button>
                <Cascader options={this.state.options} onChange={this.onChange} placeholder="Please select" />
            </div>

        )
    }
}
