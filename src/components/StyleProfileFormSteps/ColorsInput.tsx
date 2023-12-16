'use client'
import React, { useState } from 'react'
import { IoIosAlert } from 'react-icons/io';
import { TfiAngleLeft } from 'react-icons/tfi';
import { AutocompleteSearchBoxCity, AutocompleteSearchBoxCountry, Buttonv1 } from '@components';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';

const ColorsInput: React.FC = () => {

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
                <h2 className='text-black sec_title mb-2'>What are your least favourite colours?</h2>
                <p className='text-black sec_desc mb-5'>Select your five least favourite colours.</p>
                <div>
                    {error && <p className='flex items-center p-3 bg-red-300 text-white rounded-lg uppercase'><span><IoIosAlert className='me-5' size={13} /></span>{error}</p>}
                </div>
                {/* Brandss Inputs */}
                <div className='h-[68vh] flex flex-col justify-between'>
                    <div className=''>
                        <div className='grid grid-cols-4 gap-2 mt-5 w-3/4'>
                            <div className='h-28 rounded-xl bg-[#F9F9F9] flex justify-center items-center'>white</div>
                            <div className='h-28 rounded-xl bg-[#F4F4E4] flex justify-center items-center'>white</div>
                            <div className='h-28 rounded-xl bg-[#E1C5B4] flex justify-center items-center'>white</div>
                            <div className='h-28 rounded-xl bg-[#DED4C8] flex justify-center items-center'>white</div>
                            <div className='h-28 rounded-xl bg-[#949494] flex justify-center items-center'>white</div>
                            <div className='h-28 rounded-xl bg-[#596750] flex justify-center items-center'>white</div>
                            <div className='h-28 rounded-xl bg-[#7E4E38] flex justify-center items-center'>white</div>
                            <div className='h-28 rounded-xl bg-[#953E47] flex justify-center items-center'>white</div>
                            <div className='h-28 rounded-xl bg-[#326FDA] flex justify-center items-center'>white</div>
                            <div className='h-28 rounded-xl bg-[#803EAC] flex justify-center items-center'>white</div>
                            <div className='h-28 rounded-xl bg-[#F058A3] flex justify-center items-center'>white</div>
                            <div className='h-28 rounded-xl bg-[#F40002] flex justify-center items-center'>white</div>
                            <div className='h-28 rounded-xl bg-[#F08213] flex justify-center items-center'>white</div>
                            <div className='h-28 rounded-xl bg-[#F9C400] flex justify-center items-center'>white</div>
                            <div className='h-28 rounded-xl bg-[#000000] flex justify-center items-center'>white</div>
                            <div className='h-28 rounded-xl bg-green-500 flex justify-center items-center'>white</div>
                        </div>

                    </div>
                    <div>
                        <Buttonv1 css='mb-5 w-3/4 h-[3rem] lg:h-[4.375rem]' onClick={() => handleClick()}>Next Step</Buttonv1>
                        <div className='hidden lg:flex items-center w-3/4'>
                            <><TfiAngleLeft className='cursor-pointer' size={12} /><span className='cursor-pointer uppercase text-sm font-thin'>Back</span></>
                            <p className='uppercase text-sm font-thin grow text-center'>{`Style Profile ${styleProfileformStep}/7 Completed`}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden lg:block bg-top bg-cover bg-colors_bg' ></div>
        </div>
    )
}

export default ColorsInput;