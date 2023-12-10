import React from 'react'
import InputField from '../component/InputField'

export default function JobPostingData({ handleChange }) {
    const nowDate = new Date();

    const twentyFourHourAgo = new Date(nowDate - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(nowDate - 7 * 24 * 60 * 60 * 1000);
    const thirtDaysAgo = new Date(nowDate - 30 * 24 * 60 * 60 * 1000);

    const twentyFourHourAgoDate = twentyFourHourAgo.toISOString().slice(0, 10)
    const sevenDaysAgoDate = twentyFourHourAgo.toISOString().slice(0, 10)
    const thirtDaysAgoDate = twentyFourHourAgo.toISOString().slice(0, 10)
    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>
            <div>
                <label className='sidebar-label-container'>
                    <input type='radio' className='' name='text' id='text' onChange={handleChange} value='' />
                    <span className='checkmark'></span> All Time
                </label>
                <InputField handleChange={handleChange} value={twentyFourHourAgoDate} name='text' title='Last 24' />
                <InputField handleChange={handleChange} value={sevenDaysAgoDate} name='text' title='7 Days Ago' />
                <InputField handleChange={handleChange} value={thirtDaysAgoDate} name='text' title='30 Days Ago' />
            </div>
        </div>
    )
}
