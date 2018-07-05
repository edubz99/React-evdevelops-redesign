import React from 'react';
import '../scss/Contact.scss'

const Contact = () => {
    return (
        <div className="contact">
            <h1 className="contact__title">Let's Connect</h1>
            <p className="contact__para"> Wanna get in touch or talk about any projects? Please feel free to contact me via email at <a className="contact__para--link" href="mailto:dubv5@hotmail.co.uk">dubv5@hotmail.co.uk</a> or drop me a message through my <a href="contact.html" className="contact__para--link">contact page.</a>
            </p>
            <button className="contact__button">Contact Me</button>
        </div>
    )
}

export default Contact;