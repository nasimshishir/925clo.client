'use client'
import { Buttonv1 } from '@components';
import Image from 'next/image';
import React from 'react'
import { BsCircleFill } from 'react-icons/bs';



const StyleProfile = () => {

  const brands = ['Gucci', 'Gucci', 'Gucci', 'Gucci', 'Gucci', 'Gucci', 'Gucci', 'Gucci', 'Gucci', 'Gucci']
  const colors = ['#586127', '#586127', '#586127', '#586127', '#586127']
  return (
    <div className='grid grid-cols-2 gap-x-16'>

      <div className='grid grid-rows-4 gap-y-16'>
        {/* Your Country */}
        <div>
          <div className='flex justify-between items-center'>
            <h6 className='sec_title w-2/3'>Your Country</h6>
            <Buttonv1 css='w-20 py-2'>Edit</Buttonv1>
          </div>
          <div className='flex gap-2'>
            <Image className='"absolute inset-y-0 left-2 flex items-center pl-2"' src={`https://flagcdn.com/w40/gb.webp`} alt={`flag-gb`} width={30} height={0} />
            <p className='text-xs uppercase'>London, United Kingdom</p>
          </div>
        </div>
        {/* Occasion Date */}
        <div>
          <div className='flex justify-between items-center'>
            <h6 className='sec_title w-2/3'>Occasion Date</h6>
            <Buttonv1 css='w-20 py-2'>Edit</Buttonv1>
          </div>
          <div className='flex gap-2'>
            <p className='text-xs uppercase'>Current Date:</p>
            <p className='text-xs uppercase font-bold'>30 Jan, 2024</p>
          </div>
        </div>
        {/* Favourite Brands */}
        <div>
          <div className='flex justify-between items-center'>
            <h6 className='sec_title w-2/3'>Favourite Brands</h6>
            <Buttonv1 css='w-20 py-2'>Edit</Buttonv1>
          </div>
          <p className='text-xs uppercase w-1/2'>{brands.map((item, index) => <span key={index}>{item}, </span>)}</p>
        </div>
        {/* Occassion */}
        <div>
          <div className='flex justify-between items-center'>
            <h6 className='sec_title w-2/3'>What Occassion Are You Dressing for?</h6>
            <Buttonv1 css='w-20 py-2'>Edit</Buttonv1>
          </div>
          <p className='text-xs uppercase w-1/2'>{'Everydsay Wear'}</p>
        </div>

      </div>


      <div className='grid grid-rows-3 gap-y-16'>
        {/* Gender */}
        <div>
          <div className='flex justify-between items-center'>
            <h6 className='sec_title w-2/3'>Type of Clothing</h6>
            <Buttonv1 css='w-20 py-2'>Edit</Buttonv1>
          </div>
          <p className='text-xs uppercase w-1/2'>{'Unisex'}</p>
        </div>
        {/* Gender */}
        <div>
          <div className='flex justify-between items-center'>
            <h6 className='sec_title w-2/3'>Least Favourite Colors</h6>
            <Buttonv1 css='w-20 py-2'>Edit</Buttonv1>
          </div>
          <div className='flex gap-x-1 w-1/2'>{colors.map((item, index) => <BsCircleFill key={index} color={item} size={12} />)}</div>
        </div>
        {/* Gender */}
        <div>
          <div className='flex justify-between items-center'>
            <h6 className='sec_title w-2/3'>your sizes</h6>
            <Buttonv1 css='w-20 py-2'>Edit</Buttonv1>
          </div>
          <div className='w-1/2'>
            <p className='text-xs uppercase'>Top Size: <span className='uppercase text-xs '>{'M'}</span></p>
            <p className='text-xs uppercase'>Bottom Size: <span className='uppercase text-xs '>{'S'}</span></p>
            <p className='text-xs uppercase'>Shoe Size: <span className='uppercase text-xs '>{'UK: 6.5'}</span></p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default StyleProfile;