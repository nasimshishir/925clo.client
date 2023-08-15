'use-client'

import Image from 'next/image';
import React, { useState } from 'react'
import Link from 'next/link';
import { menuItem } from '@lib/types/types';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';


type SubMenuProps = {
    menuData: menuItem[] | null
}

const Submenu: React.FC<SubMenuProps> = ({ menuData }) => {

    const { menuItemData, setMenuItemData } = useDropdownMenuContext();

    const handleHover = (menuItem: menuItem) => {
        // setIsHovering(true)
        setMenuItemData(menuItem)
    }

    const off = () => {
        // setIsHovering(false)
    }

    return (
        <div className={`flex max-h-screen h-auto text-white mt-10 mx-6`}>

            {/* Sub-Menu Items */}

            <div className='hidden lg:flex flex-wrap'>
                {menuData && menuData.map(menu =>
                    <>
                        <div onMouseEnter={() => { handleHover(menu) }} onMouseLeave={off} className='grid px-1 group cursor-pointer'>
                            <Image className='rounded-md' src={menu.img} alt='menu-item' width={160} height={96} />
                            <div className={`text-xs uppercase mx-auto group-hover:bg-white/10 px-4 py-1 mt-3 group-hover:rounded-[13px]`}>{menu.title}</div>
                        </div>
                    </>
                )}
            </div>

            {/* Sub-Menu Details */}
            {menuItemData &&
                <div className='w-1/4 ms-8'>
                    <h3 className='text-2xl font-bold uppercase mb-2'>{menuItemData?.title}</h3>
                    <p className='text-xs font-extralight'>{menuItemData?.desc}</p>
                </div>}
        </div>
    )
}

export default Submenu;