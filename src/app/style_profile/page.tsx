'use client'
import { Footerv1, Headerv2, Herov2, WishlistSidebar } from '@components';
import React from 'react';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';


const styling: React.FC = () => {

    const { wishlistIsOpen } = useDropdownMenuContext()


    return (
        <div >
            <Headerv2 />
            <Herov2 />
            <Footerv1 />
        </div>

    )
}

export default styling;