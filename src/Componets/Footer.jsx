import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
   
    return (
        <footer className="bg-gray-50 border-t border-gray-200 max-w-[90%] mx-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo and Copyright */}
                    <div className="flex items-center gap-4">
                        <img
                            src={assets.logo}
                            alt="Insiderjobs Logo"
                            className="h-8 w-auto"
                        />
                        <p className="text-sm text-gray-600">
                            &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6">
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="text-gray-500 hover:text-blue-600 transition-colors"
                        >
                            <img
                                src={assets.facebook_icon}
                                alt="Facebook"
                                className="h-7 w-7"
                            />
                        </a>
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="text-gray-500 hover:text-pink-600 transition-colors"
                        >
                            <img
                                src={assets.instagram_icon}
                                alt="Instagram"
                                className="h-7 w-7"
                            />
                        </a>
                        <a
                            href="#"
                            aria-label="Twitter"
                            className="text-gray-500 hover:text-blue-400 transition-colors"
                        >
                            <img
                                src={assets.twitter_icon}
                                alt="Twitter"
                                className="h-7 w-7"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer