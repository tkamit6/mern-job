import React from 'react'

export default function InputField({ handleChange, value, title, name }) {
    return (
        <label className='sidebar-label-container'>
            <input type='radio' className='' name={name} onChange={handleChange} value={value} />
            <span className='checkmark'></span> {title}
        </label>
    )
}
