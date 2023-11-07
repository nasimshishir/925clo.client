import React from 'react'
import { Buttonv1, Buttonv2 } from '@components';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@assets/logo.png";
import { PageProps } from '../../../.next/types/app/auth/page';




const Auth = (pageProps: PageProps) => {


    return (
        <div className='w-full min-h-screen max-h-screen bg-cover' style={{ backgroundImage: 'url(/img/login_landing.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'left' }}>
            {/* Header ====================================== */}
            <div className='absolute text-white w-full'>
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
            {/* Auth Body ================================================ */}
            <div className='flex flex-col justify-end lg:justify-center items-center h-screen' >
                <h2 className='text-white sec_title mb-2'>Welcome to 925</h2>
                <p className='text-white sec_desc text-center mb-5 w-3/4 lg:w-full'>As a member of the 925 community you’ll enjoy a personalized <br className='hidden lg:block' />stylist at your fingertips, ready to curate a 5-piece outfit just for you.
                </p>
                <div className='mt-[3.125rem] mb-20 md:mb-0'>
                    <Buttonv1 type='submit' css='mb-4 lg:mb-5 w-[20rem] lg:w-[25.6rem] h-[3rem] lg:h-[4.3125rem]' to='/auth/login'>Log in</Buttonv1>
                    <Buttonv2 type='submit' css='w-[20rem] lg:w-[25.6rem] h-[3rem] lg:h-[4.3125rem]' to='/auth/signup'>Sign Up</Buttonv2>
                </div>
            </div>
        </div>
    )
}

export default Auth;
