'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import Logo from "@assets/logo.png";
import Avatar from "@assets/profile-avatar.png"
import { BsHeart } from "react-icons/bs"
import Submenu from '@components/Submenu';
import Link from 'next/link';
import menus from '@assets/menuItems/menuData.json'
import { menuItem } from '@lib/types/types';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';
import { wishListToggle } from '@lib/common';
import { Buttonv2, WishlistSidebar } from '@components';
import { useUserContext } from '@lib/context api/providers/UserProvider';


const Headerv1 = () => {

    const [dropdownIsActive, setDropdownIsActive] = useState<boolean>(false)

    const { menuData, setMenuData, itemId, setItemId, menuItemData, setMenuItemData, wishlistIsOpen, setWishlistIsOpen } = useDropdownMenuContext()
    const { user } = useUserContext()


    const handleToggle = (id: number | null, data: menuItem[]) => {
        if (itemId === id) {
            setItemId(null);
            setMenuItemData(null)
            setMenuData(null)
            return;
        } else {
            setItemId(id)
            setMenuData(data)
            setMenuItemData(data[0])
        }
    }

    const handleProfileDropdownClose = () => {
        setTimeout(() => setDropdownIsActive(false), 500)
    }

    return (
        <>
            <header className={`absolute w-full text-white bg-transparent z-40 h-[4.375rem] grid`}>

                {/* Desktop Device */}
                <nav className='hidden lg:grid grid-cols-5 mx-8'>
                    <div className='col-span-1 flex justify-start my-auto'>
                        <Link className='' href='/'><Image src={Logo} width={100} height={42} alt='925clo_logo' /></Link>
                    </div>

                    {/* Main Menu */}
                    <div className="md:block hidden col-span-3 my-auto">
                        <ul className='flex justify-center items-center'>
                            <Link href="/generate_outfit"><li className={`text-xs sm:text-sm px-6 py-2 rounded-[13px] uppercase hover:bg-white/10`}>Generate Outfit</li></Link>
                            <Link href="/style_profile"><li className={`text-xs sm:text-sm px-6 py-2 rounded-[13px] uppercase hover:bg-white/10`}>Style Profile</li></Link>
                            <li onClick={() => { handleToggle(menus.season.id, menus.season.seasons) }} className={`text-xs sm:text-sm px-6 py-2 rounded-[13px] uppercase hover:bg-white/10 cursor-pointer`}>Shop Seasons</li>
                            <li onClick={() => { handleToggle(menus.product_type.id, menus.product_type.product_types) }} className={`text-xs sm:text-sm px-6 py-2 rounded-[13px] uppercase hover:bg-white/10 cursor-pointer`}>Shop Product</li>
                            <li onClick={() => { handleToggle(menus.occasion.id, menus.occasion.occasions) }} className={`text-xs sm:text-sm px-6 py-2 rounded-[13px] uppercase hover:bg-white/10 cursor-pointer`}>Shop by Occasion</li>
                        </ul>
                    </div>
                    {/* Profile Menu */}
                    <div className='md:block hidden col-span-1 my'>
                        <ul className='flex flex-row justify-end items-center gap-6'>
                            <Link href='/how_it_works'>
                                <li className={`text-xs sm:text-sm py-2 rounded-[13px] uppercase hover:bg-white/10 cursor-pointer`}>How it Works</li>
                            </Link>
                            <>
                                <li className='text-xs uppercase cursor-pointer' onClick={() => { wishListToggle(setWishlistIsOpen, wishlistIsOpen) }}><BsHeart size={'1.2rem'} /></li>
                                <Link href='/dashboard' className='grid h-[4.375rem]' onMouseEnter={() => setDropdownIsActive(true)}><li className='cursor-pointer my-auto'><Image className='rounded-full' src={Avatar} width={30} height={30} alt='customer-rofile-pic' /></li></Link>
                            </>
                            {/* {user &&
                                <>
                                    <li className='text-xs uppercase px-3 cursor-pointer' onClick={() => { wishListToggle(setWishlistIsOpen, wishlistIsOpen) }}><BsHeart size={'1.2rem'} /></li>
                                    <Link href='/dashboard'><li className='px-3 cursor-pointer'><Image className='rounded-full' src={Avatar} width={30} height={30} alt='customer-rofile-pic' /></li></Link>
                                </>} */}
                        </ul>
                    </div>
                </nav>
            </header>
            <Submenu menuData={menuData} />
            <WishlistSidebar />
            {dropdownIsActive &&
                <div className='h-[26.5rem] w-[23.125rem] fixed top-[4.5rem] right-12 rounded-2xl bg-gray-500/5 backdrop-blur-md p-9 text-white hidden lg:flex flex-col justify-between' onMouseEnter={() => setDropdownIsActive(true)} onMouseLeave={() => setDropdownIsActive(false)}>
                    <div>
                        <p className='font-helvetica font-normal uppercase text-2xl mb-8 px-3'>Clementine Smith</p>
                        <div>
                            <p className='font-inter text-sm font-normal uppercase py-2 hover:bg-white/10 rounded-lg px-3'>Profile Info</p>
                            <p className='font-inter text-sm font-normal uppercase py-2 hover:bg-white/10 rounded-lg px-3'>Style Profile</p>
                            <p className='font-inter text-sm font-normal uppercase py-2 hover:bg-white/10 rounded-lg px-3'>Wishlist</p>
                        </div>
                    </div>
                    <div className='px-3'>
                        <Buttonv2 css='w-full h-[3rem]'>Log Out</Buttonv2>
                    </div>
                </div>}
        </>
    )
}

export default Headerv1;