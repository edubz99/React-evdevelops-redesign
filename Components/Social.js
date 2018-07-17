import React from 'react';

const Social = ({url, comment, icon}) => {
    return (
        <li className="footer__social-list--link">
            <a href={url} target="_blank" title={comment}>
                {icon}
            </a>
        </li>
    )
}

export default Social;
