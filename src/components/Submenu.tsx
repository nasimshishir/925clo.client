'use-client'

import Image from 'next/image';
import React, { useState } from 'react'
import Link from 'next/link';
import { menuItem, menuList } from '@lib/types/types';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';


type SubMenuProps = {
    menuData: menuList[]
}




const Submenu: React.FC<SubMenuProps> = ({ menuData }) => {

    const { isHovering, setIsHovering, menuItemData, setMenuItemData } = useDropdownMenuContext();

    const handleHover = (menuItem: menuItem) => {
        setIsHovering(true)
        setMenuItemData(menuItem)
    }

    const off = () => {
        setIsHovering(false)
    }

    return (
        <div className='flex min-h-60 h-auto mt-10 text-white'>

            {/* Sub-Menu Items */}

            <div className='flex flex-wrap max-w-4xl w-3/4 p-4'>
                {menuData.map(menu =>
                    <>
                        <div onMouseEnter={() => { handleHover(menu) }} onMouseLeave={off} className='grid px-2'>
                            <Image className='rounded-md' src={menu.img} alt='menu-item' width={160} height={70} />
                            <div className='text-xs uppercase mx-auto hover:bg-white/10 px-4 py-1 mt-3 hover:rounded-[13px]'>{menu.title}</div>
                        </div>
                    </>
                )}
            </div>

            {/* Sub-Menu Details */}
            {isHovering && <div className='w-1/4 mx-6 pt-6'>
                <h3 className='text-lg font-semibold'>{menuItemData?.title}</h3>
                <p className='text-sm'>{menuItemData?.desc}</p>
            </div>}
        </div>
    )
}

export default Submenu;