'use client'
import React from 'react'
import logo from '@assets/logo_email.svg'
import Image from 'next/image';
import Buttonv1 from '@components/Button.v1';
import Buttonv2 from '@components/Button.v2';

const Herov1: React.FC = () => {






    return (
        <div className='bg-cover bg-center' style={{ backgroundImage: 'url(/img/landing_bg.webp)' }}>
            <div className='flex flex-col justify-center items-center h-screen'>
                <Image className='object-contain' src={logo} alt='testing' width={350} height={0} />
                <h2 className='text-white sec_title mb-2'>Hey, Clementine Smith</h2>
                <p className='text-white sec_desc text-center mb-5'>In this style profile we ask for your preferences on brands, item types and colours <br /> to help us learn more about you and your individual style.
                </p>
                <div className='block lg:flex gap-4 mt-10'>
                    <Buttonv1 type='submit' css='mb-3' to='/auth/login'>Log in</Buttonv1>
                    <Buttonv2 type='submit' to='/auth/signup'>Sign Up</Buttonv2>
                </div>
            </div>
        </div>
    )
}

export default Herov1;