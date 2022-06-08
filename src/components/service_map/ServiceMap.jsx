import React, { Component } from 'react'
import ServiceMapItem from './ServiceMapItem'

export default class ServiceMap extends Component {
    render() {
        return (
            <section id="service_map">
                <h2>Service Map</h2>
                <ServiceMapItem>
                    <h3>IT consulting</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorum eaque itaque molestias animi obcaecati perferendis voluptate nostrum commodi beatae.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorum eaque itaque molestias animi obcaecati perferendis voluptate nostrum commodi beatae.</li>
                    </ul>
                </ServiceMapItem>
                <ServiceMapItem>
                    <h3>Software Development</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorum eaque itaque molestias animi obcaecati perferendis voluptate nostrum commodi beatae.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorum eaque itaque molestias animi obcaecati perferendis voluptate nostrum commodi beatae.</li>
                    </ul>
                </ServiceMapItem>
                <ServiceMapItem>
                    <h3>Testing and QA</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorum eaque itaque molestias animi obcaecati perferendis voluptate nostrum commodi beatae.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorum eaque itaque molestias animi obcaecati perferendis voluptate nostrum commodi beatae.</li>
                    </ul>
                </ServiceMapItem>
                <a href="#">View All Services</a>
            </section>
        )
    }
}
