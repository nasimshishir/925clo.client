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
    <div className='grid grid-cols-3 gap-x-10'>
      <div className='col-span-1 relative'>
        <div className='relative h-80'>
          <Image className='object-cover rounded-xl' src='https://images.pexels.com/photos/1708539/pexels-photo-1708539.jpeg?auto=compress&cs=tinysrgb&w=600' alt='avatar' fill />
        </div>
        <div className='absolute bottom-0 p-2 w-full'>
          <Buttonv1 css='w-full py-3'>Change Profile Picture</Buttonv1>
        </div>
      </div>
      <div className='col-span-2 h-full relative'>
        <div>
          <h3 className='sec_title'>{'Clementine Smith'}</h3>
          <p className='sec_desc uppercase'>{'London, United Kingdom'}</p>
        </div>
        <div className='mt-3'>
          {/* Profile Info Form */}
          <form className='w-full grid grid-cols-2 gap-x-10'>
            <div className='relative'>
              <InputField onChange={onChange} label='First Name' type='text' value='Clementine' width='w-full' textColor='text-black' bg='bg-[#F6F6F6]' fontWeight='font-normal' />
              <InputField onChange={onChange} label='Email' type='email' value='emailExample@gmail.com' width='w-full' textColor='text-black' bg='bg-[#F6F6F6]' fontWeight='font-normal' />
            </div>
            <div>
              <InputField onChange={onChange} label='SurName' type='text' value='Smith' width='w-full' textColor='text-black' bg='bg-[#F6F6F6]' fontWeight='font-normal' />
              <div className='flex mt-12 items-center'>
                <AiFillCheckCircle size={16} color='#83D816' /><span className='text-xs ms-1'>{'Your Email is Confirmed'}</span>
              </div>
            </div>
          </form>
        </div>
        <div className='absolute bottom-0 py-2 w-full'>
          <Buttonv1 css='w-full py-3'>Save Changes</Buttonv1>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;