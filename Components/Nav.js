import React from 'react';
import '../scss/Nav.scss'


const scrolledNav = (e) => {
    console.log(e);
}

const Nav = () => {
    return (
        <div>
          <nav className="navigation">

              <div className="navigation__position-left">
                    <h1>ev-devz</h1>
              </div>

              <div className="navigation__position-right">
                 <button className="navigation__position-right--hello-button">Say Hello</button>
              </div>

          </nav>
        </div>
    )
}

export default Nav;
