import React from 'react';
import '../scss/Scroll.scss'

const Scroll = (props) => {
    return (
        <div className= "scroll">
            {props.children}
        </div>
    )
}

export default Scroll;