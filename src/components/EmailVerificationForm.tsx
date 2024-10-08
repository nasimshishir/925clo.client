'use client'
import React, { useState } from 'react'
import Buttonv3 from './Buttons/Button.v3';
import axios from 'axios';
import { useUserContext } from '@lib/context api/providers/UserProvider';
import { User } from '@lib/types/types';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { TfiAngleLeft } from 'react-icons/tfi';



interface LoginFormData {
    code: string;
}

const EmailVerificationForm: React.FC = () => {

    const router = useRouter()

    const { setUser } = useUserContext()

    const [err, setErr] = useState<boolean>(false)
    const [formData, setFormData] = useState<LoginFormData>({
        code: ''
    });

    const handleEmailVerification = async (loginData: LoginFormData) => {
        // Handle sign up logic, e.g., send form data to the server
        const siteUrl = process.env.SITE_URL;
        console.log(siteUrl);
        console.log(loginData);


        try {
            const response = await axios.post(`http://localhost:8000/auth/login`, loginData)
            const user: User = response.data;
            if (user) {
                setUser(user)
                router.replace('/')
            }

        } catch (error) {
            console.error(error);
        }


    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleEmailVerification(formData);

    }

    return (
        <form className='w-full h-full flex flex-col justify-between  gap-2.5 xs:gap-4 sm:gap-5' onSubmit={handleSubmit}>
            <div className='grid gap-2.5 xs:gap-4 sm:gap-5'>
                <input className='`block h-[3.2rem] lg:h-[4rem] px-5 bg-transparent border rounded-xl border-white text-xs sm:text-sm font-thin focus:bg-transparent focus:outline-none text-white focus:border-gray-300 placeholder:text-off_white placeholder:uppercase' type="text" name='code' placeholder='Enter The 4 Digit Code' required onChange={handleChange} value={formData.code} />

                <p className='text-xs sm:text-sm uppercase font-thin ms-2 sm:ms-5'>Didn't get the email? <Link href='/auth/login' className='font-medium underline'>Send it Again</Link></p>
            </div>

            <div className='mt-7 sm:mt-12'>
                <Buttonv3 css='w-full h-[3rem] md:h-[4.3125rem]'>Continue</Buttonv3>
                <div className='flex items-center mt-2'>
                    <><TfiAngleLeft className='cursor-pointer hidden lg:block' size={14} /><span className='cursor-pointer uppercase text-xs sm:text-sm font-thin  hidden lg:block'>Back</span></>
                    <p className='uppercase text-xs sm:text-sm font-thin grow lg:text-end'>Step 0/2 Completed</p>
                </div>
            </div>
        </form>
    )
}

export default EmailVerificationForm;