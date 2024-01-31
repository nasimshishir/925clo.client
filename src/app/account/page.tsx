'use client'
import { RightAngle } from '@components';
import { useUserContext } from '@lib/context api/providers/UserProvider';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Account = () => {

    const { user } = useUserContext()
    return (
        <div className='h-full w-full bg-bg_white rounded-t-3xl'>
            <div className='flex flex-col items-center my-16'>
                <p className='sec_title mb-4'>Welcome to your Account</p>
                <p className='sec_desc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi
                    dunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <div className='w-3/4 mx-auto'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-5'>
                        <Image src={`https://lh3.googleusercontent.com/a/ACg8ocI4IZNWHJkr_EbwVjmMtidk3Btj3Z7dE1RNTnLg_kApkw=s288-c-no`}
                            alt='dfhdfh'
                            width={60}
                            height={60}
                            className='object-contain rounded-full'
                        />
                        <h3 className='text-2xl font-helvetica font-bold uppercase'>{user ? user.name : 'Nasim Shishir'}</h3>
                    </div>
                    <div>
                        <button className='uppercase border border-black px-16 py-2 rounded-lg text-xs'>
                            Log out
                        </button>
                    </div>
                </div>

                <div className='flex gap-2 mt-16'>
                    <div className='w-full bg-white p-12 rounded-xl'>
                        <div className='flex justify-between items-center'>
                            <p className='text-xl font-inter font-bold uppercase'>Profile Info</p>
                            <Link href='/account/profileinfo'><button className='bg-primary_orange rounded-full w-10 h-10 flex justify-center items-center'><RightAngle /></button></Link>
                        </div>
                        <p className='sec_desc mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, omnis? Dolorem, cupiditate maxime temporibus libero dicta dolores quod error? Asperiores et saepe quod sit id a nihil eos nostrum voluptate?</p>
                    </div>
                    <div className='w-full bg-white p-12 rounded-xl'>
                        <div className='flex justify-between items-center'>
                            <p className='text-xl font-inter font-bold uppercase'>Style Profile</p>
                            <Link href='/account/profileinfo/styleprofile'><button className='bg-primary_orange rounded-full w-10 h-10 flex justify-center items-center'><RightAngle /></button></Link>
                        </div>
                        <p className='sec_desc mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, omnis? Dolorem, cupiditate maxime temporibus libero dicta dolores quod error? Asperiores et saepe quod sit id a nihil eos nostrum voluptate?</p>
                    </div>
                    <div className='w-full bg-white p-12 rounded-xl'>
                        <div className='flex justify-between items-center'>
                            <p className='text-xl font-inter font-bold uppercase'>Wishlist</p>
                            <Link href='/account/profileinfo/wishlist'><button className='bg-primary_orange rounded-full w-10 h-10 flex justify-center items-center'><RightAngle /></button></Link>
                        </div>
                        <p className='sec_desc mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, omnis? Dolorem, cupiditate maxime temporibus libero dicta dolores quod error? Asperiores et saepe quod sit id a nihil eos nostrum voluptate?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;