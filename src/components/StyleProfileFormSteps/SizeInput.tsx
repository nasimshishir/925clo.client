'use client'
import React, { Fragment, useState } from 'react'
import { Buttonv1 } from '@components';
import { TfiAngleDown, TfiAngleLeft } from 'react-icons/tfi';
import { IoIosAlert } from 'react-icons/io';
import { Listbox, Transition } from '@headlessui/react';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';


const shoeSizes = [
    'select shoe size uk', '38', '39', '40', '41', '42', '43', '44', '45', '46'
]

const SizeInput: React.FC = () => {

    const { styleProfileformStep, setStyleProfileformStep } = useDropdownMenuContext()



    const [topSize, setTopSize] = useState<string | null>(null)
    const [bottomSize, setBottomSize] = useState<string | null>(null)
    const [footwearSize, setFootwearSize] = useState(shoeSizes[0])
    const [error, setError] = useState<string | null>(null)

    const handleClick = () => {
        setStyleProfileformStep(styleProfileformStep + 1)

    }

    return (
        <div className='h-full grid grid-cols-1 lg:grid-cols-2'>
            <div className='pt-10 lg:pt-20 items-center mx-auto w-3/4'>
                <div className='flex items-center mb-8 lg:hidden'>
                    <TfiAngleLeft size={12} /><span className='uppercase text-sm font-thin'>Back</span>
                    <p className='hidden lg:block uppercase text-sm font-thin grow text-center'>{`Style Profile ${styleProfileformStep}/7 Completed`}</p>
                </div>
                <h2 className='text-black sec_title mb-2'>Please Tell us Your Sizes</h2>
                <p className='text-black sec_desc mb-10'>We know that sizing can be tricky. To ensure we get this right, select your average size across all brands, or use your best-fitting pieces as a guide.</p>
                <div>
                    {error && <p className='flex items-center p-3 bg-red-300 text-white rounded-lg uppercase'><span><IoIosAlert className='me-5' size={13} /></span>{error}</p>}
                </div>
                {/* Size Inputs */}
                <div className='h-[65vh] flex flex-col justify-between'>
                    <div className=''>
                        {/* Top Size */}
                        <div>
                            <h6 className='uppercase text-sm'>Select Top Size</h6>
                            <ul className='grid grid-cols-6 lg:grid-cols-10 gap-2 items-center mt-3'>
                                <li className={`flex bg-gray-100 hover:bg-gray-200 rounded-lg text-center uppercase text-sm font-inter cursor-pointer lg:h-16 items-center justify-center`}>
                                    xxs
                                </li>
                                <li className={`flex bg-gray-100 hover:bg-gray-200 rounded-lg text-center uppercase text-sm font-inter cursor-pointer lg:h-16 items-center justify-center`}>
                                    xs
                                </li>
                                <li className={`flex bg-gray-100 hover:bg-gray-200 rounded-lg text-center uppercase text-sm font-inter cursor-pointer lg:h-16 items-center justify-center`}>
                                    s
                                </li>
                                <li className={`flex bg-gray-100 hover:bg-gray-200 rounded-lg text-center uppercase text-sm font-inter cursor-pointer lg:h-16 items-center justify-center`}>
                                    m
                                </li>
                                <li className={`flex bg-gray-100 hover:bg-gray-200 rounded-lg text-center uppercase text-sm font-inter cursor-pointer lg:h-16 items-center justify-center`}>
                                    l
                                </li>
                                <li className={`flex bg-gray-100 hover:bg-gray-200 rounded-lg text-center uppercase text-sm font-inter cursor-pointer lg:h-16 items-center justify-center`}>
                                    xl
                                </li>
                                <li className={`flex bg-gray-100 hover:bg-gray-200 rounded-lg text-center uppercase text-sm font-inter cursor-pointer lg:h-16 items-center justify-center`}>
                                    xxl
                                </li>
                            </ul>
                        </div>

                        {/* Bottom Size */}
                        <div className='mt-7'>
                            <h6 className='uppercase text-sm'>Select Bottom Size</h6>
                            <ul className='grid grid-cols-6 lg:grid-cols-10 gap-2 items-center mt-3'>
                                <li className={`flex bg-gray-100 hover:bg-gray-200 rounded-lg text-center uppercase text-sm font-inter cursor-pointer lg:h-16 items-center justify-center`}>
                                    xxs
                                </li>
                                <li className={`flex bg-gray-100 hover:bg-gray-200 rounded-lg text-center uppercase text-sm font-inter cursor-pointer lg:h-16 items-center justify-center`}>
                                    xs
                                </li>
                                <li className={`flex bg-gray-100 hover:bg-gray-200 rounded-lg text-center uppercase text-sm font-inter cursor-pointer lg:h-16 items-center justify-center`}>
                                    s
                                </li>
                                <li className={`flex bg-gray-100 hover:bg-gray-200 rounded-lg text-center uppercase text-sm font-inter cursor-pointer lg:h-16 items-center justify-center`}>
                                    m
                                </li>
                                <li className={`flex bg-gray-100 hover:bg-gray-200 rounded-lg text-center uppercase text-sm font-inter cursor-pointer lg:h-16 items-center justify-center`}>
                                    l
                                </li>
                                <li className={`flex bg-gray-100 hover:bg-gray-200 rounded-lg text-center uppercase text-sm font-inter cursor-pointer lg:h-16 items-center justify-center`}>
                                    xl
                                </li>
                                <li className={`flex bg-gray-100 hover:bg-gray-200 rounded-lg text-center uppercase text-sm font-inter cursor-pointer lg:h-16 items-center justify-center`}>
                                    xxl
                                </li>
                            </ul>
                        </div>

                        {/* Shoe Size */}
                        <div className='mt-7'>
                            <div className="cursor-pointer w-full lg:w3/4">
                                <Listbox value={footwearSize} onChange={setFootwearSize} >
                                    <div className="relative mt-1">
                                        <Listbox.Button className="h-[3rem] lg:h-[4.375rem] relative w-full cursor-pointer rounded-[1rem] bg-[#F6F6F6] pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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
                                            <Listbox.Options className="relative mt-2 max-h-44 w-full overflow-auto rounded-md bg-[#F6F6F6] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                    <div>
                        <Buttonv1 css='mb-5 w-full h-[3rem] lg:h-[4.375rem]' onClick={() => handleClick()}>Next Step</Buttonv1>
                        <div className='hidden lg:flex items-center'>
                            <><TfiAngleLeft className='cursor-pointer' size={12} /><span className='cursor-pointer uppercase text-sm font-thin'>Back</span></>
                            <p className='uppercase text-sm font-thin grow text-center'>{`Style Profile ${styleProfileformStep}/7 Completed`}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='hidden lg:block bg-cover bg-sizes_bg' ></div>
        </div>
    )
}

export default SizeInput;