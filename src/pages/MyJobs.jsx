import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

export default function MyJobs() {
    const [jobs, setJobs] = useState([]);
    const [SeacrhText, setSeacrhText] = useState();
    const [isloading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        fetch('https://mern-job-api.vercel.app/my-jobs/mail@mail.com')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setJobs(data);
                setIsLoading(false); // Assuming you want to set loading to false after fetching data
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false); // Handle error and set loading to false
            });
    }, []);


    const handleSearch = () => {
        // e.preventDefault();
        const filter = jobs.filter((job) =>
            job.jobTitle.toLowerCase().indexOf(SeacrhText.toLowerCase()) !== -1);
        console.log(filter);
        setJobs(filter);
        setIsLoading(false);
    }

    const handleDelete = (id) => {
        setIsLoading(true);
        fetch(`http://localhost:5000/job/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Deleted");
                }
                console.log(data);
                setIsLoading(false)
            })
            .catch(err => {
                console.error(err);
                setIsLoading(false)
            });
        console.log(id);
    };


    const handleEdit = (id) => {
        console.log(id)
        navigate(`/edit-jobs/${id}`)
    }



    return (
        <div className='max-w-4xl container mx-auto  px-4'>
            <div className='my-job-container'>
                <h1 className='text-center p-4'>All My Jobs</h1>
                <div className='serach-box p-2 text-center mb-2'>
                    <input onChange={(e) => { setSeacrhText(e.target.value) }} type='text' name='search' className='py-2 pl-3 border focus:outline-none lg:w-9/12 mb-4 w-full' />
                    <button onClick={handleSearch} className='bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4'>Search</button>
                </div>
            </div>

            <section className="py-1 bg-blueGray-50">
                <div className="w-full mb-12 xl:mb-0 px-4 mx-auto mt-5">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-base text-blueGray-700">All Jobs</h3>
                                </div>
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <Link to='/post-job' className="bg-blue text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Post a new Job</Link>
                                </div>
                            </div>
                        </div>

                        <div className="block w-full overflow-x-auto">
                            <table className="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                    <tr>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            No.
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Job Title
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Company Name
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                                            Salary
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                                            Edit
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>

                                {
                                    isloading ? <h6>Loading</h6> : (
                                        <tbody>

                                            {
                                                jobs.map((job, index) => (
                                                    <tr key={index}>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                            {index + 1}
                                                        </th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                            {job.jobTitle}
                                                        </td>
                                                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            {job.companyName}
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            ${job.minPrice} - ${job.maxPrice}
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            <Button onClick={() => handleEdit(job._id)} className='!rounded-sm'> Edit </Button>
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            <Button onClick={() => handleDelete(job?._id)} className='!bg-red-600 !text-white !rounded-sm' > Delete </Button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }


                                        </tbody>

                                    )
                                }


                            </table>
                        </div>
                    </div>
                </div>
                {/* <footer className="relative pt-8 pb-6 mt-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                                <div className="text-sm text-blueGray-500 font-semibold py-1">
                                    Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
                                </div>
                            </div>
                        </div>
                    </div>
                </footer> */}
            </section>
        </div>
    )
}
