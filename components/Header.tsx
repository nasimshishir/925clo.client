import Image from 'next/image';
import React from 'react'
import Logo from "@assets/logo_2.png";
import Avatar from "@assets/profile-avatar.png"
import { BsHeart } from "react-icons/bs"

const Header = () => {
    return (
        <div className='bg-[#F6F6F6]'>
            <nav className='container mx-auto grid grid-cols-5 items-center py-2'>
                <div className=' border col-span-1'>
                    <Image src={Logo} width={100} height={42} alt='925clo_logo' />
                </div>
                <div className='md:block hidden border col-span-3'>
                    <ul className='flex justify-center'>
                        <li className='text-xs tracking-[0.6px] px-3 uppercase'>Style Profile</li>
                        <li className='text-xs tracking-[0.6px] px-3 uppercase'>Shop Seasons</li>
                        <li className='text-xs tracking-[0.6px] px-3 uppercase'>Shop Product</li>
                        <li className='text-xs tracking-[0.6px] px-3 uppercase'>Shop by Occasion</li>
                    </ul>
                </div>
                <div className='md:block hidden border col-span-1'>
                    <ul className='flex flex-row justify-end items-center'>
                        <li className='text-xs tracking-[0.6px] uppercase px-6'>How it Works</li>
                        <li className='text-xs uppercase px-3'><BsHeart size={'1.7em'} /></li>
                        <li className='text-xs uppercase px-3'><Image src={Avatar} width={32} height={32} alt='customer-rofile-pic' /></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;