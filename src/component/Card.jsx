import React from 'react'
import { FaClock } from 'react-icons/fa6';
import { FiCalendar, FiDollarSign, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
// import img from '../../public/images'

export default function Card({ data }) {
    const { companyName, description, companyLogo, employmentType, experienceLevel, jobLocation, jobTitle, maxPrice, minPrice, postingDate, salaryType } = data;
    return (
        <section className='card'>
        {/* <div className=''> */}
            <Link to={'/'} className='md:grid md:grid-cols-6 flex gap-4 flex-col sm:flex-row items-start'>
            <div className='w-24 h-24 col-span-1'>
                <img src={`${companyLogo}`} alt='logo' className=' h-10 object-cover' />
            </div>
                <div className='col-span-5 card-details'>
                    <h4 className='text-primary mb-1'>{companyName}</h4>
                    <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
                    <div className='flex text-primary/70 text-base flex-wrap gap-2 mb-2'>
                        <span className='flex items-center gap-2'> <FiMapPin /> {jobLocation} </span>
                        <span className='flex items-center gap-2'> <FaClock /> {employmentType} </span>
                        <span className='flex items-center gap-2'> <FiDollarSign /> {minPrice}-{maxPrice}k </span>
                        <span className='flex items-center gap-2'> <FiCalendar /> {postingDate} </span>
                    </div>
                    <p className='text-base text-primary/70'>{description}</p>
                </div>
            </Link>
        {/* </div> */}
        </section>
    )
}
