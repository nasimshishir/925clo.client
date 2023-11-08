'use client'
import React, { useState } from 'react'
import Buttonv3 from './Buttons/Button.v3';
import axios from 'axios';
import { useUserContext } from '@lib/context api/providers/UserProvider';
import { user } from '@lib/types/types';
import { useRouter } from 'next/navigation';



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
            const user: user = response.data;
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
        <form className='w-full h-full flex flex-col justify-between lg:block' onSubmit={handleSubmit}>
            <div className='grid gap-2 mt-4'>
                <input className='block h-[3.2rem] md:h-[4rem] px-5 bg-transparent border rounded-xl border-white text-sm font-thin focus:bg-transparent focus:outline-none text-white focus:border-gray-300 placeholder:text-gray-300' type="number" name='code' placeholder='Enter your 4 Digit Code' title='(Atleast 8 characters, uppercase, lowercase, numbers and special characters)' required onChange={handleChange} value={formData.code} />
            </div>
            <div className='mt-12'>
                <Buttonv3 css='w-full h-[3rem] md:h-[4.3125rem]'>Continue</Buttonv3>
            </div>
        </form>
    )
}

export default EmailVerificationForm;