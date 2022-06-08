import React, { Component } from 'react'
import arrow from '../imgs/arrow_icon.svg'

export default class Hero extends Component {
    render() {
        return (
            <header id="home">
                <h1>Providing Industry Leading Solutions for</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cum quae esse culpa est quo voluptatem corporis dolorum recusandae asperiores!</p>
                <div className="btn-cta">Learn More <img src={arrow} alt="arrow icon" /></div>
            </header>
        )
    }
}
