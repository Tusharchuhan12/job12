import React from 'react'

import { assets } from '../assets/assets';
function AppDwonlod() {
  return (
    <>
    <div className='container px-4 2xl:px-20 mx-auto my-20 sm:flex justify-center bg-blue-300 mt-10 max-w-[85%]'>
      <div>
            <h1 className='text-2xl sm:text-4xl font-bold mb-8 max-w-md mt-10 '> downlod Mobile App for Better Experince</h1>
            <div className='flex gap-4'>
              <a href='#' className='inline-block'>
                <img className="h-12"src={assets.play_store} alt="" />
              </a>
             <a href='#' className='inline-block'>
              <img className="h-12" src={assets.app_store} alt="" />
              </a>
            </div>

      </div>
      <img  className=""src={assets.app_main_img} alt="" />
    </div>
    </>
  )
}

export default AppDwonlod
