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
        <ul className='grid'>
          <Link href='/account/profileinfo' className='me-auto'><li className={`my-3 hover:border-b border-white uppercase text-[0.8rem] tracking-[0.5px] ${(path === '/account/profileinfo') && 'border-b border-white'}`}>Profile Info</li></Link>
          <Link href='/account/styleprofile' className='me-auto'><li className={`my-3 hover:border-b border-white uppercase text-[0.8rem] tracking-[0.5px] ${(path === '/account/style_profile') && 'border-b border-white'}`}>Style Profile</li></Link>
          <Link href='/account/wishlist' className='me-auto'><li className={`my-3 hover:border-b border-white uppercase text-[0.8rem] tracking-[0.5px] ${(path === '/account/wishlist') && 'border-b border-white'}`}>Wishlist</li></Link>
        </ul>
        <div className='grid mt-36'>
          <p className={`bg-white me-auto text-black border py-2.5 rounded-xl uppercase text-[0.8rem] tracking-[0.5px] cursor-pointer w-3/4 text-center`} onClick={logOut}>log Out</p>
        </div>
      </div>
    </div>
  )
}

export default AccountSidebar;