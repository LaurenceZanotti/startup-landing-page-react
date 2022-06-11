import React, { Component } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'
import ServiceMap from './components/service_map/ServiceMap'

export default class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<>
				<Navbar>
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#services">Our Services</a></li>
					<li><a href="#service_map">Service Map</a></li>
					<li><a href="#contact">Contact Us</a></li>
					<li><a href="#" className='signin-btn'>Sign in</a></li>
				</Navbar>
				<Hero />
				<About />
				<Services />
				<ServiceMap />
				<Contact />
				<Footer />
			</>
		)
	}
}