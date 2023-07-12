'use client'
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';
import React from 'react'

const Herov2: React.FC = () => {

    const { isHovering, menuItemData } = useDropdownMenuContext();





    return (
        <div className='bg-slate-500 bg-cover bg-center min-h-screen max-h-screen'>
            <div className='bg-cover min-h-screen max-h-screen bg-black/20'>
                <div className='h-60 overflow-hidden bg-gradient-to-b from-black/80 to-transparent'></div>
            </div>
        </div>
    )
}

export default Herov2;