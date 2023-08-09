import { Buttonv2, Buttonv3 } from '@components';
import React from 'react';
import logo from '@assets/logo_angle.webp';
import Image from 'next/image';



const BuildStyleProfile = () => {
  return (
    <div className='h-screen w-full bg-primary_orange'>
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <Image className='w-1/4 mb-3' src={logo} alt='testing' width={450} height={295} />
        <h2 className='text-white sec_title mb-2'>Build Style Profile</h2>
        <p className='text-white sec_desc text-center mb-5'>In this style profile we ask for your preferences on brands, item types and <br />colours to help us learn more about you and your individual style.
        </p>
        <div className='mt-10'>
          <Buttonv3 type='submit' css='mb-3 w-full lg:w-72' to='/auth/login'>Get Started</Buttonv3>
          <Buttonv2 type='submit' css='w-72' to='/auth/signup'>How it Works</Buttonv2>
        </div>
      </div>
    </div>)
}

export default BuildStyleProfile;