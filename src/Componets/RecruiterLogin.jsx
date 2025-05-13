import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../Context/AppContext'

function RecruiterLogin() {
    const [state, setState] = useState('Login') // Changed to camelCase
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null) // Changed initial state to null
    const [isTextDataSubmit, setIsTextDataSubmit] = useState(false)
    const { setshowRecuiterLogin }=useContext(AppContext) 

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if (state === "Sign Up" && !isTextDataSubmit) {
            setIsTextDataSubmit(true)
            return
        }

        // Handle form submission logic here
        console.log({
            state,
            name,
            email,
            password,
            image
        })

        // You would typically make an API call here
        // await submitForm({ name, email, password, image });
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset' // Fixed typo ('unsent' to 'unset')
        }
    }, [])

    return (
        <div className='fixed inset-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
            <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500 w-full max-w-md'>
                <h1 className='text-center text-2xl text-neutral-700 font-medium'>Recruiter {state}</h1>
                <p className='text-sm mt-2'>Welcome back! Please sign in to continue</p>

                {state === "Sign Up" && isTextDataSubmit ? (
                    <>
                        <div className='flex items-center gap-4 my-10'>
                            <label htmlFor="image" className='cursor-pointer'>
                                <img
                                    className='w-16 h-16 object-cover rounded-full'
                                    src={image ? URL.createObjectURL(image) : assets.upload_area}
                                    alt="Company logo"
                                />
                                <input
                                    onChange={e => setImage(e.target.files[0])}
                                    type="file"
                                    id='image'
                                    accept='image/*'
                                    hidden
                                />
                            </label>
                            <p>Upload Company <br />logo</p>
                        </div>
                    </>
                ) : (
                    <>
                        {state !== 'Login' && (
                            <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                                <img src={assets.email_icon} alt="" />
                                <input
                                    className='outline-none text-sm w-full'
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                    type="text"
                                    placeholder='Company Name'
                                    required
                                />
                            </div>
                        )}

                        <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                            <img src={assets.person_icon} alt="" />
                            <input
                                className='outline-none text-sm w-full'
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                placeholder='Email ID'
                                required
                            />
                        </div>

                        <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                            <img src={assets.lock_icon} alt="" />
                            <input
                                className='outline-none text-sm w-full'
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                placeholder='Password'
                                required
                                minLength={8}
                            />
                        </div>
                    </>
                )}

                {state === "Login" && (
                    <p className='text-sm text-blue-600 cursor-pointer my-4 hover:underline'>
                        Forgot Password
                    </p>
                )}

                <button
                    type='submit'
                    className=  'bg-blue-600 w-full text-white py-2 rounded-full mt-3 hover:bg-blue-700 transition-colors'
                >
                    {state === 'Login' ? 'Login' : isTextDataSubmit ? 'Create Account' : 'Next'}
                </button>

                {state === 'Login' ? (
                    <p className='mt-5 text-center'>
                        Don't have an account?{' '}
                        <span
                            className='text-blue-600 cursor-pointer hover:underline'
                            onClick={() => {
                                setState("Sign Up")
                                setIsTextDataSubmit(false)
                            }}
                        >
                            Sign Up
                        </span>
                    </p>
                ) : (
                    <p className='mt-5 text-center'>
                        Already have an account?{' '}
                        <span
                            className='text-blue-600 cursor-pointer hover:underline'
                            onClick={() => {
                                setState("Login")
                                setIsTextDataSubmit(false)
                            }}
                        >
                            Login
                        </span>
                    </p>
                )}

                <img
                    onClick={() =>setshowRecuiterLogin(false)}
                    className='absolute top-5 right-5 w-5 h-5 cursor-pointer'
                    src={assets.cross_icon}
                    alt="Close"
                />
            </form>
        </div>
    )
}

export default RecruiterLogin