import React from 'react'
import Buttonv3 from './Buttons/Button.v3'
import { TfiAngleLeft } from 'react-icons/tfi'

function AccountCreated() {
    return (
        <div className='lg:my-auto grid'>
            <div className=''>
                <h2 className='text-white sec_title'>Your Account Has <br />Been Created</h2>
                <p className='sec_desc mt-3 mb-0'>Join our exclusive community and unlock the world of luxury fashion. <br className='hidden md:block' /> Simply provide us with a few details to get started.</p>
            </div>

            {/* ======================================================== */}
            <div className='grid mt-7 sm:mt-12 md:mt-16'>
                <div className='mt-auto'>
                    <Buttonv3 css='w-full h-[3rem] md:h-[4.3125rem]'>Continue</Buttonv3>
                    <div className='flex items-center mt-2'>
                        <><TfiAngleLeft className='cursor-pointer hidden lg:block' size={14} /><span className='cursor-pointer uppercase text-xs sm:text-sm font-thin  hidden lg:block'>Back</span></>
                        <p className='uppercase text-xs sm:text-sm font-thin grow lg:text-end'>Step 0/2 Completed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountCreated