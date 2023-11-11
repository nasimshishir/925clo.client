import Image from 'next/image';
import React from 'react'
import { TfiAngleLeft } from 'react-icons/tfi'
import Link from 'next/link';
import Logo from "@assets/logo.png";
import { AuthHeader, Buttonv3, EmailVerificationForm } from '@components';






const ConfirmEmailPage = () => {



    return (
        <section className='max-h-screen overflow-hidden'>
            {/* Header ========================================== */}
            <AuthHeader />

            {/* Body ============================================ */}
            <div className='h-screen flex flex-col-reverse lg:flex-row'>
                <div className='flex-1 bg-primary_orange h-full text-white'>
                    <div className='grid h-full lg:h-screen ps-5 xs:ps-10 lg:ps-[8rem] pe-5 xs:pe-10 lg:pe-[13rem]'>
                        <div className='lg:my-auto my-[1rem]'>
                            <div>
                                <h2 className='text-white sec_title'>Check your email!</h2>
                                <div className='mt-3'>
                                    <p className='sec_desc'>Join our exclusive community and unlock the world of luxury fashion. <br className='hidden md:block' /> Simply provide us with a few details to get started.</p>
                                </div>
                            </div>

                            {/* ======================================================== */}
                            <div className='mt-4 flex flex-col p-5'>
                                <EmailVerificationForm />
                            </div>
                            <div className='flex items-center mt-2'>
                                <><TfiAngleLeft className='cursor-pointer hidden lg:block' size={14} /><span className='cursor-pointer uppercase text-sm font-thin  hidden lg:block'>Back</span></>
                                <p className='uppercase text-xs font-thin grow lg:text-end'>Step 0/2 Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1 relative bg-confirm_email_bg_m lg:bg-confirm_email_bg bg-cover bg-no-repeat'>
                </div>
            </div>
        </section>
    )
}

export default ConfirmEmailPage;