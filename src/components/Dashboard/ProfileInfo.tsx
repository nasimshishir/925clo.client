'use client'
import { Buttonv1, InputField } from '@components';
import Image from 'next/image';
import React, { useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

interface FormData {
  name: string;
  email: string;
}

const ProfileInfo = () => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className='flex flex-col w-full h-full justify-between gap-7'>
      <div className='flex justify-between'>
        <div className='flex gap-10'>
          <div className='h-40 w-40 relative'>
            <Image className='object-cover rounded-xl' src='https://images.pexels.com/photos/1708539/pexels-photo-1708539.jpeg?auto=compress&cs=tinysrgb&w=600' alt='profile_photo' fill />
          </div>
          <div className='w-5/12'>
            <h3 className='sec_title mb-7'>Profile Picture</h3>
            <p className='sec_desc text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod optio ab ut repellendus repudiandae animi. Voluptatem laborum deserunt maxime similique.</p>
          </div>
        </div>
        <div className=''>
          <Buttonv1 css='w-[15vw] py-3'>Change Profile Picture</Buttonv1>
        </div>
      </div>

      {/* Name Section */}
      <div>
        <h3 className='sec_title mb-2'>Name</h3>
        <div className='flex justify-between items-center'>
          <form className='w-3/5 grid grid-cols-2 gap-x-10'>
            <div className=''>
              <InputField onChange={onChange} label='Name' type='text' value='Clementine' width='w-full' textColor='text-gray-400' bg='bg-white' fontWeight='font-normal' />
            </div>
            <div>
              <InputField onChange={onChange} label='SurName' type='text' value='Smith' width='w-full' textColor='text-gray-400' bg='bg-white' fontWeight='font-normal' />
            </div>
          </form>
          <div className='mt-8'>
            <Buttonv1 css='w-[15vw] py-3'>Save Changes</Buttonv1>
          </div>
        </div>
      </div>

      {/* Email Section */}
      <div>
        <h3 className='sec_title mb-2'>E-Mail Address</h3>
        <div className='flex justify-between items-center'>
          <form className='w-3/5 grid grid-cols-2 gap-x-10'>
            <div className=''>
              <InputField onChange={onChange} label='E-mail' type='text' value='Clementine@email.com' width='w-full' textColor='text-gray-400' bg='bg-white' fontWeight='font-normal' />
            </div>
            <div className='flex items-center mt-10'>
              <AiFillCheckCircle size={20} color='#83D816' /><span className='text-sm uppercase ms-4'>{'Your Email is Confirmed'}</span>
            </div>
          </form>
          <div className='mt-8'>
            <Buttonv1 css='w-[15vw] py-3'>Save Changes</Buttonv1>
          </div>
        </div>
      </div>

      {/* Password Reset Section */}
      <div>
        <h3 className='sec_title mb-2'>Reset Your Password</h3>
        <div className='flex justify-between items-center'>
          <form className='w-2/3 grid grid-cols-2 gap-x-10'>
            <div className={`grid gap-2 mt-3 w-full`}>
              <label htmlFor='' className="uppercase text-sm font-normal tracking-wide ms-6 text-black">
                Your Password
              </label>
              <input
                type='password'
                name='password'
                value='clamentine'
                onChange={onChange}
                placeholder={'clamentine'}
                className={`bg-white rounded-2xl text-3xl tracking-wide font-normal p-6 text-black `}
              />
            </div>
          </form>
          <div className='mt-8'>
            <Buttonv1 css='w-[15vw] py-3'>Reset Password</Buttonv1>
          </div>
        </div>
      </div>
    </div>
    // <div className=''>
    //     <div>
    //       <h3 className='sec_title'>{'Clementine Smith'}</h3>
    //       <p className='sec_desc uppercase'>{'London, United Kingdom'}</p>
    //     </div>
    //     <div className='mt-3'>
    //       {/* Profile Info Form */}
    //       <form className='w-full grid grid-cols-2 gap-x-10'>
    //         <div className='relative'>
    //           <InputField onChange={onChange} label='First Name' type='text' value='Clementine' width='w-full' textColor='text-black' bg='bg-[#F6F6F6]' fontWeight='font-normal' />
    //           <InputField onChange={onChange} label='Email' type='email' value='emailExample@gmail.com' width='w-full' textColor='text-black' bg='bg-[#F6F6F6]' fontWeight='font-normal' />
    //         </div>
    //         <div>
    //           <InputField onChange={onChange} label='SurName' type='text' value='Smith' width='w-full' textColor='text-black' bg='bg-[#F6F6F6]' fontWeight='font-normal' />
    //           <div className='flex mt-12 items-center'>
    //             <AiFillCheckCircle size={16} color='#83D816' /><span className='text-xs ms-1'>{'Your Email is Confirmed'}</span>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //     <div className='absolute bottom-0 py-2 w-full'>
    //       <Buttonv1 css='w-full py-3'>Save Changes</Buttonv1>
    //     </div>
    //   </div>
  )
}

export default ProfileInfo;