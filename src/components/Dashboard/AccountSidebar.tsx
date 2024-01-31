'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useUserContext } from '@lib/context api/providers/UserProvider';

const AccountSidebar = () => {
  const router = useRouter()
  const { setUser } = useUserContext()

  const logOut = () => {
    setUser(null)
    router.replace('/auth')
  }


  const path = usePathname();

  return (
    <div className='relative w-[25vw] bg-primary_orange rounded-3xl p-10 text-white'>
      <h2 className='sec_title uppercase mb-16'>{path === '/account/profileinfo' && 'Your Account '}{path === '/account/styleprofile' && 'Style Profile'}{path === '/account/wishlist' && 'Whislist'}</h2>
      <div className=''>
        <ul className=''>
          <Link href='/account/profileinfo'><li className={`my-1 hover:text-white py-2 hover:bg-primary_orange rounded-2xl uppercase text-[0.8rem] tracking-[0.5px] ${(path === '/account/profileinfo') && 'bg-[#F25200] text-white'}`}>Profile Info</li></Link>
          <Link href='/account/styleprofile'><li className={`my-1 hover:text-white py-2 hover:bg-primary_orange rounded-2xl uppercase text-[0.8rem] tracking-[0.5px] ${(path === '/account/style_profile') && 'bg-[#F25200] text-white'}`}>Style Profile</li></Link>
          <Link href='/account/wishlist'><li className={`my-1 hover:text-white py-2 hover:bg-primary_orange rounded-2xl uppercase text-[0.8rem] tracking-[0.5px] ${(path === '/account/wishlist') && 'bg-[#F25200] text-white'}`}>Wishlist</li></Link>
        </ul>
        <div className='grid mt-36'>
          <p className={`me-auto hover:text-white py-2 px-4 hover:bg-primary_orange rounded-2xl uppercase text-[0.8rem] tracking-[0.5px] cursor-pointer`} onClick={logOut}>log Out</p>
        </div>
      </div>
    </div>
  )
}

export default AccountSidebar;