import React, { Component } from 'react'

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        // this.state = {
        //     fullname: '',
        //     email: '',
        //     phone: '',
        //     message: ''
        // }

        this.handleFormChange = this.handleFormChange.bind(this)
    }

    handleFormChange(event) {
        const target = event.target
        const name = target.name

        this.setState({
            [name]: target.value
        })
    }

    render() {
        return (
            <section id="contact">
                <h2>Contact Us</h2>
                <form action="">
                    <div>
                        <input type="text" name="fullname" onClick={e => this.handleFormChange(e)} placeholder="Full Name" />
                    </div>
                    <div>
                        <input type="email" name="email" onClick={e => this.handleFormChange(e)} placeholder="Email Address" />
                    </div>
                    <div>
                        <input type="text" name="phone" onClick={e => this.handleFormChange(e)} placeholder="Phone Number" />
                    </div>
                    <div>
                        <textarea value={this.state.message} name="message" onClick={e => this.handleFormChange(e)} placeholder="Have anything to say?" />
                    </div>
                    <div>
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </section>
        )
    }
}
