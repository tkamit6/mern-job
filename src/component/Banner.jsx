import React, { useState } from 'react';
import { FiMapPin, FiSearch } from 'react-icons/fi';

export default function Banner({ query, handleInputChange }) {

    
    console.log(query)
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14'>
            <h1 className='text-5xl font-bold text-primary mb-3'>Find your <span className='text-blue'> new job </span> today</h1>
            <p className='text-lg text-black/70 mb-8'>Thousand of jobs in the computer, engineering and technology sectors are waiting for you</p>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className='flex justify-start md:flex-row flex-col gap-1'>
                    <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset md:focus-within:ring-indigo-600 md:w-1/2 w-full'>
                        <input onChange={handleInputChange} value={query} type='text' name='title' id='title' placeholder='What position are you looking for' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' />
                        <FiSearch className='absolute mt-2.5 ml-2 text-gray-400' />
                    </div>
                    <div className='flex  rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset md:focus-within:ring-indigo-600 md:w-1/2 w-full'>
                        <input type='text' name='title' id='title' placeholder='What position are you looking for' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' />
                        <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400' />
                    </div>
                    <button type='submit' className='bg-blue py-2 px-8 text-white rounded'>Search</button>
                </div>
            </form>
        </div>
    )
}
