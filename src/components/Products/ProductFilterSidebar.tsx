'use client'
import React from 'react';
import { Buttonv1 } from '@components';
import { TfiAngleLeft } from 'react-icons/tfi';
import { BsPlus } from 'react-icons/bs';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';


const ProductFilterSidebar: React.FC = () => {


    const { isFilterBarOpen, setIsFilterBarOpen } = useDropdownMenuContext()


    return (
        <div className={`duration-500 ease-out transition-all ${isFilterBarOpen ? 'fixed w-screen h-full inset-0 bg-gray-900/20 z-40 duration-500 ease-out transition-all' : 'invisible duration-500 delay-500 ease-out transition-all'}`}>
            {/* desktop */}
            <div className={`hidden lg:grid absolute right-0 top-0 w-full lg:w-[30vw] py-20 bg-white lg:h-screen duration-500 ease-out transition-all ${isFilterBarOpen ? '' : 'translate-x-full'}`}>
                <div className='w-4/5 mx-auto'>

                    {/* Header */}
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center ps-2' onClick={() => { setIsFilterBarOpen(!isFilterBarOpen) }}>
                            <TfiAngleLeft className='cursor-pointer' size={12} /><span className='cursor-pointer uppercase text-xs font-thin'>Back</span>
                        </div>
                        <div>
                            <h6 className='uppercase text-2xl font-bold'>Filters</h6>
                        </div>
                    </div>

                    {/* Color Filter */}
                    <div className='mt-10'>
                        <p className='uppercase text-xs ps-2'>Colors</p>
                        <div className='flex gap-2 items-center mt-2'>
                            <div className='px-3 py-3 bg-[#f6f6f6] flex-1 rounded-lg'>
                                colors
                            </div>
                            <div className='flex justify-center border border-black rounded-lg px-5 py-2 cursor-pointer'>
                                <p className='uppercase text-xs'>Add </p><BsPlus />
                            </div>
                        </div>
                    </div>

                    {/* Brands Filter */}
                    <div className='mt-2'>
                        <p className='uppercase text-xs ps-2'>Brands</p>
                        <div className='flex gap-2 items-center mt-2'>
                            <div className='px-3 py-3 bg-[#f6f6f6] flex-1 rounded-lg'>
                                colors
                            </div>
                            <div className='flex justify-center border border-black rounded-lg px-5 py-2 cursor-pointer'>
                                <p className='uppercase text-xs'>Add </p><BsPlus />
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <Buttonv1 css='w-36'>Apply Filters</Buttonv1>
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className={`lg:hidden grid absolute bottom-0 right-0 w-full py-10 bg-white h-[45vh] duration-500 ease-out transition-all ${isFilterBarOpen ? '' : 'translate-y-full'}`}>
                <div className='w-4/5 mx-auto'>

                    {/* Header */}
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center ps-2' onClick={() => { setIsFilterBarOpen(!isFilterBarOpen) }}>
                            <TfiAngleLeft className='cursor-pointer' size={12} /><span className='cursor-pointer uppercase text-xs font-thin'>Back</span>
                        </div>
                        <div>
                            <h6 className='uppercase text-2xl font-bold'>Filters</h6>
                        </div>
                    </div>

                    {/* Color Filter */}
                    <div className='mt-10'>
                        <p className='uppercase text-xs ps-2'>Colors</p>
                        <div className='flex gap-2 items-center mt-2'>
                            <div className='px-3 py-3 bg-[#f6f6f6] flex-1 rounded-lg'>
                                colors
                            </div>
                            <div className='flex justify-center border border-black rounded-lg px-5 py-2 cursor-pointer'>
                                <p className='uppercase text-xs'>Add </p><BsPlus />
                            </div>
                        </div>
                    </div>

                    {/* Brands Filter */}
                    <div className='mt-2'>
                        <p className='uppercase text-xs ps-2'>Brands</p>
                        <div className='flex gap-2 items-center mt-2'>
                            <div className='px-3 py-3 bg-[#f6f6f6] flex-1 rounded-lg'>
                                colors
                            </div>
                            <div className='flex justify-center border border-black rounded-lg px-5 py-2 cursor-pointer'>
                                <p className='uppercase text-xs'>Add </p><BsPlus />
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <Buttonv1 css='w-36'>Apply Filters</Buttonv1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductFilterSidebar;