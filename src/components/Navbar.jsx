import React, { Component } from 'react'
import logo from '../imgs/logo.svg'

export default class Navbar extends Component {
    constructor(props) {
        super(props)        
    }

    render() {
        return (
        <nav>
            <img src={logo} alt="Company logo" />
            {this.props.children}
        </nav>
        )
    }
}
