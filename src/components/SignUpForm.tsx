import React from 'react'
import Buttonv3 from './Button.v3';

const SignUpForm: React.FC = () => {
    return (
        <form className='w-full'>
            <div className='grid gap-2 mt-3'>
                <label className='uppercase text-xs font-thin tracking-wide ms-5' htmlFor="">Full Name</label>
                <input className='bg-transparent border rounded-xl border-white text-sm font-thin focus:outline-none focus:border-gray-300 p-3 text-white' type="text" name='fullName' />
            </div>
            <div className='grid gap-2 mt-3'>
                <label className='uppercase text-xs font-thin tracking-wide ms-5' htmlFor="">E-mail</label>
                <input className='bg-transparent border rounded-xl border-white text-sm font-thin focus:outline-none focus:border-gray-300 p-3 text-white' type="email" name='email' />
            </div>
            <div className='grid gap-2 mt-3'>
                <label className='uppercase text-xs font-thin tracking-wide ms-5' htmlFor="">Password</label>
                <input className='bg-transparent border rounded-xl border-white text-sm font-thin focus:outline-none focus:border-gray-300 p-3 text-white' type="password" name='password' placeholder='Type your password here... (Atleast 8 character, uppercase, lowercase, special characters)' />
            </div>
            <div className='grid gap-2 mt-3'>
                <label className='uppercase text-xs font-thin tracking-wide ms-5' htmlFor=""></label>
                <input className='bg-transparent border rounded-xl border-white text-sm font-thin focus:outline-none focus:border-gray-300 p-3 text-white' type="password" name='confirmPassword' placeholder='Retype your password here...' />
            </div>
            <div className='mt-12'>
                <Buttonv3>Continue</Buttonv3>
            </div>

        </form>
    )
}

export default SignUpForm;