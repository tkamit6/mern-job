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

  // filter jobs by title
  const filteredItems = jobs.filter((job) =>
    job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  )

  // radio button base filtering
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  }

  //button base filtering
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  }

  //calculate the idex range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endPage = startIndex + itemPerPage;
    return { startIndex, endPage };
  }

  //function for next page
  // const nextPage = () => {
  //   if (currentPage < Math.ceil(filteredItems.length / itemPerPage)) {
  //     setCurrentPage(currentPage + 1)
  //   }
  // }

  //function for prev page
  // const prevPage = () => {
  //   if (currentPage > 1)
  //     setCurrentPage(currentPage - 1);
  // }

  // main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    // filtering input item
    if (query) {
      filteredJobs = filteredItems;
    }



    // category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate }) => {
        postingDate >= selected
      })
    }

    // const { startIndex, endPage } = calculatePageRange();
    // filteredJobs = filteredJobs.slice(startIndex, endPage);

    return filteredJobs.map((data, i) =>
      <Card key={i} data={data} />
    )

  }

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
