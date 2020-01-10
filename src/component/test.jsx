import React, { Component } from 'react'

import ReactType from 'prop-types'


export default class test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bb: props.initcount,
        }
    }

    static propTypes = {
        initcount: ReactType.number,
        
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            bb:nextProps.initcount
        })
    }
    
    render() {
        return (<div>
            {this.state.bb}
        </div>)
    }
}