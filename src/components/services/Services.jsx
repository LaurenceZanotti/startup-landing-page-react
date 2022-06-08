import React, { Component } from 'react'
import arrow from '../../imgs/arrow_icon.svg'
import app_dev from '../../imgs/app_dev.svg'
import factory_services from '../../imgs/factory_services.svg'
import Service from './Service'

export default class Services extends Component {
    render() {
        return (
            <section id="services">
                <h2>Our Services</h2>
                <Service direction="right">
                    <div>
                        <h3>Non-IT enterprises</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illum nemo sequi consectetur eaque saepe, non in alias cum vel!</p>
                        <div className="btn-cta-secondary">Learn More <img src={arrow} alt="arrow icon" /></div>
                    </div>
                    <img src={factory_services} alt="Automated services for Non-IT enterprises" />
                </Service>
                <Service direction="left">
                    <div>
                        <h3>Software product companies</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illum nemo sequi consectetur eaque saepe, non in alias cum vel!</p>
                        <div className="btn-cta-secondary">Learn More <img src={arrow} alt="arrow icon" /></div>
                    </div>
                    <img src={app_dev} alt="App development and software product companies" />
                </Service>
                <Service direction="right">
                    <div>
                        <h3>Non-IT enterprises</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illum nemo sequi consectetur eaque saepe, non in alias cum vel!</p>
                        <div className="btn-cta-secondary">Learn More <img src={arrow} alt="arrow icon" /></div>
                    </div>
                    <img src={factory_services} alt="Automated services for Non-IT enterprises" />
                </Service>
            </section>
        )
    }
}
