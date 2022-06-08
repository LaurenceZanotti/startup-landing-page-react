import React, { Component } from 'react'

export default class ServiceMapItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
