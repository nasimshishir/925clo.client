'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import Logo from "@assets/logo.png";
import Avatar from "@assets/profile-avatar.png"
import { BsHeart } from "react-icons/bs"
import Submenu from '@components/Submenu';
import Link from 'next/link';
import menus from '../assets/menuItems/menuData.json'
import { menuList } from '@lib/types/types';
import { useDropdownMenuContext } from '@lib/contexts/dropdownMenuContext';



const Header: React.FC = () => {

    const { menuData, setMenuData, itemId, setItemId } = useDropdownMenuContext()


    const handleToggle = (id: number | null, data: menuList[]) => {
        if (itemId === id) {
            setItemId(null)
        } else {
            setItemId(id)
        }
        setMenuData(data)

    }

    return (
        <header className='bg-transparent w-full absolute text-white'>
            <nav className='container mx-auto grid grid-cols-5 items-center py-2 mt-1'>
                <div className='col-span-1'>
                    <Link href='/'><Image src={Logo} width={70} height={29} alt='925clo_logo' /></Link>
                </div>

                {/* Main Menu */}
                <div className="md:block hidden col-span-3">
                    <ul className='flex justify-center dropdown'>
                        <li className={`text-xs tracking-[0.6px] px-6 py-3 rounded-[13px] uppercase hover:bg-white/10`}>Style Profile</li>
                        <li onClick={() => { handleToggle(menus.season.id, menus.season.seasons) }} className={`text-xs tracking-[0.6px] px-6 py-3 rounded-[13px] uppercase hover:bg-white/10`}>Shop Seasons</li>
                        <li onClick={() => { handleToggle(menus.product_type.id, menus.product_type.product_types) }} className={`text-xs tracking-[0.6px] px-6 py-3 rounded-[13px] uppercase hover:bg-white/10`}>Shop Product</li>
                        <li onClick={() => { handleToggle(menus.occasion.id, menus.occasion.occasions) }} className={`text-xs tracking-[0.6px] px-6 py-3 rounded-[13px] uppercase hover:bg-white/10`}>Shop by Occasion</li>
                    </ul>
                </div>
                {/* Profile Menu */}
                <div className='md:block hidden col-span-1'>
                    <ul className='flex flex-row justify-end items-center'>
                        <li className='text-xs tracking-[0.6px] px-6 py-2 rounded-[13px] uppercase hover:bg-white/10'>How it Works</li>
                        <li className='text-xs uppercase px-3'><BsHeart size={'1.7em'} /></li>
                        <li className='text-xs uppercase px-3'><Image className='rounded-full' src={Avatar} width={32} height={32} alt='customer-rofile-pic' /></li>
                    </ul>
                </div>
            </nav>
            {itemId && <Submenu menuData={menuData} />}
        </header>
    )
}

export default Header;