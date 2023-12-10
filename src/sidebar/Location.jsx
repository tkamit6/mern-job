import React from 'react'
import InputField from '../component/InputField'

export default function Location({ handleChange }) {
    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Location</h4>
            <div>
                <label className='sidebar-label-container'>
                    <input type='radio' className='' name='text' id='text' onChange={handleChange} value='' />
                    <span className='checkmark'></span> All
                </label>
                <InputField handleChange={handleChange} value='london' name='text' title='London' />
                <InputField handleChange={handleChange} value='seattle' name='text' title='Seattle' />
                <InputField handleChange={handleChange} value='madrid' name='text' title='Madrid' />
                <InputField handleChange={handleChange} value='boston' name='text' title='Boston' />
            </div>
        </div>
    )
}
