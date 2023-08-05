'use client'
import React from 'react'
import bg from '@assets/login_landing.png'
import Image from 'next/image';
import Buttonv1 from '@components/Button.v1';
import Buttonv2 from '@components/Button.v2';

const Herov1: React.FC = () => {






    return (
        <section className='min-h-screen absolute w-full bg-cover bg-center' style={{ backgroundImage: 'url(https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg)' }}>
            <div className='relative h-screen max-h-screen w-full'>
                {/* <Image className='-z-10 object-cover content-center' src={bg} alt='testing' fill /> */}
                <div className='flex flex-col justify-center items-center min-h-screen'>
                    <h2 className='text-white sec_title mb-2'>Build Style Profile</h2>
                    <p className='text-white sec_desc text-center mb-5'>In this style profile we ask for your preferences on brands, item types and colours to help us learn more about you and your individual style.
                    </p>
                    <div className='mt-10'>
                        <Buttonv1 type='submit' css='mb-3' to='/auth/login'>Log in</Buttonv1>
                        <Buttonv2 type='submit' to='/auth/signup'>Sign Up</Buttonv2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herov1;