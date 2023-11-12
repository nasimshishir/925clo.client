import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TfiAngleLeft } from 'react-icons/tfi'
import Logo from "@assets/logo.png";


function AuthHeader() {
    return (
        <div className='absolute text-white w-full lg:w-1/2 bg-primary_orange z-50'>
            <nav className='relative h-auto'>
                <div className='absolute flex justify-center md:justify-between items-center py-4 md:py-3 px-6 w-full'>
                    <div className=''>
                        <Link className='' href='/'>
                            <Image className='px-2 hidden md:block' src={Logo} width={100} height={42} alt='925clo_logo' />
                            <Image className='px-2 md:hidden' src={Logo} width={76.2} height={32} alt='925clo_logo' />
                        </Link>
                    </div>

                    <div className='hidden md:block'>
                        <Link href='/how_it_works'>
                            <span className='text-xs tracking-[0.6px] px-6 py-2 rounded-[13px] uppercase hover:bg-white/10 cursor-pointer'>How it Works</span>
                        </Link>
                    </div>
                </div>
                <div className='absolute py-5 px-6 ps-6 sm:ps-10 md:hidden'>
                    <div className='flex items-center h-full'>
                        <><TfiAngleLeft className='cursor-pointer' size={12} /><span className='cursor-pointer uppercase text-xs font-thin'>Back</span></>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AuthHeader