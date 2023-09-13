'use client'
import React, { useState } from 'react'
import Buttonv3 from './Buttons/Button.v3';
import axios from 'axios';
import { useUserContext } from '@lib/context api/providers/UserProvider';
import { user } from '@lib/types/types';
import { useRouter } from 'next/navigation';



interface LoginFormData {
    username: string;
    password: string;
}

const LoginForm: React.FC = () => {

    const router = useRouter()

    const { setUser } = useUserContext()

    const [err, setErr] = useState<boolean>(false)
    const [formData, setFormData] = useState<LoginFormData>({
        username: '',
        password: ''
    });

    const handleLogin = async (loginData: LoginFormData) => {
        // Handle sign up logic, e.g., send form data to the server
        const siteUrl = process.env.SITE_URL;
        console.log(siteUrl);
        console.log(loginData);


        try {
            const response = await axios.post(`http://localhost:8000/auth/login`, loginData)
            const user: user = response.data;
            if (user) {
                setUser(user)
                router.push('/')
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
        console.log(formData);

        handleLogin(formData);

    }

    return (
        <form className='w-full' onSubmit={handleSubmit}>

            <div className='grid gap-2 mt-3'>
                <label className='uppercase text-xs font-thin tracking-wide ms-5' htmlFor="">E-mail</label>
                <input className='bg-transparent border rounded-xl border-white text-sm font-thin focus:bg-transparent focus:outline-none p-3 text-white focus:border-gray-300 placeholder:text-gray-300' type="email" name='username' required onChange={handleChange} value={formData.username} />
            </div>
            <div className='grid gap-2 mt-3'>
                <label className='uppercase text-xs font-thin tracking-wide ms-5' htmlFor="">Password</label>
                <input className='bg-transparent border rounded-xl border-white text-sm font-thin focus:bg-transparent focus:outline-none p-3 text-white focus:border-gray-300 placeholder:text-gray-300' type="password" name='password' placeholder='Type your password here...' title='(Atleast 8 characters, uppercase, lowercase, numbers and special characters)' required onChange={handleChange} value={formData.password} />
            </div>
            <div className='mt-12'>
                <Buttonv3 css='w-60 py-3 lg:py-4'>Sign in</Buttonv3>
            </div>

        </form>
    )
}

export default LoginForm;