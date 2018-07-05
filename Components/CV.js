import React from 'react';
import  '../scss/CV.scss';
import FaCode from 'react-icons/lib/fa/code';
import FaCodeFork from 'react-icons/lib/fa/code-fork';
import FaBriefcase from 'react-icons/lib/fa/briefcase';
const CV = () => {
    return (
        <div className="cv">
            <div className="skills">
                <FaCode className="icon"/>
                <h2>Skills</h2>
                <p>I tend to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <ul className="skills__list">
                    <li>HTML</li>
                    <li>CSS with (BEM - CSS Architecture)</li>
                    <li>JavaScript</li>
                    <li>SASS</li>
                    <li>Webpack</li>
                </ul>

                <p>I have dabbled with and have knowledge on</p>
                <ul className="skills__list">
                    <li>React</li>
                    <li>Gulp</li>
                </ul>

            </div>

            <div className="tools">
                < FaCodeFork className="icon"/>
                <h2>Dev Tools</h2>
                <p>These are the tools I currently use to enable me accomplish my tasks</p>
                <ul className="tools__list">
                    <li>Github</li>
                    <li>Bootstrap</li>
                    <li>Codepen</li>
                    <li>Terminal</li>
                    <li>Webpack</li>
                    <li>Firebase</li>
                </ul>
            </div>

            <div className="roles">
                <FaBriefcase className="icon"/>
                <h2>Previous Roles</h2>
                <p>From Project Planning to Front-end roles have all given me a strong core of working in project driven environments.</p>
                <ul className="roles__list">
                    <li>Digicode - Freelance Frontend Developer - <span>January 2018 - Present</span></li>
                    <li>DHL & Jaguar Land Rover - internal Planner - <span>November 2014 - December 2017</span></li>
                    <li>Sunmaia Internet Ltd - Junior Web Developer - <span>May 2014 - October 2014</span></li>
                </ul>
            </div>
        </div>
    )
}

export default CV;