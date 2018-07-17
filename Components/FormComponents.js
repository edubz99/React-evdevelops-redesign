import React from 'react';


export const TextArea = ({type, value, classvalue,ref, cols, rows, placeholder }) => {
    return (
        <textarea ref={(input) => this.ref = input} name={value} cols={cols} rows={rows} placeholder={placeholder} className={classvalue} required></textarea>
    )
}

export const Button = ({ classvalue, value }) => {
    return (
        <button className={classvalue}>{value}</button>
    )
}

export const Label = ({ forvalue,value }) => {
    return (
        <label htmlFor={forvalue} className="form__label">{value}</label>
    )
}


export const Input = ({type, value, classvalue,ref}) => {
    return (
        <input ref={(input) => this.ref = input} type={type} placeholder={`Enter your ${value} here`} name={value} className={classvalue} id="value" required/>
    )
}


