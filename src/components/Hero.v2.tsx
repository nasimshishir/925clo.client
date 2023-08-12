'use client'
import React from 'react';
import { UserLocationInputs } from '@components';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';
import ClothingTypeInput from './ClothingTypeInput';



const Herov2: React.FC = () => {
    const { styleProfileformStep } = useDropdownMenuContext()

    console.log(styleProfileformStep);



    return (
        <div className=''>
            {(styleProfileformStep === 0) && <UserLocationInputs />}
            {(styleProfileformStep === 1) && <ClothingTypeInput />}
        </div>
    )
}

export default Herov2;