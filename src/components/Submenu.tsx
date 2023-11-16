'use-client'

import Image from 'next/image';
import React, { useState } from 'react'
import { menuItem } from '@lib/types/types';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';
import { useRouter } from 'next/navigation';
import { Headerv3 } from '@components';


type SubMenuProps = {
    menuData: menuItem[] | null
}

const Submenu: React.FC<SubMenuProps> = ({ menuData }) => {
    const router = useRouter();

    const { menuItemData, setMenuItemData, setItemId, setMenuData } = useDropdownMenuContext();

    const handleHover = (menuItem: menuItem) => {
        // setIsHovering(true)
        setMenuItemData(menuItem)
    }


    const handleClick = (path: string) => {
        setItemId(null);
        setMenuItemData(null);
        setMenuData(null);
        router.push(path)


    }

    return (
        <div className={`w-full max-h-screen h-screen bg-cover bg-top ${menuItemData ? 'fixed top-0 left-0 translate-y-0 z-50 duration-500 transition-all ease-out' : 'absolute duration-500 transition-all -translate-y-full -top-full'}`} style={{
            backgroundImage: `${menuItemData ? `url(${menuItemData?.fullImg})` : ''}`
        }}>
            <Headerv3 />
            <div className={`flex h-auto text-white mt-16 mx-6`}>

                {/* Sub-Menu Items */}

                <div className='hidden lg:flex flex-wrap'>
                    {menuData && menuData.map(menu =>
                        <div key={menu.id} onMouseEnter={() => { handleHover(menu) }} className='grid px-1 group cursor-pointer' onClick={() => handleClick(menu.url)}>
                            <Image className='rounded-md' src={menu.img} alt='menu-item' width={160} height={96} />
                            <div className={`text-xs uppercase mx-auto group-hover:bg-white/10 px-4 py-1 mt-3 group-hover:rounded-[13px]`}>{menu.title}</div>
                        </div>
                    )}
                </div>

                {/* Sub-Menu Details */}
                {menuItemData &&
                    <div className='w-1/4 ms-16'>
                        <h3 className='text-2xl font-bold uppercase mb-2'>{menuItemData?.title}</h3>
                        <p className='text-xs font-extralight'>{menuItemData?.desc}</p>
                    </div>}
            </div>
        </div>

    )
}

export default Submenu;