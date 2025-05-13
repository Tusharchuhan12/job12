import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { assets, JobCategories, JobLocations } from '../assets/assets';
import JobCard from './JobCard';

function Joblisting() {
    const { isSearch, searchFilter, setserchFilter, jobs } = useContext(AppContext);
    const [showfilter, setshowfilter] = useState(false);
    const [Currentpage, setCurrentpage] = useState(1);
    const [selectedCategories, setselectedCategories] = useState([]);
    const [selectedLocation, setselectedLocation] = useState([]);
    const [filterdjobs, Setfilterdjobs] = useState(jobs); 

    const handleCategoryChange = (category) => {
        setselectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const handleLocationChange = (location) => {
        setselectedLocation(prev =>
            prev.includes(location)
                ? prev.filter(l => l !== location)
                : [...prev, location]
        );
    };

    useEffect(() => {
        const matchesCategory = job =>
            selectedCategories.length === 0 ||
            selectedCategories.includes(job.category);

        const matchesLocation = job =>
            selectedLocation.length === 0 ||
            selectedLocation.includes(job.location);

        const matchesTitle = job =>
            searchFilter.title === "" ||
            job.title.toLowerCase().includes(searchFilter.title.toLowerCase());

        const matchesSearchLocation = job =>
            searchFilter.location === "" ||
            job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

        const newFilteredJobs = jobs.slice().reverse().filter(
            job => matchesCategory(job) &&
                matchesLocation(job) &&
                matchesTitle(job) &&
                matchesSearchLocation(job)
        );
        Setfilterdjobs(newFilteredJobs);
        setCurrentpage(1);
    }, [jobs, selectedCategories, selectedLocation, searchFilter]);

    return (
        <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8'>
            {/* Sidebar */}
            <div className='w-full lg:w-1/4 bg-white px-4'>
                {/* Search Filter From Hero */}
                {isSearch && (searchFilter.title !== "" || searchFilter.location !== "") && (
                    <h3 className='font-medium text-lg mb-4'>Current Search</h3>
                )}
                <div className='mb-4 text-gray-600'>
                    {searchFilter.title && (
                        <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
                            {searchFilter.title}
                            <img
                                onClick={() => setserchFilter(prev => ({ ...prev, title: "" }))}
                                src={assets.cross_icon}
                                alt="Clear title"
                            />
                        </span>
                    )}
                    {searchFilter.location && (
                        <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
                            {searchFilter.location}
                            <img
                                onClick={() => setserchFilter(prev => ({ ...prev, location: "" }))}
                                src={assets.cross_icon}
                                alt="Clear location"
                            />
                        </span>
                    )}

                    <button
                        onClick={() => setshowfilter(prev => !prev)}
                        className='px-6 py-1.5 rounded border border-gray-400 lg:hidden'
                    >
                        {showfilter ? "Close" : "Filters"}
                    </button>

                    {/* Category filter */}
                    <div className={showfilter ? "" : "max-lg:hidden"}>
                        <h4 className='font-medium text-lg py-4'>Search by Category</h4>
                        <ul className='space-y-4 text-gray-600'>
                            {JobCategories.map((category, index) => (
                                <li className="flex gap-3 items-center" key={index}>
                                    <input
                                        className="scale-125"
                                        type="checkbox"
                                        onChange={() => handleCategoryChange(category)}
                                        checked={selectedCategories.includes(category)}
                                    />
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Location filter */}
                    <div className={showfilter ? "mt-6" : "max-lg:hidden"}>
                        <h4 className='font-medium text-lg py-4'>Search by Location</h4>
                        <ul className='space-y-4 text-gray-600'>
                            {JobLocations.map((location, index) => (
                                <li className="flex gap-3 items-center" key={index}>
                                    <input
                                        className="scale-125"
                                        type="checkbox"
                                        onChange={() => handleLocationChange(location)}
                                        checked={selectedLocation.includes(location)}
                                    />
                                    {location}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Job Listing */}
            <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'>
                <h3 className='font-medium text-3xl py-2' id='job-list'>Latest Jobs</h3>
                <p className='mb-8'>Get Your desired job from top companies</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
                    {filterdjobs.slice((Currentpage - 1) * 6, Currentpage * 6).map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>

                {/* Pagination */}
                {filterdjobs.length > 0 && (
                    <div className='flex items-center justify-center space-x-2 mt-10'>
                        <button
                            onClick={() => setCurrentpage(Math.max(Currentpage - 1, 1))}
                            className='p-2'
                        >
                            <img src={assets.left_arrow_icon} alt="Previous page" />
                        </button>

                        {Array.from({ length: Math.ceil(filterdjobs.length / 6) }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentpage(index + 1)}
                                className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${Currentpage === index + 1 ? 'bg-blue-100 text-blue-500' : 'text-gray-500'
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentpage(Math.min(Currentpage + 1, Math.ceil(filterdjobs.length / 6)))}
                            className='p-2'
                        >
                            <img src={assets.right_arrow_icon} alt="Next page" />
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}

export default Joblisting;