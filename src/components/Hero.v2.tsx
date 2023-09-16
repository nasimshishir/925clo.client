'use client'
import React from 'react';
import { ClothingTypeInput, UserLocationInput, SizeInput, BrandInput } from '@components';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';



const Herov2 = () => {
    const { styleProfileformStep } = useDropdownMenuContext()

    return (
        <div className=''>
            {(styleProfileformStep === 0) && <UserLocationInput />}
            {(styleProfileformStep === 1) && <ClothingTypeInput />}
            {(styleProfileformStep === 2) && <SizeInput />}
            {(styleProfileformStep === 3) && <BrandInput />}
        </div>
    )
}

export default Herov2;