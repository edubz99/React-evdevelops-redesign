import React from 'react';
import  '../scss/CV.scss';

import {DevTools, PrevRoles, Skills} from './CVSections';

const CV = () => {
    return (
        <div className="section-wrapper">
        <div className="cv">
            
            <Skills />
            <DevTools />
            <PrevRoles />
        </div>
        </div>
    )
}

export default CV;