'use client'
import React from 'react'
import logo from '@assets/logo_email.svg'
import Image from 'next/image';
import Buttonv1 from '@components/Buttons/Button.v1';
import Buttonv2 from '@components/Buttons/Button.v2';
import WhiteLogo from './Lotties/WhiteLogo';

const Herov1 = () => {






    return (
        <div className='bg-cover bg-auth_bg_m lg:bg-landing_bg'>

            <div className='flex flex-col justify-center items-center h-screen'>
                {/* <Image className='object-contain' src={logo} alt='testing' width={350} height={0} /> */}
                <WhiteLogo />
                <h2 className='text-white sec_title mb-2'>Hey, Clementine Smith</h2>
                <p className='text-white sec_desc text-center mb-5'>In this style profile we ask for your preferences on brands, item types and colours <br className='hidden lg:block' /> to help us learn more about you and your individual style.
                </p>
                <div className='block lg:flex gap-4 mt-10'>
                    <Buttonv1 type='submit' css='mb-3 w-72 lg:w-60 py-3 lg:py-4' to='/auth/login'>{'Generate Outfit'}</Buttonv1>
                    <Buttonv2 type='submit' css='w-72 lg:w-60 py-3 lg:py-4' to='/auth/signup'>{'Your Style Profile'}</Buttonv2>
                </div>
            </div>
        </div>
    )
}

export default Herov1;