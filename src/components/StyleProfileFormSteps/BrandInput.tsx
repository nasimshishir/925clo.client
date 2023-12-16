'use client'
import React, { useState } from 'react'
import { IoIosAlert } from 'react-icons/io';
import { TfiAngleLeft } from 'react-icons/tfi';
import { AutocompleteSearchBoxCity, AutocompleteSearchBoxCountry, Buttonv1 } from '@components';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';

const BrandInput: React.FC = () => {

    const { styleProfileformStep, setStyleProfileformStep } = useDropdownMenuContext()


    const [error, setError] = useState<string | null>(null)

    const handleClick = () => {
        setStyleProfileformStep(styleProfileformStep + 1)
    }

    return (
        <div className='h-full grid grid-cols-1 lg:grid-cols-2'>
            <div className='pt-10 lg:pt-16 items-center mx-auto lg:w-3/4'>
                <div className='flex items-center mb-8 lg:hidden'>
                    <TfiAngleLeft size={12} /><span className='uppercase text-xs font-thin'>Back</span>
                    <p className='hidden lg:block uppercase text-xs font-thin grow text-center'>{`Style Profile ${styleProfileformStep}/7 Completed`}</p>
                </div>
                <h2 className='text-black sec_title mb-2'>What are your favourite Brands?</h2>
                <p className='text-black sec_desc mb-5'>We’ve all got our favourites.By selecting your top five, we can ensure your style profile offers more of what you love.</p>
                <div>
                    {error && <p className='flex items-center p-3 bg-red-300 text-white rounded-lg uppercase'><span><IoIosAlert className='me-5' size={13} /></span>{error}</p>}
                </div>
                {/* Brandss Inputs */}
                <div className='h-[70vh] flex flex-col justify-between'>
                    <div className=''>
                        <AutocompleteSearchBoxCity options={[]} placeholder='Search Brands' />
                        <div className='grid grid-cols-5 gap-2 mt-5'>
                            <div className='h-36 rounded-xl bg-gray-400'></div>
                            <div className='h-36 rounded-xl bg-gray-400'></div>
                            <div className='h-36 rounded-xl bg-gray-400'></div>
                            <div className='h-36 rounded-xl bg-gray-400'></div>
                            <div className='h-36 rounded-xl bg-gray-400'></div>
                            <div className='h-36 rounded-xl bg-gray-400'></div>
                            <div className='h-36 rounded-xl bg-gray-400'></div>
                            <div className='h-36 rounded-xl bg-gray-400'></div>
                            <div className='h-36 rounded-xl bg-gray-400'></div>
                            <div className='h-36 rounded-xl bg-gray-400'></div>
                            <div className='h-36 rounded-xl bg-gray-400'></div>
                            <div className='h-36 rounded-xl bg-gray-400'></div>
                            <div className='h-36 rounded-xl bg-gray-400'></div>
                            <div className='h-36 rounded-xl bg-gray-400'></div>
                            <div className='h-36 rounded-xl bg-gray-400'></div>
                        </div>

                    </div>
                    <div>
                        <Buttonv1 css='mb-5 w-full h-[3rem] lg:h-[4.375rem]' onClick={() => handleClick()}>Next Step</Buttonv1>
                        <div className='hidden lg:flex items-center'>
                            <><TfiAngleLeft className='cursor-pointer' size={12} /><span className='cursor-pointer uppercase text-sm font-thin'>Back</span></>
                            <p className='uppercase text-sm font-thin grow text-center'>{`Style Profile ${styleProfileformStep}/7 Completed`}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden lg:block bg-top bg-cover bg-brands_bg' ></div>
        </div>
    )
}

export default BrandInput;