import React from 'react';
import '../scss/ProjectWrapper.scss'

const ProjectWrapper = (props) => {
    return (
        <div className="project-container">
            <h2 className="project-title">Some of my Previous Work</h2>
            <p className="project-summary">Here are a few recent design projects. Want to see more? <a href src="#">Email me.</a></p>
            <div className="projects-wrapper">
                {props.children}
            </div>
        </div>
    )
}

export default ProjectWrapper;