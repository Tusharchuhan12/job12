import React from 'react'
import Navbar from '../Componets/Navbar'
import { useState } from 'react'
import { assets, jobsApplied } from '../assets/assets'
import Footer from '../Componets/Footer'
function Application() {

  const [isEdit,setisEdit]=useState(false)
  const [resume, setresume] =useState(null)
  return (
    <>
    <Navbar></Navbar>
      <div className='container px-4 min-h-[65vh] 2xl:px:20 mx-auto my-10'>
      <h2 className='text-xl font-semibold'> Your Resume</h2>
      <div className='flex gap-2 mb-6 mt-3' >
            {isEdit ?
            <>
              <label className='flex items-center' htmlFor='resumeUpload'>
          <p className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2'>Select Resume</p>
          <input id='resumeUpload' onChange={e=>setresume(e.target.files[0])} accept="Application/pdf" type='file'hidden />
          <img src={assets.profile_upload_icon} alt="" />
         </label>
         <button onClick={e=>setisEdit(false)} className='bg-green-100 border border-green-400 rounded-lg px-4 py-2'> Save</button>
            </>
            :<div className='flex gap-2'>
              <a className='bg-blue-100 text-blue-500 px-4 py-2 rounded-lg' href=''>
                Resume
              </a>
              <button onClick={()=>setisEdit(true)} className='text-gray-400 border border-gray-300 rounded-lg px-4 py-2'>Edit</button>
              </div>}
      </div>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Jobs Applied</h2>
        <div className='bg-white rounded-xl shadow-sm overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider'>Company</th>
                  <th className='py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider'>Job Title</th>
                  <th className='py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell'>Location</th>
                  <th className='py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider'>Date</th>
                  <th className='py-4 px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider'>Status</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {jobsApplied.map((job, index) => (
                  <tr key={index} className='hover:bg-gray-50 transition-colors'>
                    <td className='py-4 px-6 whitespace-nowrap'>
                      <div className='flex items-center'>
                        <img className='w-10 h-10 rounded-full object-cover mr-3 border border-gray-200' src={job.logo} alt={job.company} />
                        <span className='font-medium text-gray-900'>{job.company}</span>
                      </div>
                    </td>
                    <td className='py-4 px-6 text-gray-900'>{job.title}</td>
                    <td className='py-4 px-6 text-gray-900 hidden sm:table-cell'>{job.location}</td>
                    <td className='py-4 px-6 text-gray-900'>{job.date}</td>
                    <td className='py-4 px-6'>
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${job.status === 'Accepted' ? 'bg-green-100 text-green-800' :
                          job.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                            'bg-blue-100 text-blue-800'
                        }`}>
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div> 
    <Footer></Footer>
    </>
  )
}

export default Application
