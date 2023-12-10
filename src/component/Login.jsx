import React from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    return (
        <div className='h-screen w-full items-center justify-center flex'>
            <button className='!py-2 !px-8 bg-blue !text-white' >Login</button>
        </div>
    )
}
