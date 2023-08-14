'use client'
import React, { Fragment, useState } from 'react'
import Buttonv1 from './Buttons/Button.v1';
import { TfiAngleDown, TfiAngleLeft } from 'react-icons/tfi';
import { IoIosAlert } from 'react-icons/io';
import { Listbox, Transition } from '@headlessui/react';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';


const shoeSizes = [
    'select shoe size uk', '38', '39', '40', '41', '42', '43', '44', '45', '46'
]

const SizeInput: React.FC = () => {

    const { styleProfileformStep, setStyleProfileformStep } = useDropdownMenuContext()



    const [footwearSize, setFootwearSize] = useState(shoeSizes[0])
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

                    {/* Shoe Size */}
                    <div className='mt-7'>
                        <div className="cursor-pointer w-full lg:w3/4">
                            <Listbox value={footwearSize} onChange={setFootwearSize} >
                                <div className="relative mt-1">
                                    <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-[#F6F6F6] py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-xs">
                                        <span className="block truncate uppercase">{footwearSize}</span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <TfiAngleDown /></span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="relative mt-2 max-h-60 w-full overflow-auto rounded-md bg-[#F6F6F6] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-xs">
                                            {shoeSizes.map((shoeSize, shoeSizeIdx) => (
                                                <Listbox.Option
                                                    key={shoeSizeIdx}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 uppercase ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                        }`
                                                    }
                                                    value={shoeSize}
                                                >
                                                    {({ selected }) => (
                                                        <>
                                                            <span
                                                                className={`block truncate ${selected ? 'font-normal uppercase' : 'font-light'
                                                                    }`}
                                                            >
                                                                {shoeSize}
                                                            </span>
                                                            {selected ? (
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600 uppercase">
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                    </div>

                </div>
                <Buttonv1 css='my-5 w-full' onClick={() => handleClick()}>Next Step</Buttonv1>
                <div className='hidden lg:flex items-center mt-8'>
                    <><TfiAngleLeft className='cursor-pointer' size={12} /><span className='cursor-pointer uppercase text-xs font-thin'>Back</span></>
                    <p className='uppercase text-xs font-thin grow text-center'>{`Style Profile ${styleProfileformStep}/7 Completed`}</p>
                </div>

            </div>
            <div className='hidden lg:block bg-top bg-cover' style={{ backgroundImage: 'url(/img/sizeInputBg.png)' }} ></div>
        </div>
    )
}

export default SizeInput;