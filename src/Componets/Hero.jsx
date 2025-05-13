import React, { useContext, useRef } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../Context/AppContext';

function Hero() {
    

    const { setserchFilter, setisSearch } = useContext(AppContext);
    const titleRef = useRef(null)
    const LocationRef = useRef(null)

    const onserach = () => {
        setserchFilter({
            title: titleRef.current.value,
            location: LocationRef.current.value,

        })
        setisSearch("")
        setisSearch(true)
        console.log({
            title: titleRef.current.value,
            location: LocationRef.current.value
        })
    }

    return (
        <>
            <div className="relative overflow-hidden mt-9 w-[90%] mx-auto  ">
                {/* Background with gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-700 opacity-95"></div>

                {/* Content container */}
                <div className="relative max-w-7xl mx-auto px-4  sm:px-6 lg:px-5 py-18 md:py-30 ">
                    <div className="text-center">
                        {/* Main heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
                            Over <span className="text-yellow-300">10,000+</span> jobs waiting for you
                        </h1>

                        {/* Subheading */}
                        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-purple-100 mb-10">
                            Your dream career starts here - Explore top opportunities and take the next step today!
                        </p>

                        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="flex flex-col sm:flex-row">
                                <div className="flex-1 p-1">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <img src={assets.search_icon} alt="" />
                                        </div>
                                        <input
                                            type="text"
                                            ref={titleRef}
                                            placeholder="Search job"
                                            className="block w-full pl-10 pr-3 py-4 border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 p-1 border-t sm:border-t-0 sm:border-l border-gray-200">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center   pointer-events-none">
                                            <img src={assets.location_icon} alt="" />
                                        </div>
                                        <input
                                            type="text"
                                            ref={LocationRef}
                                            placeholder="Location or remote"
                                            className="block w-full pl-10 pr-3 py-4 border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="p-1">
                                    <button onClick={onserach} className="w-full h-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold py-4 px-6 rounded-r-lg sm:rounded-l-none transition-all duration-200 transform hover:scale-105  focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 outline-none">
                                        Search Jobs

                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
            <div className=' w-[90%] mx-auto border border-gray-300 shadow-md  mt-5 p-6 flex justify-center flex-wrap gap-10 lg:gap-16'>
                <p className='font-medium'>Trusted By</p>
                <img className="h-6" src={assets.microsoft_logo} alt="" />
                <img className="h-6" src={assets.walmart_logo} alt="" />
                <img className="h-6" src={assets.accenture_logo} alt="" />
                <img className="h-6" src={assets.samsung_logo} alt="" />
                <img className="h-6" src={assets.amazon_logo} alt="" />
                <img className="h-6" src={assets.adobe_logo} alt="" />

            </div>
        </>
    );
}

export default Hero;