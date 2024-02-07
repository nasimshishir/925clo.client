'use client'
import React, { useState } from 'react'
import Buttonv3 from './Buttons/Button.v3';
import axios from 'axios';
import { useUserContext } from '@lib/context api/providers/UserProvider';
import { User } from '@lib/types/types';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';



interface LoginFormData {
    username: string;
    password: string;
}

const LoginForm: React.FC = () => {

    const { data: session } = useSession()

    const router = useRouter()

    const { setUser } = useUserContext()

    const [err, setErr] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [formData, setFormData] = useState<LoginFormData>({
        username: '',
        password: ''
    });

    const handleLogin = async (loginData: LoginFormData) => {
        // Handle sign up logic, e.g., send form data to the server
        const siteUrl = process.env.API_URL;
        console.log(siteUrl);
        console.log(loginData);


        try {
            const response = await axios.post(`https://coral-abalone-veil.cyclic.app/auth/login`, loginData)
            const user: User = response.data;
            console.log(user);

            if (user) {
                setUser(user)
                router.push('/testuserinteractions')
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
        handleLogin(formData);

    }

    return (
        <form className='w-full' onSubmit={handleSubmit}>

            <div className='grid gap-2 mt-4'>
                <label className='uppercase text-xs font-thin tracking-wide ms-5' htmlFor="">E-mail</label>
                <input className='block h-[4rem] px-5 bg-transparent border rounded-xl border-white text-sm font-thin focus:bg-transparent focus:outline-none text-white focus:border-gray-300 placeholder:text-gray-300' type="email" name='username' required onChange={handleChange} value={formData.username} />
            </div>
            <div className='grid gap-2 mt-4'>
                <label className='uppercase text-xs font-thin tracking-wide ms-5' htmlFor="">Password</label>
                <input className='block h-[4rem] px-5 bg-transparent border rounded-xl border-white text-sm font-thin focus:bg-transparent focus:outline-none text-white focus:border-gray-300 placeholder:text-gray-300' type="password" name='password' placeholder='Type your password here...' title='(Atleast 8 characters, uppercase, lowercase, numbers and special characters)' required onChange={handleChange} value={formData.password} />
            </div>
            <div className='mt-12'>
                <Buttonv3 css='w-full h-[3rem] md:h-[4.3125rem]'>Sign in</Buttonv3>
            </div>

        </form>
    )
}

export default LoginForm;