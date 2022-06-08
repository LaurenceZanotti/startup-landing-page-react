import React, { Component } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/services/Services'
import ServiceMap from './components/service_map/ServiceMap'

export default class App extends Component {
	render() {
		return (
			<>
				<Navbar>
					<li>Home</li>
					<li>About</li>
					<li>Our Services</li>
					<li>Service Map</li>
					<li>Contact Us</li>
					<li>Sign in</li>
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