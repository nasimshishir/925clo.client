import React from 'react'
import { Buttonv1, Buttonv2 } from '@components';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@assets/logo.png";
import { PageProps } from '../../../.next/types/app/auth/page';




const Auth = (pageProps: PageProps) => {


    return (
        <div className='w-full min-h-screen' style={{ backgroundImage: 'url(/img/login_landing.png)' }}>
            <div className='absolute text-white w-full'>
                <nav className='flex justify-between items-center py-2 px-6'>
                    <div className=''>
                        <Link className='' href='/'><Image className='px-2' src={Logo} width={70} height={29} alt='925clo_logo' /></Link>
                    </div>

                    <div className=''>
                        <Link href='/how_it_works'>
                            <span className='text-xs tracking-[0.6px] px-6 py-2 rounded-[13px] uppercase hover:bg-white/10 cursor-pointer'>How it Works</span>
                        </Link>
                    </div>
                </nav>
            </div>
            <div className='flex flex-col justify-center items-center h-screen' >
                <h2 className='text-white sec_title mb-2'>Welcome to 925</h2>
                <p className='text-white sec_desc text-center mb-5'>As a member of the 925 community you’ll enjoy a personalized <br />stylist at your fingertips, ready to curate a 5-piece outfit just for you.
                </p>
                <div className='mt-10'>
                    <Buttonv1 type='submit' css='mb-3 w-72 py-3 lg:py-3' to='/auth/login'>Log in</Buttonv1>
                    <Buttonv2 type='submit' css='w-72 py-3 lg:py-3' to='/auth/signup'>Sign Up</Buttonv2>
                </div>
            </div>
        </div>
    )
}

export default Auth;