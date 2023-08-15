'use client'
import Image from 'next/image';
import React from 'react'
import Logo from "@assets/logo_2.png";
import Logo2 from "@assets/logo.png";
import Avatar from "@assets/profile-avatar.png"
import { BsHeart } from "react-icons/bs"
import Submenu from '@components/Submenu';
import Link from 'next/link';
import menus from '../assets/menuItems/menuData.json'
import { menuItem } from '@lib/types/types';
import { useDropdownMenuContext, } from '@lib/context api/providers/DropdownMenuContextProvider';

const Headerv2: React.FC = () => {

    const { menuData, setMenuData, itemId, setItemId, menuItemData, setMenuItemData } = useDropdownMenuContext()


    const handleToggle = (id: number | null, data: menuItem[]) => {
        if (itemId === id) {
            setItemId(null);
            setMenuItemData(null)
            setMenuData(null)
        } else {
            setItemId(id)
            setMenuData(data)
            setMenuItemData(data[0])
        }
    }

    return (
        <header className={`pt-1 max-h-screen w-full absolute z-50 ${menuItemData ? 'h-screen fixed top-0 left-0 text-white bg-transparent bg-cover bg-top transition-all duration-200' : 'text-black bg-[#F6F6F6]'}`} style={{
            backgroundImage: `${menuItemData ? `url(${menuItemData?.fullImg})` : ''}`
        }}>
            <nav className={`grid grid-cols-5 items-center py-2 px-6`}>
                <div className='col-span-1 flex justify-start'>
                    <Link className='' href='/'><Image className='px-2' src={!itemId ? Logo : Logo2} width={70} height={29} alt='925clo_logo' /></Link>
                </div>

                {/* Main Menu */}
                <div className="md:block hidden col-span-3">
                    <ul className='flex justify-center items-center'>
                        <Link href="/style_profile"><li className={`text-xs tracking-[0.6px] px-6 py-2 rounded-[13px] uppercase hover:bg-[#F25200] hover:text-white`}>Style Profile</li></Link>
                        <li onClick={() => { handleToggle(menus.season.id, menus.season.seasons) }} className='text-xs tracking-[0.6px] px-6 py-2 rounded-[13px] uppercase hover:bg-[#F25200] hover:text-white cursor-pointer'>Shop Seasons</li>
                        <li onClick={() => { handleToggle(menus.product_type.id, menus.product_type.product_types) }} className='text-xs tracking-[0.6px] px-6 py-2 rounded-[13px] uppercase hover:bg-[#F25200] hover:text-white cursor-pointer'>Shop Product</li>
                        <li onClick={() => { handleToggle(menus.occasion.id, menus.occasion.occasions) }} className='text-xs tracking-[0.6px] px-6 py-2 rounded-[13px] uppercase hover:bg-[#F25200] hover:text-white cursor-pointer'>Shop by Occasion</li>
                    </ul>
                </div>
                {/* Profile Menu */}
                <div className='md:block hidden col-span-1'>
                    <ul className='flex flex-row justify-end items-center'>
                        <li className='text-xs tracking-[0.6px] px-6 py-2 rounded-[13px] uppercase hover:bg-[#F25200] hover:text-white'>How it Works</li>
                        <li className='text-xs uppercase px-3'><BsHeart size={'1.7em'} /></li>
                        <li className='text-xs uppercase px-3'><Image className='rounded-full' src={Avatar} width={32} height={32} alt='customer-rofile-pic' /></li>
                    </ul>
                    {/* <ul className='flex flex-row justify-end items-center'>
                            <li className='text-xs tracking-[0.6px] px-6 py-2 rounded-[13px] uppercase hover:bg-[#F25200] hover:text-white'>How it Works</li>
                        </ul> */}
                </div>
            </nav>
            {itemId && <Submenu menuData={menuData} />}
        </header>
    )
}

export default Headerv2