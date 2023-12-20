import React, { useEffect, useState } from 'react'
import Banner from '../component/Banner'
import Card from '../component/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';
import Newsletter from '../component/Newsletter';

export default function Home() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState();
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch('https://mern-job-api.vercel.app/all-jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data)
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, [])

  // console.log(jobs)

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = [...jobs]; // Create a copy of the jobs array
  
    // Filtering by job title if a search query is provided
    if (query) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(query.toLowerCase())
      );
    }
  
    // Category-based filtering based on selected criteria
    if (selected) {
      filteredJobs = filteredJobs.filter((job) => {
        // Check each selected criteria and filter accordingly
        const isLocationMatch = selected.jobLocation ? job.jobLocation === selected.jobLocation : true;
        const isMaxPriceMatch = selected.maxPrice ? job.maxPrice <= selected.maxPrice : true;
        const isExperienceLevelMatch = selected.experienceLevel ? job.experienceLevel === selected.experienceLevel : true;
        const isSalaryTypeMatch = selected.salaryType ? job.salaryType === selected.salaryType : true;
        const isEmploymentTypeMatch = selected.employmentType ? job.employmentType === selected.employmentType : true;
        const isPostingDateMatch = selected.postingDate ? new Date(job.postingDate) >= new Date(selected.postingDate) : true;
  
        // Return true if all conditions are met
        return (
          isLocationMatch &&
          isMaxPriceMatch &&
          isExperienceLevelMatch &&
          isSalaryTypeMatch &&
          isEmploymentTypeMatch &&
          isPostingDateMatch
        );
      });
    }
  
    // Implement pagination logic if needed
    // const { startIndex, endPage } = calculatePageRange();
    // filteredJobs = filteredJobs.slice(startIndex, endPage);
  
    return filteredJobs;
  };
  

  const result = filteredData(jobs, selectedCategory, query);


  return (
    <div className=''>
      <Banner query={query} handleInputChange={handleInputChange} />


      <div className='max-w-screen-2xl mx-auto bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12 '>
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick} /></div>
        <div className='col-span-2 bg-white p-4 rounded-sm'>
          {
            isLoading ? (<p>Loading...</p>) : result.length > 0 ? (<Jobs result={result} />) : <p className='font-semibold'>{result.length} Jobs</p>
          }

          {/* pagination */}
          {/* {
            result.length > 0 ? (
              <div className='flex justify-center mt-4 space-x-8'>
                <button>Previous</button>
                <span>Page {currentPage} of {Math.ceil(filteredItems.length / itemPerPage)} </span>
                <button>Next</button>
              </div>
            ) : ''
          } */}
        </div>
        <div className='bg-white p-4 rounded'>
          <Newsletter />
        </div>
      </div>
    </div>
  )
}
