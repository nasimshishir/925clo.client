'use client'
import React from 'react';
import { UserLocationInputs } from '@components';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';



const Herov2: React.FC = () => {
    const { styleProfileformStep } = useDropdownMenuContext()

    console.log(styleProfileformStep);



    return (
        <div className=''>
            <UserLocationInputs />
        </div>
    )
}

export default Herov2;