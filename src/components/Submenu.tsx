'use-client'

import Image from 'next/image';
import React, { useState } from 'react'
import Link from 'next/link';
import { menuItem } from '@lib/types/types';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';


type SubMenuProps = {
    menuData: menuItem[]
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
        <div className={`flex max-h-screen h-auto text-white mt-10`}>

            {/* Sub-Menu Items */}

            <div className='hidden lg:flex flex-wrap max-w-4xl w-3/4 p-4'>
                {menuData.map(menu =>
                    <>
                        <div onMouseEnter={() => { handleHover(menu) }} onMouseLeave={off} className='grid px-2 group'>
                            <Image className='rounded-md' src={menu.img} alt='menu-item' width={180} height={108} />
                            <div className={`text-xs uppercase mx-auto group-hover:bg-white/10 px-4 py-1 mt-3 group-hover:rounded-[13px]`}>{menu.title}</div>
                        </div>
                    </>
                )}
            </div>

            {/* Sub-Menu Details */}
            {isHovering && <div className='w-1/4 mx-6 pt-6'>
                <h3 className='text-2xl font-bold uppercase mb-2'>{menuItemData?.title}</h3>
                <p className='text-sm'>{menuItemData?.desc}</p>
            </div>}
        </div>
    )
}

export default Submenu;