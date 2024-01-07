'use client'
import React, { useState } from 'react';
import { Buttonv1, ColorSelect, SortSelectField } from '@components';
import { TfiAngleLeft } from 'react-icons/tfi';
import { BsCircleFill, BsPlus } from 'react-icons/bs';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';
import { useProductFilterContext } from '@lib/context api/providers/ProductFilterProvider';


const ProductFilterSidebar: React.FC = () => {

    const { queryPramas, setQueryPramas } = useProductFilterContext()
    const { isFilterBarOpen, setIsFilterBarOpen } = useDropdownMenuContext()
    const [colors, setColors] = useState([]);
    const [brands, setBrands] = useState([]);




    return (
        <div className='col-span-1 flex flex-col gap-2 h-full rounded-2xl w-full'>

            {/* Sort */}
            <div className='bg-white rounded-2xl'>
                <SortSelectField />
            </div>

            {/* Filters */}
            <div className='bg-white rounded-xl'>
                <div className='w-full bg-primary_orange uppercase text-lg rounded-[1rem] py-5 pl-5 pr-6 text-white'>Filter</div>

                {/* Color Filter */}
                <div className='grid gap-5'>
                    <ColorSelect />
                    <ColorSelect />
                    <ColorSelect />
                    <ColorSelect />
                    <ColorSelect />
                </div>
            </div>
        </div>
    )
}

export default ProductFilterSidebar;