import React, { Component } from 'react';
import '../scss/Contact.scss'
import base from '../base'


class Contact extends Component {
    constructor() {
        super();
        this.state = {
            message: {
                name:'',
                email:'',
                phone:'',
                descr:''
            }
        }
    }

    createMessage = (e) => {
        e.preventDefault();
        //Collect entered values on form using refs
        this.setState({ message:{
            name:this.name.value,
            email:this.email.value,
            number:this.phone.value,
            descr:this.descr.value
        }
        })

    //Select form using ref and Reset the form ;
      this.contactForm.reset();
    }
    
    componentDidMount() {
        const date = Date.now().toString();
        this.ref = base.syncState(date, 
            {
            context:this,
            state: 'message'
        });

    }
        
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    

    
    render() {
        return (
            <div className="section-wrapper">
                <div className="contact-wrapper" id="contact">
                    <div className="contact">
                        <h1 className="contact__title">Let's Connect</h1>
                        <p className="contact__para"> Wanna get in touch or talk about any projects? Please feel free to complete the form below or contact me via email at <a className="contact__para--link" href="mailto:dubv5@hotmail.co.uk">dubv5@hotmail.co.uk</a>
                        </p>
                            <form ref={(form) => this.contactForm = form} className="contact__form" onSubmit={this.createMessage}>
                                <p>
                                    <input ref={(input) => this.name = input} type="text" name="name" id="name" placeholder="Name" required/>
                                </p>
                                <p>
                                    <input ref={(input) => this.email = input} type="email" name="email" id="email" placeholder="Email Address" className="contact__form--input" required/>
                                </p>
                                <p>
                                    <input ref={(input) => this.phone = input} type="number" name="phone" id="phone" placeholder="Phone Number " className="contact__form--input" required/>
                                </p>
                                <p>
                                    <textarea ref={(input) => this.descr = input} name="descr" id="textarea" cols="30" rows="6" placeholder="Tell me about your project... what is it? Why are you doing it? What do you hope to accomplish? How can I help? " className="contact__form--text-area" required></textarea>
                            </p>
                            <p>
                                    <button className="contact__button">Submit </button>
                                </p>

                            </form>
            
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;