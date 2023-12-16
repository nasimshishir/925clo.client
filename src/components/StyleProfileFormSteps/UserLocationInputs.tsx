'use client'
import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react'
import { BiSearch } from 'react-icons/bi';
import { IoIosAlert } from 'react-icons/io';
import { AutocompleteSearchBoxCountry, AutocompleteSearchBoxCity, Buttonv1 } from '@components';
import { TfiAngleLeft } from 'react-icons/tfi';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';
import Image from 'next/image';
import countries from '@assets/countriesWithCities.json'

interface country {
    name: string
    code: string
    cities: string[]
}


const UserLocationInputs = () => {

    const { styleProfileformStep, setStyleProfileformStep } = useDropdownMenuContext()

    const [error, setError] = useState<string | null>(null);
    const [country, setCountry] = useState<country | null>(null);
    const [city, setCity] = useState<string | null>(null);


    console.log(country);
    console.log(city);


    return (
        <div className='h-full grid grid-cols-1 lg:grid-cols-2'>
            <div className='pt-10 lg:pt-28 items-center mx-auto w-[90%] lg:w-2/3 pb-10'>

                <h2 className='text-black sec_title mb-5'>Where in the World are you?</h2>
                <p className='text-black sec_desc'>Let us know where in the world you’re located. This helps us connect you with more local and regional that you'll love.</p>
                <div className='mt-20'>
                    {error && <p className='flex items-center p-3 bg-red-300 text-white rounded-lg uppercase'><span><IoIosAlert className='me-5' size={13} /></span>{error}</p>}

                    {/* Country ListBox */}
                    <div>
                        <AutocompleteSearchBoxCountry placeholder='Search The Country' options={countries} setItem={setCountry} />
                    </div>

                    {/* City ListBox */}
                    <div className='mt-5'>
                        <AutocompleteSearchBoxCity placeholder={country ? 'Search the City' : 'Select Country First'} options={country?.cities} setItem={setCity} />
                    </div>
                </div>
                <Buttonv1 css='mt-20 w-full h-[3rem] md:h-[4.3125rem]' onClick={() => setStyleProfileformStep(styleProfileformStep + 1)}>Next Step</Buttonv1>
                <div className='hidden lg:flex items-center mt-5'>
                    <><TfiAngleLeft className='cursor-pointer' size={12} /><span className='ms-1 uppercase text-sm'>Back</span></>
                    <p className='uppercase text-sm grow text-center'>Style Profile 0/7 Completed</p>
                </div>
                <p className='uppercase text-sm grow text-center mt-5 md:hidden'>Style Profile 0/7 Completed</p>

            </div>
            <div className='hidden lg:block bg-location_bg bg-cover bg-center'></div>
        </div>
    )
}

export default UserLocationInputs;