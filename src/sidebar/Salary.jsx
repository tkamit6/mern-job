import React from 'react'
import Button from './Button'
import InputField from '../component/InputField'

export default function Salary({ handleChange, handleClick }) {
    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Salary</h4>
            <div className='mb-4'>
                <Button onClickHandler={handleClick} value='' title='Hourly' />
                <Button onClickHandler={handleClick} value='Monthly' title='Monthly' />
                <Button onClickHandler={handleClick} value='Yearly' title='Yearly' />
            </div>
            <div>
                <label className='sidebar-label-container'>
                    <input type='radio' className='' name='test2' id='text' onChange={handleChange} value='' />
                    <span className='checkmark'></span> All
                </label>
                <InputField handleChange={handleChange} value={30} name='test2' title='< 30000k ' />
                <InputField handleChange={handleChange} value={50} name='test2' title='< 50000k ' />
                <InputField handleChange={handleChange} value={80} name='test2' title='< 80000k ' />
                <InputField handleChange={handleChange} value={100} name='test2' title='< 1000000k ' />
            </div>
        </div>
    )
}
