import React from 'react'
import bg from '@assets/login_landing.png'
import Image from 'next/image';
import Buttonv1 from '@components/Button.v1';
import Buttonv2 from '@components/Button.v2';

const Auth: React.FC = () => {


    return (
        <section className='min-h-screen'>
            <div className='relative h-screen max-h-screen w-full'>
                <Image className='-z-10 object-cover content-center' src={bg} alt='testing' fill />
                <div className='flex flex-col justify-center items-center min-h-screen'>
                    <h2 className='text-white sec_title mb-2'>Welcome to 925</h2>
                    <p className='text-white sec_desc text-center mb-5'>As a member of the 925 community you’ll enjoy a personalized <br />stylist at your fingertips, ready to curate a 5-piece outfit just for you.
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

export default Auth;