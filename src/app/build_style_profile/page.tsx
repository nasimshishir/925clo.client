import { Buttonv2, Buttonv3, Headerv1 } from '@components';
import React from 'react';
import logo from '@assets/logo_angle.webp';
import Image from 'next/image';



const BuildStyleProfile = () => {
  return (
    <>
      <Headerv1 />
      <div className='grid items-center min-h-screen h-screen w-full bg-primary_orange px-10 lg:px0'>
        <div className='mx-auto grid'>
          <div className='w-4/5 mb-5 mx-auto'>
            <Image className='w-full object-cover' src={logo} alt='testing' width={450} height={295} />
          </div>
          <h2 className='text-white sec_title mb-2 text-center'>Build Style Profile</h2>
          <p className='text-white sec_desc text-center mb-5'>In this style profile we ask for your preferences on brands, item types and <br />colours to help us learn more about you and your individual style.
          </p>
        </div>
        <div className='mx-auto mt-10'>
          <Buttonv3 type='submit' css='mb-3 w-72 py-3' to='/auth/login'>Get Started</Buttonv3>
          <Buttonv2 type='submit' css='w-72 py-3' to='/auth/signup'>How it Works</Buttonv2>
        </div>
      </div>
    </>
  )
}

export default BuildStyleProfile;