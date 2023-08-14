import Image from 'next/image';
import React from 'react'
import signupImg from '@assets/signup_img.jpg'
import { TfiAngleLeft } from 'react-icons/tfi'
import Link from 'next/link';
import SignUpForm from '@components/SignUpForm';





const SignUpPage: React.FC = () => {



    return (
        <section className='min-h-screen overflow-hidden'>
            <div className='max-h-screen h-screen grid grid-cols-2'>
                <div className='col-span-2 lg:col-span-1 bg-secondary_orange h-full text-white'>
                    <div className='grid h-screen ps-10 lg:ps-20 pe-10 lg:pe-32'>
                        <div className='my-auto'>
                            <div className='flex items-center mb-8 lg:hidden'>
                                <TfiAngleLeft className='cursor-pointer' size={12} /><span className='cursor-pointer uppercase text-xs font-thin'>Back</span>
                                <p className='hidden lg:block uppercase text-xs font-thin grow text-center'>Step 0/2 Completed</p>
                            </div>
                            <div className='flex justify-between items-baseline'>
                                <h2 className='text-white sec_title'>Sign Up</h2>
                                <p className='hidden lg:block text-xs uppercase font-thin'>Already have an account? <Link href='/auth/login' className='font-medium underline'>Log In</Link></p>
                            </div>
                            <div className='mt-3'>
                                <p className='sec_desc'>Join our exclusive community and unlock the world of luxury fashion.</p>
                                <p className='sec_desc'>Simply provide us with a few details to get started.</p>
                            </div>

                            {/* form container */}
                            <div className='mt-6'>
                                <SignUpForm />
                            </div>
                            <p className='mt-8 lg:hidden text-xs uppercase font-thin text-center'>Already have an account? <Link href='/auth/login' className='font-medium underline'>Log In</Link></p>
                            <div className='hidden lg:flex items-center mt-8'>
                                <><TfiAngleLeft className='cursor-pointer' size={12} /><span className='cursor-pointer uppercase text-xs font-thin'>Back</span></>
                                <p className='uppercase text-xs font-thin grow text-center'>Step 0/2 Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-1 relative'>
                    <Image src={signupImg} alt='signup Image' fill className='object-cover object-bottom' />
                </div>
            </div>
        </section>
    )
}

export default SignUpPage;