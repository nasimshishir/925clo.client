'use client'
import React, { useState } from 'react'
import Buttonv3 from './Button.v3';
import axios from 'axios';

interface SignUpFormData {
    name: string;
    email: string;
    password: string;
}
interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUpForm: React.FC = () => {

    const [err, setErr] = useState<boolean>(false)
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSignUp = async (SignUpData: SignUpFormData) => {
        // Handle sign up logic, e.g., send form data to the server

        console.log(SignUpData);
        const siteUrl = process.env.SITE_URL;
        console.log(siteUrl);


        try {
            const response = await axios.post(`http://localhost:8000/auth/register`, SignUpData)
            console.log(response);

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
        if (formData.password === formData.confirmPassword) {
            setErr(false)
            const { confirmPassword, ...rest } = formData;
            handleSignUp(rest);

        } else {
            setErr(true)
        }
    }


    return (
        <form className='w-full' onSubmit={handleSubmit}>
            <div className='grid gap-2 mt-3'>
                <label className='uppercase text-xs font-thin tracking-wide ms-5' htmlFor="">Full Name</label>
                <input className='bg-transparent border rounded-xl border-white text-sm font-thin focus:bg-transparent focus:outline-none p-3 text-white focus:border-gray-300 placeholder:text-gray-300' type="text" name='name' required onChange={handleChange} value={formData.name} />
            </div>
            <div className='grid gap-2 mt-3'>
                <label className='uppercase text-xs font-thin tracking-wide ms-5' htmlFor="">E-mail</label>
                <input className='bg-transparent border rounded-xl border-white text-sm font-thin focus:bg-transparent focus:outline-none p-3 text-white focus:border-gray-300 placeholder:text-gray-300' type="email" name='email' required onChange={handleChange} value={formData.email} />
            </div>
            <div className='grid gap-2 mt-3'>
                <label className='uppercase text-xs font-thin tracking-wide ms-5' htmlFor="">Password</label>
                <input className='bg-transparent border rounded-xl border-white text-sm font-thin focus:bg-transparent focus:outline-none p-3 text-white focus:border-gray-300 placeholder:text-gray-300' type="password" name='password' placeholder='Type your password here...' title='(Atleast 8 characters, uppercase, lowercase, numbers and special characters)' required onChange={handleChange} value={formData.password} />
            </div>
            <div className='grid gap-2 mt-3'>
                <label className='uppercase text-xs font-thin tracking-wide ms-5' htmlFor=""></label>
                <input className='bg-transparent border rounded-xl border-white text-sm font-thin focus:bg-transparent focus:outline-none p-3 text-white focus:border-gray-300 placeholder:text-gray-300' type="password" name='confirmPassword' placeholder='Retype your password here...' required onChange={handleChange} value={formData.confirmPassword} />
            </div>
            <div>
                {err && <p className='text-white'>Password Don't Match</p>}
            </div>
            <div className='mt-12'>
                <Buttonv3 type='submit'>Continue</Buttonv3>
            </div>

        </form>
    )
}

export default SignUpForm;