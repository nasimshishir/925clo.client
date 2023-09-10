'use client'
import { Buttonv1 } from '@components';
import React from 'react'
import { BsCircleFill } from 'react-icons/bs';



const StyleProfile = () => {

  const brands = ['Gucci', 'Gucci', 'Gucci', 'Gucci', 'Gucci', 'Gucci', 'Gucci', 'Gucci', 'Gucci', 'Gucci']
  const colors = ['#586127', '#586127', '#586127', '#586127', '#586127']
  return (
    <div className='grid grid-cols-2 gap-x-16'>

      <div className='grid grid-rows-3 gap-y-2'>
        {/* Your Country */}
        <div>
          <div className='flex justify-between items-center'>
            <h6 className='uppercase text-md font-bold'>Your Country</h6>
            <Buttonv1 css='w-20 py-2'>Edit</Buttonv1>
          </div>
          <p className='text-xs uppercase'>London, United Kingdom</p>
        </div>
        {/* Favourite Brands */}
        <div>
          <div className='flex justify-between items-center'>
            <h6 className='uppercase text-md font-bold'>Favourite Brands</h6>
            <Buttonv1 css='w-20 py-2'>Edit</Buttonv1>
          </div>
          <p className='text-xs uppercase w-1/2'>{brands.map((item, index) => <span key={index}>{item}, </span>)}</p>
        </div>
        {/* Occassion */}
        <div>
          <div className='flex justify-between items-center'>
            <h6 className='uppercase text-md font-bold w-1/2'>What Occassion Are You Dressing for?</h6>
            <Buttonv1 css='w-20 py-2'>Edit</Buttonv1>
          </div>
          <p className='text-xs uppercase w-1/2'>{'Everydsay Wear'}</p>
        </div>

      </div>


      <div className='grid grid-rows-3 gap-y-2'>
        {/* Gender */}
        <div>
          <div className='flex justify-between items-center'>
            <h6 className='uppercase text-md font-bold w-1/2'>What Type of Clothing Are you looking for?</h6>
            <Buttonv1 css='w-20 py-2'>Edit</Buttonv1>
          </div>
          <p className='text-xs uppercase w-1/2'>{'Unisex'}</p>
        </div>
        {/* Gender */}
        <div>
          <div className='flex justify-between items-center'>
            <h6 className='uppercase text-md font-bold w-1/2'>Least Favourite Colors</h6>
            <Buttonv1 css='w-20 py-2'>Edit</Buttonv1>
          </div>
          <div className='flex gap-x-1 w-1/2'>{colors.map((item, index) => <BsCircleFill key={index} color={item} size={12} />)}</div>
        </div>
        {/* Gender */}
        <div>
          <div className='flex justify-between items-center'>
            <h6 className='uppercase text-md font-bold w-1/2'>Please Tell us your sizes</h6>
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