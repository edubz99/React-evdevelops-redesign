import React from 'react';
import '../scss/Nav.scss';
import { Button } from './FormComponents';


export const Logo = ({ value }) => {
    return (
        <h1 className="logo">{value}</h1>
    )
} 



export const Nav = () => {
    
    return (
        <div>
          <nav className="navigation">

              <div className="navigation__position-left">
                   <Logo value={"ev-devz"}/> 
              </div>

              <div className="navigation__position-right">
              <a href="#contact">
                 <Button classvalue="navigation__position-right--hello-button"  value="Say Hello"/>
                </a>
              </div>

          </nav>
        </div>
    )
}