import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import { useLoaderData, useParams } from 'react-router-dom';
import CreatableSelect from 'react-select/creatable'


export default function UpdateJob() {
    const [selectedOption, setSelectedOption] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm()

    const { id } = useParams();
    console.log(id);
    const loader = useLoaderData()

    console.log(loader)

    const onSubmit = (data) => {
        data.skills = selectedOption;

        fetch(`https://mern-job-api.vercel.app/update-job/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                if (data.acknowledged === true) {
                    alert("Job UPDATED Successfully");
                }
                reset();
            })
            .catch((err) => {
                console.log(err)
            })
        console.log(data)
    }

    const options = [
        { value: 'JavaScript', label: "JavaScript" },
        { value: 'C++', label: "C++" },
        { value: 'HTML', label: "HTML" },
        { value: 'CSS', label: "CSS" },
        { value: 'React', label: "React" },
        { value: 'Node', label: "Node" },
        { value: 'MongoDB', label: "MongoDB" },
        { value: 'Redux', label: "Redux" },
    ]

    
    return (
        <div className=' max-w-screen-xl mx-auto container xl:px-24 px-4'>
            <div className='bg-[#fafafa] py-10 px-4 lg:px-16 '>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8 '>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Title</label>
                            <input type="text" placeholder="Web Developer" defaultValue={""} {...register("jobTitle")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 focus:ring-2 ring-blue rounded-sm' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Company Name</label>
                            <input type="text" placeholder="Ex: Microsoft" {...register("companyName")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 focus:ring-2 ring-blue rounded-sm' />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8 '>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Minimum Salary</label>
                            <input type="text" placeholder="$20K" {...register("minPrice")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 focus:ring-2 ring-blue rounded-sm' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Maximum Salary</label>
                            <input type="text" placeholder="$120K" {...register("maxPrice")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 focus:ring-2 ring-blue rounded-sm' />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8 '>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Salary Type</label>
                            <select {...register("salaryType")} className='create-job-input'>
                                <option value="">Choose Your Salary</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Location</label>
                            <input type="text" placeholder="Ex: London" {...register("jobLocation")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 focus:ring-2 ring-blue rounded-sm' />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8 '>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Posting Date</label>
                            <input type="date" placeholder="Ex: 2023-11-03 " {...register("postingDate")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 focus:ring-2 ring-blue rounded-sm' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Experience Level</label>
                            <select {...register("experienceLevel")} className='create-job-input'>
                                <option value="">Choose Your Experience</option>
                                <option value="NoExperience">No Experience</option>
                                <option value="Internship">Internship</option>
                                <option value="WorkRemotly">Work Remotly</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className='block mb-2 text-lg'>Skills</label>
                        <CreatableSelect defaultValue={selectedOption} onChange={setSelectedOption} options={options} isMulti className=' py-1' />
                    </div>

                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8 '>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Posting Date</label>
                            <input type="url" placeholder="Ex: Paste your company logo url " {...register("companyLogo")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 focus:ring-2 ring-blue rounded-sm' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Employement Type</label>
                            <select {...register("experienceLevel")} className='create-job-input'>
                                <option value="">Employement Type</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Temprory">Temprory</option>
                            </select>
                        </div>
                    </div>

                    <div className='w-full'>
                        <label className='block mb-2 text-lg'>Job Description</label>
                        <textarea {...register("description")} rows={6} placeholder='Description' className='w-full pl-3 py-1.4 focus:outline-none py-4' />
                    </div>

                    <div className='w-full'>
                        <label className='block mb-2 text-lg'>Job Posted By</label>
                        <input type="email" placeholder="Ex: mail@mail.com " {...register("postedBy")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 focus:ring-2 ring-blue rounded-sm' />
                    </div>
                    <input type="submit" className='mt-12 block bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer ' />
                </form>
            </div>
        </div>
    )
}
