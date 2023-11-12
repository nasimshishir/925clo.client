import Image from 'next/image';
import React from 'react'
import { TfiAngleLeft } from 'react-icons/tfi'
import Link from 'next/link';
import Logo from "@assets/logo.png";
import { AuthHeader, Buttonv3, EmailVerificationForm } from '@components';






const ConfirmEmailPage = () => {



    return (
        <section className='lg:min-h-screen'>
            {/* Header ========================================== */}
            <AuthHeader />
            {/* Body ============================================ */}
            <div className='h-screen flex flex-col-reverse lg:flex-row'>
                <div className='flex-1 h-full text-white'>
                    <div className='grid h-full lg:h-screen ps-5 xs:ps-10 lg:ps-[8rem] pe-5 xs:pe-10 lg:pe-[13rem] py-5 xs:py-10 bg-primary_orange'>
                        <div className='lg:my-auto grid'>
                            <div className='h-fit'>
                                <h2 className='text-white sec_title'>Check your email!</h2>
                                <p className='sec_desc mt-3 mb-0'>Join our exclusive community and unlock the world of luxury fashion. <br className='hidden md:block' /> Simply provide us with a few details to get started.</p>
                            </div>

                            {/* ======================================================== */}
                            <div className='grid mt-4 lg:mt-8 h-full'>
                                <EmailVerificationForm />
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