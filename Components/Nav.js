import React from 'react';
import '../scss/Nav.scss';
const Nav = () => {
    
    return (
        <div>
          <nav className="navigation">

              <div className="navigation__position-left">
                    <h1>ev-devz</h1>
              </div>

              <div className="navigation__position-right">
              <a href="#contact"><button id="button" className="navigation__position-right--hello-button">
                     Say Hello
                 </button></a>
              </div>

          </nav>
        </div>
    )
}

export default Nav;
