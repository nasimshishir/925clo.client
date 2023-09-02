'use client'
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';
import React from 'react'
import { BsPlus } from 'react-icons/bs';
import ProductFilterSidebar from './ProductFilterSidebar';

const ProductsPageHead = () => {

    const { isFilterBarOpen, setIsFilterBarOpen } = useDropdownMenuContext()

    return (
        <>
            <div className='pt-20 px-2 lg:px-8 bg-white'>
                <div className='flex justify-between items-baseline'>
                    <div className='hidden lg:block'>
                        <p className='uppercase text-[0.6rem]'>{'Products>Shop Season'}</p>
                    </div>
                    <div>
                        <h2 className='uppercase text-2xl font-bold'>{'Summer'}</h2>
                    </div>
                    <div className='flex justify-center border border-black rounded-lg px-5 py-2 cursor-pointer' onClick={() => { setIsFilterBarOpen(!isFilterBarOpen) }}>
                        <p className='uppercase text-xs'>filters </p><BsPlus />
                    </div>
                </div>
            </div >
        </>
    )

}

export default ProductsPageHead;