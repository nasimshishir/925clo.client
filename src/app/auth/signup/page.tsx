import Image from 'next/image';
import React from 'react'
import { TfiAngleLeft } from 'react-icons/tfi'
import Link from 'next/link';
import SignUpForm from '@components/SignUpForm';
import Logo from "@assets/logo.png";
import { AuthHeader } from '@components';


const SignUpPage = () => {

    return (
        <section className='min-h-screen sm:max-h-screen overflow-hidden'>

            {/* Header ==================================== */}
            <AuthHeader />

            {/* Body ============================================ */}
            <div className='min-h-screen flex md:flex-col-reverse lg:flex-row'>
                <div className='flex-1 bg-primary_orange h-full text-white'>
                    <div className='grid min-h-screen ps-6 sm:ps-10 lg:ps-[8rem] pe-6 sm:pe-10 lg:pe-[13rem] pb-5 sm:pb-0'>
                        <div className='my-auto pt-16 md:pt-0'>
                            <div className='flex justify-between items-baseline'>
                                <h2 className='text-white sec_title'>Sign Up</h2>
                                <p className='hidden lg:block text-xs uppercase font-thin'>Already have an account? <Link href='/auth/login' className='font-medium underline'>Log In</Link></p>
                            </div>
                            <div className='mt-3'>
                                <p className='sec_desc'>Join our exclusive community and unlock the world of luxury fashion. <br className='hidden md:block' /> Simply provide us with a few details to get started.</p>
                            </div>

                            {/* form container */}
                            <div className='mt-[3rem]'>
                                <SignUpForm />
                            </div>
                            <div className='flex items-center mt-2'>
                                <><TfiAngleLeft className='cursor-pointer hidden lg:block' size={12} /><span className='cursor-pointer uppercase text-xs font-thin  hidden lg:block'>Back</span></>
                                <p className='uppercase text-xs font-thin grow lg:text-center'>Step 0/2 Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block flex-1 relative bg-signup_bg bg-cover bg-bottom bg-no-repeat'>
                </div>
            </div>
        </section>
    )
}

export default SignUpPage;