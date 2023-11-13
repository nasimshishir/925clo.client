'use client'
import Image from 'next/image';
import React from 'react'
import Logo from "@assets/logo.png";
import Avatar from "@assets/profile-avatar.png"
import { BsHeart } from "react-icons/bs"
import Submenu from '@components/Submenu';
import Link from 'next/link';
import menus from '@assets/menuItems/menuData.json'
import { menuItem } from '@lib/types/types';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';
import { wishListToggle } from '@lib/common';
import { WishlistSidebar } from '@components';
import { useUserContext } from '@lib/context api/providers/UserProvider';


const Headerv1: React.FC = () => {

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

    return (
        <>
            <header className={`absolute w-full text-white bg-transparent z-40`} >

                {/* Desktop Device */}
                <nav className='grid grid-cols-5 items-center py-2 px-6'>
                    <div className='col-span-1 flex justify-start'>
                        <Link className='' href='/'><Image className='px-2' src={Logo} width={100} height={42} alt='925clo_logo' /></Link>
                    </div>

                    {/* Main Menu */}
                    <div className="md:block hidden col-span-3">
                        <ul className='flex justify-center items-center'>
                            <Link href="/generate_outfit"><li className={`text-xs sm:text-sm px-6 py-2 rounded-[13px] uppercase hover:bg-white/10`}>Generate Outfit</li></Link>
                            <Link href="/style_profile"><li className={`text-xs sm:text-sm px-6 py-2 rounded-[13px] uppercase hover:bg-white/10`}>Style Profile</li></Link>
                            <li onClick={() => { handleToggle(menus.season.id, menus.season.seasons) }} className={`text-xs sm:text-sm px-6 py-2 rounded-[13px] uppercase hover:bg-white/10 cursor-pointer`}>Shop Seasons</li>
                            <li onClick={() => { handleToggle(menus.product_type.id, menus.product_type.product_types) }} className={`text-xs sm:text-sm px-6 py-2 rounded-[13px] uppercase hover:bg-white/10 cursor-pointer`}>Shop Product</li>
                            <li onClick={() => { handleToggle(menus.occasion.id, menus.occasion.occasions) }} className={`text-xs sm:text-sm px-6 py-2 rounded-[13px] uppercase hover:bg-white/10 cursor-pointer`}>Shop by Occasion</li>
                        </ul>
                    </div>
                    {/* Profile Menu */}
                    <div className='md:block hidden col-span-1'>
                        <ul className='flex flex-row justify-end items-center'>
                            <Link href='/how_it_works'>
                                <li className={`text-xs sm:text-sm px-6 py-2 rounded-[13px] uppercase hover:bg-white/10 cursor-pointer`}>How it Works</li>
                            </Link>
                            {user &&
                                <>
                                    <li className='text-xs uppercase px-3 cursor-pointer' onClick={() => { wishListToggle(setWishlistIsOpen, wishlistIsOpen) }}><BsHeart size={'1.2rem'} /></li>
                                    <Link href='/dashboard'><li className='px-3 cursor-pointer'><Image className='rounded-full' src={Avatar} width={30} height={30} alt='customer-rofile-pic' /></li></Link>
                                </>}
                        </ul>
                    </div>
                </nav>
            </header>
            <Submenu menuData={menuData} />
            <WishlistSidebar />
        </>
    )
}

export default Headerv1;