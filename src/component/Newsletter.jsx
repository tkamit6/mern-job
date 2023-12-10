import React from 'react'
import { FaEnvelope, FaEnvelopeOpenText, FaRocket } from 'react-icons/fa6'
import Button from '../sidebar/Button'

export default function Newsletter() {
    return (
        <div>
            <div>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                    <FaEnvelopeOpenText />
                    Email me for Jobs</h3>
                <p className='text-primary/75 text-base mb-4'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface</p>
                <div className='w-full space-y-4'>
                    <input type='email' placeholder='name@mail.com' name='email' className='w-full block py-2 pl-3 border focus:outline-none' />
                    <input type='submit' value='Subscribe' className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold' />
                </div>
            </div>

            <div className='mt-24'>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                    <FaRocket />
                    Get notice faster</h3>
                <p className='text-primary/75 text-base mb-4'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface</p>
                <div className='w-full space-y-4'>

                    <input type='submit' value='Upload your Resume' className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold' />
                </div>
            </div>
        </div>
    )
}
