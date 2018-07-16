import React from 'react';
import '../scss/Wrapper.scss'

const Wrapper = (props) => {
    return (
        <div className= "master-wrapper">
            {props.children}
        </div>
    )
}

export default Wrapper;