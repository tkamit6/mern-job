import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPostingData from './JobPostingData'

export default function Sidebar({ handleChange, handleClick }) {
    return (
        <div className='space-y-5 sticky top-20'>
            <h3 className='text-lg font-bold mb-2'>Filter</h3>
            <Location handleChange={handleChange} />
            {/* <Salary handleChange={handleChange} handleClick={handleClick} /> */}
            {/* <JobPostingData handleChange={handleChange} /> */}
        </div>
    )
}
