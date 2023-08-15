'use client'
import React, { useState } from 'react'
import { IoIosAlert } from 'react-icons/io';
import { TfiAngleLeft } from 'react-icons/tfi';
import { Buttonv1 } from '@components';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';

const BrandInput: React.FC = () => {

    const { styleProfileformStep, setStyleProfileformStep } = useDropdownMenuContext()


    const [error, setError] = useState<string | null>(null)

    const handleClick = () => {
        setStyleProfileformStep(styleProfileformStep + 1)
    }

    return (
        <div className='max-h-screen h-screen grid grid-cols-1 lg:grid-cols-2'>
            <div className='bg-white pt-28 items-center mx-auto w-3/4'>
                <div className='flex items-center mb-8 lg:hidden'>
                    <TfiAngleLeft size={12} /><span className='uppercase text-xs font-thin'>Back</span>
                    <p className='hidden lg:block uppercase text-xs font-thin grow text-center'>{`Style Profile ${styleProfileformStep}/7 Completed`}</p>
                </div>
                <h2 className='text-black sec_title mb-2'>Please Tell us Your Sizes</h2>
                <p className='text-black sec_desc mb-5'>In this style profile we ask for your preferences on brands, item types and colours to help us learn more about you and your individual style.
                </p>
                <div>
                    {error && <p className='flex items-center p-3 bg-red-300 text-white rounded-lg uppercase'><span><IoIosAlert className='me-5' size={13} /></span>{error}</p>}
                </div>
                {/* Size Inputs */}
                <div>
                    {/* Top Size */}
                    <div>
                        <h6 className='uppercase text-sm'>Select Top Size</h6>
                        <ul className='grid grid-cols-6 lg:grid-cols-10 gap-2 items-center mt-3'>
                            <li className='bg-gray-100 hover:bg-gray-200 rounded-lg py-3 font-light text-center uppercase text-xs cursor-pointer'>
                                xxs
                            </li>
                            <li className='bg-gray-100 hover:bg-gray-200 rounded-lg py-3 font-light text-center uppercase text-xs cursor-pointer'>
                                xs
                            </li>
                            <li className='bg-gray-100 hover:bg-gray-200 rounded-lg py-3 font-light text-center uppercase text-xs cursor-pointer'>
                                s
                            </li>
                            <li className='bg-gray-100 hover:bg-gray-200 rounded-lg py-3 font-light text-center uppercase text-xs cursor-pointer'>
                                m
                            </li>
                            <li className='bg-gray-100 hover:bg-gray-200 rounded-lg py-3 font-light text-center uppercase text-xs cursor-pointer'>
                                l
                            </li>
                            <li className='bg-gray-100 hover:bg-gray-200 rounded-lg py-3 font-light text-center uppercase text-xs cursor-pointer'>
                                xl
                            </li>
                            <li className='bg-gray-100 hover:bg-gray-200 rounded-lg py-3 font-light text-center uppercase text-xs cursor-pointer'>
                                xxl
                            </li>
                        </ul>
                    </div>

                    {/* Bottom Size */}
                    <div className='mt-7'>
                        <h6 className='uppercase text-sm'>Select Bottom Size</h6>
                        <ul className='grid grid-cols-6 lg:grid-cols-10 gap-2 items-center mt-3'>
                            <li className='bg-gray-100 hover:bg-gray-200 rounded-lg py-3 font-light text-center uppercase text-xs cursor-pointer'>
                                xxs
                            </li>
                            <li className='bg-gray-100 hover:bg-gray-200 rounded-lg py-3 font-light text-center uppercase text-xs cursor-pointer'>
                                xs
                            </li>
                            <li className='bg-gray-100 hover:bg-gray-200 rounded-lg py-3 font-light text-center uppercase text-xs cursor-pointer'>
                                s
                            </li>
                            <li className='bg-gray-100 hover:bg-gray-200 rounded-lg py-3 font-light text-center uppercase text-xs cursor-pointer'>
                                m
                            </li>
                            <li className='bg-gray-100 hover:bg-gray-200 rounded-lg py-3 font-light text-center uppercase text-xs cursor-pointer'>
                                l
                            </li>
                            <li className='bg-gray-100 hover:bg-gray-200 rounded-lg py-3 font-light text-center uppercase text-xs cursor-pointer'>
                                xl
                            </li>
                            <li className='bg-gray-100 hover:bg-gray-200 rounded-lg py-3 font-light text-center uppercase text-xs cursor-pointer'>
                                xxl
                            </li>
                        </ul>
                    </div>
                </div>
                <Buttonv1 css='my-5 w-full' onClick={() => handleClick()}>Next Step</Buttonv1>
                <div className='hidden lg:flex items-center mt-8'>
                    <><TfiAngleLeft className='cursor-pointer' size={12} /><span className='cursor-pointer uppercase text-xs font-thin'>Back</span></>
                    <p className='uppercase text-xs font-thin grow text-center'>
                        {`Style Profile ${styleProfileformStep}/7 Completed`}
                    </p>
                </div>

            </div>
            <div className='hidden lg:block bg-top bg-cover' style={{ backgroundImage: 'url(/img/brandInputBg.png)' }} ></div>
        </div>
    )
}

export default BrandInput;