'use client'
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';
import React from 'react'

const Herov1: React.FC = () => {

    const { isHovering, menuItemData } = useDropdownMenuContext();





    return (
        <div style={{
            backgroundImage: `${isHovering ? `url(${menuItemData?.fullImg})` : 'url(https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}`
        }} className='bg-cover bg-center min-h-screen max-h-screen'>
            <div className='bg-cover min-h-screen max-h-screen bg-black/20'>
                <div className='h-60 overflow-hidden bg-gradient-to-b from-black/80 to-transparent'></div>
            </div>
        </div>
    )
}

export default Herov1;