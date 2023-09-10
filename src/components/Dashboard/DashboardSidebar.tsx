'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const DashboardSidebar = () => {

  const logOut = () => { }


  const path = usePathname();

  return (
    <div className='relative'>
      <h2 className='absolute sec_title mb-16 ps-3 -top-20'>{path === '/dashboard' && 'Profile'}{path === '/dashboard/style_profile' && 'Style Profile'}{path === '/dashboard/wishlist' && 'Whislist'}</h2>
      <div className=''>
        <ul className='me-12'>
          <Link href='/dashboard'><li className={`my-1 hover:text-white py-2 px-4 hover:bg-primary_orange rounded-2xl uppercase text-[0.8rem] tracking-[0.5px] ${(path === '/dashboard') && 'bg-[#F25200] text-white'}`}>Profile Info</li></Link>
          <Link href='/dashboard/style_profile'><li className={`my-1 hover:text-white py-2 px-4 hover:bg-primary_orange rounded-2xl uppercase text-[0.8rem] tracking-[0.5px] ${(path === '/dashboard/style_profile') && 'bg-[#F25200] text-white'}`}>Style Profile</li></Link>
          <Link href='/dashboard/wishlist'><li className={`my-1 hover:text-white py-2 px-4 hover:bg-primary_orange rounded-2xl uppercase text-[0.8rem] tracking-[0.5px] ${(path === '/dashboard/wishlist') && 'bg-[#F25200] text-white'}`}>Wishlist</li></Link>
        </ul>
        <div className='grid mt-36'>
          <p className={`me-auto hover:text-white py-2 px-4 hover:bg-primary_orange rounded-2xl uppercase text-[0.8rem] tracking-[0.5px] cursor-pointer`} onClick={logOut}>log Out</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardSidebar;