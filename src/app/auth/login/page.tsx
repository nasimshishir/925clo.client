import LoginForm from '@components/LoginForm';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { TfiAngleLeft } from 'react-icons/tfi';
import loginImg from '@assets/login_img.jpg'
import { PageProps } from '../../../../.next/types/app/auth/login/page';

const LoginPage = ({ params, searchParams }: PageProps) => {

    console.log(params);
    console.log(searchParams);

    return (
        <section className='min-h-screen overflow-hidden'>
            <div className='max-h-screen h-screen grid grid-cols-2'>
                <div className='col-span-2 lg:col-span-1 bg-secondary_orange h-full text-white'>
                    <div className='grid h-screen ps-10 lg:ps-20 pe-10 lg:pe-32'>
                        <div className='my-auto'>
                            <div className='flex items-center mb-8 lg:hidden'>
                                <TfiAngleLeft size={12} /><span className='uppercase text-xs font-thin'>Back</span>
                                <p className='hidden lg:block uppercase text-xs font-thin grow text-center'>Step 0/2 Completed</p>
                            </div>
                            <div className='flex justify-between items-baseline'>
                                <h2 className='text-white sec_title'>Log in</h2>
                                <p className='hidden lg:block text-xs uppercase font-thin'>Don't have an account? <Link href='/auth/signup' className='font-medium underline'>Sign Up</Link></p>
                            </div>
                            <div className='mt-3'>
                                <p className='sec_desc'>Join our exclusive community and unlock the world of luxury fashion.</p>
                                <p className='sec_desc'>Simply provide us with a few details to get started.</p>
                            </div>

                            {/* form container */}
                            <div className='mt-10'>
                                <LoginForm />
                            </div>
                            <p className='mt-8 lg:hidden text-xs uppercase font-thin text-center'>Don't have an account? <Link href='/auth/signup' className='font-medium underline'>Sign Up</Link></p>
                            <div className='hidden lg:flex items-center mt-8'>
                                <TfiAngleLeft size={12} /><span className='uppercase text-xs font-thin'>Back</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-1 relative'>
                    <Image src={loginImg} alt='rggerg' fill className='object-cover object-top' />
                </div>
            </div>
        </section>
    )
}

export default LoginPage;