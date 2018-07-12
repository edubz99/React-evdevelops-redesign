import React from 'react';
import '../scss/Footer.scss';
import FaIstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaGithub from 'react-icons/lib/fa/github';
import FaCodepen from 'react-icons/lib/fa/codepen';

const Footer = () => {
    return (
        <div className="section-wrapper">
            <div className="footer">
                <h1 className="footer__logo">ev-devz</h1>
                <h2 className="footer__title">Living, learning, & prosper each day at a time.</h2>
               <ul className="footer__social-list">
                    <li className="footer__social-list--link">
                        <a href="https://www.instagram.com/evnz__" target="_blank" title="Follow me on Instagram">
                        <FaIstagram/>
                        </a>
                    </li>
                    <li className="footer__social-list--link">
                        <a href="https://twitter.com/Evz_Devz" target="_blank" title="Follow me on Twitter">
                            <FaTwitter/>
                        </a>
                    </li>
                    <li className="footer__social-list--link">
                        <a href="https://github.com/edubz99" target="_blank" title="Lets connect on Github">
                        <FaGithub/>
                        </a>
                    </li>
                    <li className="footer__social-list--link">
                        <a href="https://codepen.io/edubz99/" target="_blank">
                        <FaCodepen/>
                        </a>
                    
                    </li>
               </ul>
            </div>
        </div>
    )
}

export default Footer;