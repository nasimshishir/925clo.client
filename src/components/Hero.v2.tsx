'use client'
import React from 'react';
import { ClothingTypeInput, UserLocationInput, SizeInput, BrandInput, ColorsInput } from '@components';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';
import OccassionInput from './StyleProfileFormSteps/Occassions';



const Herov2: React.FC = () => {
    const { styleProfileformStep } = useDropdownMenuContext()

    return (
        <div className='h-full'>
            {(styleProfileformStep === 0) && <UserLocationInput />}
            {(styleProfileformStep === 1) && <ClothingTypeInput />}
            {(styleProfileformStep === 2) && <SizeInput />}
            {(styleProfileformStep === 3) && <BrandInput />}
            {(styleProfileformStep === 4) && <ColorsInput />}
            {(styleProfileformStep === 5) && <OccassionInput />}
        </div>
    )
}

export default Herov2;