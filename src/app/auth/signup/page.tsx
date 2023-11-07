import Image from 'next/image';
import React from 'react'
import { TfiAngleLeft } from 'react-icons/tfi'
import Link from 'next/link';
import SignUpForm from '@components/SignUpForm';
import Logo from "@assets/logo.png";


const SignUpPage = () => {



    return (
        <section className='max-h-screen overflow-hidden'>
            {/* Header ========================================== */}

            <div className='hidden lg:block absolute text-white w-1/2'>
                <nav className='flex justify-center lg:justify-between items-center py-4 px-6'>
                    <div className=''>
                        <Link className='' href='/'><Image className='px-2' src={Logo} width={100} height={42} alt='925clo_logo' /></Link>
                    </div>

                    <div className='hidden lg:block'>
                        <Link href='/how_it_works'>
                            <span className='text-xs tracking-[0.6px] px-6 py-2 rounded-[13px] uppercase hover:bg-white/10 cursor-pointer'>How it Works</span>
                        </Link>
                    </div>
                </nav>
            </div>

            {/* Mobile Header ==================================== */}
            <div className='absolute lg:hidden text-white w-full'>
                <nav className='flex justify-center lg:justify-between items-center py-4 px-6'>
                    <div className=''>
                        <Link className='' href='/'><Image className='px-2' src={Logo} width={100} height={42} alt='925clo_logo' /></Link>
                    </div>

                    <div className='hidden lg:block'>
                        <Link href='/how_it_works'>
                            <span className='text-xs tracking-[0.6px] px-6 py-2 rounded-[13px] uppercase hover:bg-white/10 cursor-pointer'>How it Works</span>
                        </Link>
                    </div>
                </nav>
            </div>
            {/* Body ============================================ */}
            <div className='h-screen flex md:flex-col-reverse lg:flex-row'>
                <div className='flex-1 bg-primary_orange h-full text-white'>
                    <div className='grid h-screen ps-10 lg:ps-[8rem] pe-10 lg:pe-[13rem]'>
                        <div className='my-auto pt-5 lg:pt-0'>
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
                            <div className='flex items-center mt-8'>
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