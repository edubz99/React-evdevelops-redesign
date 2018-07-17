import React from 'react';
import '../scss/Nav.scss';
import { Button } from './FormComponents';

const Nav = () => {
    
    return (
        <div>
          <nav className="navigation">

              <div className="navigation__position-left">
                    <h1>ev-devz</h1>
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

export default Nav;
