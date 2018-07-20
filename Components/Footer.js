import React from 'react';
import '../scss/Footer.scss';
import '../scss/Nav.scss';
import { Logo } from './Nav';
import FaIstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaGithub from 'react-icons/lib/fa/github';
import FaCodepen from 'react-icons/lib/fa/codepen';
import Social from './Social';



export const Footer = ({ footerTitle  }) => {
    return (
        <div className="section-wrapper">
            <div className="footer">
                <Logo value={"ev-devz"}/> 
                <h2 className="footer__title">{footerTitle}</h2>
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