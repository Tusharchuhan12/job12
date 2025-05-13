import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';


function JobCard({ job = {} }) {
    const navigate = useNavigate();
    // Provide default values for all job properties
    const {
        title = "Job Title Not Available",
        location = "Location Not Specified",
        level = "Level Not Specified",
        description = "No description available"
    } = job;

    // Safely handle description (check if it exists and is a string before slicing)
    const safeDescription = typeof description === 'string'
        ? description.slice(0, 150)
        : description;

    return (
        <div className='border p-6 shadow rounded-xs'>
            <div className='flex justify-between items-center'>
                <img
                    className='h-8'
                    src={assets.company_icon}
                    alt="Company logo"
                />
            </div>

            <h4 className='font-medium text-xl mt-2'>{title}</h4>

            <div className='flex items-center gap-3 mt-2 text-xs'>
                <span className='bg-blue-50 border-blue-200 px-4 py-1.5 rounded'>
                    {location}
                </span>
                <span className='bg-red-50 border-red-200 px-4 py-1.5 rounded'>
                    {level}
                </span>
            </div>

            <p className="text-gray-500 text-sm mt-4">
                {safeDescription}
            </p>

            <div className='mt-4 flex gap-4 text-sm'>
                <button onClick={() => { navigate(`/applyjob/${job._id}`);scrollTo(0,0)}} className='bg-blue-600 text-white px-4 py-2 rounded-xl'>
                    Apply now
                </button>
                <button onClick={() => { navigate(`/applyjob/${job._id}`) }} className='border border-gray-500 text-gray-500 px-4 py-2 rounded-xl'>
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default JobCard;