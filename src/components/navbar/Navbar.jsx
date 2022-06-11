import React, { Component } from 'react'
import './Navbar.css'
import logo from '../../imgs/logo.svg'

export default class Navbar extends Component {
    constructor(props) {
        super(props)    
        this.state = {
            sections: props.children.slice(0, -1),
            signin: props.children.at(-1)
        }
    }

    render() {
        return (
        <nav className='nav-container'>
            <img src={logo} alt="Company logo" />
            <ul>
                {this.state.sections}
            </ul>
            <ul>
                {this.state.signin}
            </ul>
        </nav>
        )
    }
}
