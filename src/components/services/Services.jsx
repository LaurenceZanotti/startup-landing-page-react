import React, { Component } from 'react'
import arrow from '../../imgs/arrow_icon.svg'
import Service from './Service'

export default class Services extends Component {
    render() {
        return (
            <section id="services">
                <Service direction="right">
                    <h3>Non-IT enterprises</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illum nemo sequi consectetur eaque saepe, non in alias cum vel!</p>
                    <div className="btn-cta-secondary">Learn More <img src={arrow} alt="arrow icon" /></div>
                </Service>
                <Service direction="left">
                    <h3>Software product companies</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illum nemo sequi consectetur eaque saepe, non in alias cum vel!</p>
                    <div className="btn-cta-secondary">Learn More <img src={arrow} alt="arrow icon" /></div>
                </Service>
                <Service direction="right">
                    <h3>Non-IT enterprises</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illum nemo sequi consectetur eaque saepe, non in alias cum vel!</p>
                    <div className="btn-cta-secondary">Learn More <img src={arrow} alt="arrow icon" /></div>
                </Service>
            </section>
        )
    }
}
