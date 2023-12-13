import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Button } from '@mui/material';
import { Badge, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, AvatarIcon } from "@nextui-org/react";
import MyContext from '../ContextAPI/MyContextProvider';

export default function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const ContextValue = useContext(MyContext);
    const { isLoggedIn, setLoggedIn, handleLogOut, userData } = ContextValue;
    console.log(ContextValue)

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        { path: '/', title: 'Start a Search' },
        { path: '/my-jobs', title: 'My Jobs' },
        { path: '/Salary', title: 'Salary Estimate' },
        { path: '/post-job', title: 'Post a Job' },
    ]
    return (
        <header className='max-w-screen-2xl container mx-auto bg-white xl:px-24 px-4 sticky w-[100%] top-0 z-10'>
            <nav className='flex justify-between items-center py-4'>
                <Link to='/' className='text-2xl text-black'>Job Portal</Link>

                <ul className='hidden md:flex gap-12'>
                    {
                        navItems.map(({ path, title }) => (
                            <li key={path} className='text-base text-primary'>
                                <NavLink
                                    to={path}
                                >
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <div className='text-base text-primary font-medium space-x-5 hidden md:block'>
                    {
                        isLoggedIn ? <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Avatar
                                    icon={<AvatarIcon />}
                                    isBordered
                                    as='button'
                                    classNames={{
                                        base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                                        icon: "text-black/80",
                                    }}
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownItem key="profile" className="h-14 gap-2">
                                    <p className="font-semibold">Signed in as</p>
                                    <p className="font-semibold">{userData.email}</p>
                                </DropdownItem>

                                <DropdownItem onClick={handleLogOut} key="logout" color="danger">
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown> : (<>

                            <Button onClick={() => navigate('/login')} sx={{ border: '1px solid blue ' }} className='!py-2 !px-5 !rounded'>Login</Button>
                            <Button to='/sign-up' className='!py-2 !px-5 !border !rounded !bg-blue !text-white'>Sign Up</Button>
                        </>

                        )
                    }
                </div>


                {/* for mobile */}
                <div className='md:hidden block'>
                    <button onClick={handleMenuToggle}>
                        {
                            isMenuOpen ? <FaXmark /> : <FaBarsStaggered className='w-5 h-5 text-primary ' />
                        }

                    </button>
                </div>
            </nav>
            {/* navItem form mobile */}

            <ul className={`px-4 bg-black py-5 rounded-sm absolute z-10 w-[90%] ${isMenuOpen ? '' : 'hidden'}`}>
                {
                    navItems.map(({ path, title }) => (
                        <li key={path} className='text-base text-white first:text-white py-1'>
                            <NavLink
                                to={path}
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))
                }
                <li className='text-white py-1'><Button className=''>Login</Button></li>
            </ul>
        </header>
    )
}
