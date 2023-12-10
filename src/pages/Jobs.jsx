import React from 'react'

export default function Jobs({ result }) {
    return (
        <>
            <div>
                <p className='font-semibold'>{result.length} Jobs</p>
            </div>
            {result}</>
    )
}
