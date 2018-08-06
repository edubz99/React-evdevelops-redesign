import React from 'react';
import FaCode from 'react-icons/lib/fa/code';
import FaCodeFork from 'react-icons/lib/fa/code-fork';
import FaBriefcase from 'react-icons/lib/fa/briefcase';

export const Brief = ({ sentence, title }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{sentence}</p>
        </div>
    ) 
}

export const List = ({ children }) => {
    return (
        <ul className="cv__section--list">
            {children}
        </ul>
    ) 
}

export const ListItem = ({ name }) => {
    return (
        <li>{name}</li>
    ) 
}


export const Skills = () => {
    return (
        <div className="cv__section">
            <FaCode className="icon"/>
            <Brief title={"Skills"} sentence={"I tend to code things from scratch, and enjoy bringing ideas to life in the browser."}/>
            <List>
                <ListItem name={"HTML"} />
                <ListItem name={"CSS with (BEM - CSS Architecture)"} />
                <ListItem name={"JavaScript"} />
                <ListItem name={"SASS"} />
                <ListItem name={"React"} /> 
                <ListItem name={"Webpack"} />
                <ListItem name={"Gulp"} />
            </List>
    
        </div>
    )
}

export const DevTools = () => {
    return (
        <div className="cv__section">
         <FaCodeFork className="icon"/>
        <Brief title={"Dev Tools"} sentence={"These are the tools I currently use to enable me to accomplish my tasks"}/>
        <List>
           <ListItem name={"Github"} />
           <ListItem name={"Bootstrap"} />
           <ListItem name={"Codepen"} />
           <ListItem name={"Terminal"} />
           <ListItem name={"Webpack"} />
           <ListItem name={"Firebase"} />
        </List>
    </div>
    )
}

export const PrevRoles = () => {
    return (
        <div className="cv__section">
         <FaBriefcase className="icon"/>
        <Brief title={"Previous Roles"} sentence={"From Project Planning to Front-end roles have all given me a strong core of working in project driven environments."}/>
        <List>
           <ListItem name={"Digicode - Freelance Frontend Developer - January 2018 - Present"} />
           <ListItem name={"DHL & Jaguar Land Rover - internal Planner - November 2014 - December 2017"} />
           <ListItem name={"Sunmaia Internet Ltd - Junior Web Developer - May 2014 - October 2014"} />
        </List>
    </div>
    )
}