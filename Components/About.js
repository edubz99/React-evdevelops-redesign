import React from 'react';
import '../scss/About.scss'
import FaQuoteLeft from 'react-icons/lib/fa/quote-left';
import FaQuoteRight from 'react-icons/lib/fa/quote-right';

const About = () => {
    return (
        <div className="section-wrapper">
            <div className="landing">
                <h1 className="landing__title">Front-end Developer</h1>
                <p className="landing__sub-title"><FaQuoteLeft  className="landing__sub-title--quote-icons"/> I code beautiful simple things and  I love it.<FaQuoteRight className="landing__sub-title--quote-icons"/></p>
                <div className="landing__image">
                    <img className="landing__image--profImage" src="https://evdevelops.com/Images/profImage.jpg"  alt="Profile"/>
                </div>
            </div>
            <div className="about">
                    <h2 className="about__title">Hi, I'm Evans. Nice to meet you.</h2>
                    <p className="about__brief"> I'm a Front-end Developer with a history of working in the logistics and supply chain industry. I'm current freelancing as Front-end developer,developing in JavaScript ES6+, HTML, CSS, SASS, Webpack and some React.</p>
            </div>
        </div>
    )
}

export default About;
