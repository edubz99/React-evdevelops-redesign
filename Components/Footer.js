import React from 'react';
import '../scss/Footer.scss';
import FaIstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaGithub from 'react-icons/lib/fa/github';
import FaCodepen from 'react-icons/lib/fa/codepen';
import Social from './Social';

const Footer = () => {
    return (
        <div className="section-wrapper">
            <div className="footer">
                <h1 className="footer__logo">ev-devz</h1>
                <h2 className="footer__title">Living, learning, & prosper each day at a time.</h2>
               <ul className="footer__social-list">

                    <Social  url={"https://www.instagram.com/evnz__"} comment={"Follow me on Instagram"} icon={<FaIstagram />}/>

                    <Social  url={"https://twitter.com/Evz_Devz"} comment={"Follow me on Twitter"} icon={<FaTwitter />}/>

                    <Social  url={"https://github.com/edubz99"} comment={"Lets connect on Github"} icon={<FaGithub />}/>

                      
                    <Social  url={"https://codepen.io/edubz99"} comment={"Lets connect on codepen"} icon={<FaCodepen />}/>
                   
               </ul>
            </div>
        </div>
    )
}

export default Footer;