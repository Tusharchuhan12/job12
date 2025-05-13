import React, { useState } from 'react';
import { assets, viewApplicationsPageData } from '../assets/assets';

function ViewApplication() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Close dropdown when clicking outside
  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <div className='container mx-auto p-2 sm:p-4' onClick={closeAllDropdowns}>
      <h1 className='text-xl sm:text-2xl font-bold mb-4 sm:mb-6'>Applications</h1>
      <div className='overflow-x-auto bg-white rounded-lg shadow'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>#</th>
              <th className='px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>User</th>
              <th className='hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Job Title</th>
              <th className='hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Location</th>
              <th className='px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Resume</th>
              <th className='px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Action</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {viewApplicationsPageData.map((applicant, index) => (
              <tr key={index} className='hover:bg-gray-50'>
                <td className='px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-gray-500'>{index + 1}</td>
                <td className='px-3 sm:px-6 py-3 whitespace-nowrap'>
                  <div className='flex items-center'>
                    {applicant.imgSrc && (
                      <img
                        src={applicant.imgSrc}
                        alt={applicant.name}
                        className='w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2 sm:mr-3 object-cover'
                      />
                    )}
                    <div>
                      <span className='text-xs sm:text-sm font-medium text-gray-900 block'>{applicant.name}</span>
                      <span className='sm:hidden text-xs text-gray-500 block'>{applicant.jobTitle}</span>
                    </div>
                  </div>
                </td>
                <td className='hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                  {applicant.jobTitle}
                </td>
                <td className='hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                  {applicant.location}
                </td>
                <td className='px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800'>
                  <a
                    href={applicant.resumeUrl || '#'}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center hover:underline'
                  >
                    <span className='hidden xs:inline'>Resume</span>
                    <img src={assets.resume_download_icon} alt="Download" className='ml-1 w-3 h-3 sm:w-4 sm:h-4' />
                  </a>
                </td>
                <td className='px-3 sm:px-6 py-3 whitespace-nowrap text-right text-sm font-medium relative'>
                  <div className='relative inline-block text-left'>
                    <button
                      type='button'
                      className='inline-flex justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none'
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(index);
                      }}
                    >
                      <span className='sr-only'>Open options</span>
                      <svg className='w-4 h-4 sm:w-5 sm:h-5' fill='currentColor' viewBox='0 0 20 20'>
                        <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                      </svg>
                    </button>

                    {activeDropdown === index && (
                      <div className='origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10'>
                        <div className='py-1'>
                          <button
                            className='block w-full text-left px-4 py-2 text-xs sm:text-sm text-green-600 hover:bg-gray-100'
                          >
                            Accept
                          </button>
                          <button
                            className='block w-full text-left px-4 py-2 text-xs sm:text-sm text-red-600 hover:bg-gray-100'
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewApplication;