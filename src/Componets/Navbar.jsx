import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

function Navbar() {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const { setshowRecuiterLogin } = useContext(AppContext);

  return (
    <div className="shadow py-4 w-full">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center flex-wrap">
        {/* Logo */}
        <img
          onClick={() => navigate('/')}
          src={assets.logo}
          alt="Job Portal Logo"
          className="h-10 w-auto cursor-pointer"
        />

        {/* Dashboard Button */}
        <button
          className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full cursor-pointer text-sm sm:text-base mt-2 sm:mt-0"
          onClick={() => navigate('/dashborad')}
        >
          Dashboard
        </button>

        {/* Auth & User Info */}
        <div className="flex items-center gap-4 mt-4 sm:mt-0 flex-wrap text-sm sm:text-base">
          {user ? (
            <div className="flex items-center gap-3 flex-wrap">
              <Link to="/applications" className="hover:underline">
                Applied Jobs
              </Link>
              <p className="hidden sm:block">Hi, {user.firstName} {user.lastName}</p>
              <UserButton />
            </div>
          ) : (
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => setshowRecuiterLogin(true)}
                className="text-blue-600 underline"
              >
                Recruiter Login
              </button>
              <button
                onClick={() => openSignIn()}
                className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
