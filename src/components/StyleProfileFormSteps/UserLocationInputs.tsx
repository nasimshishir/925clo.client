'use client'
import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react'
import { BiSearch } from 'react-icons/bi';
import { IoIosAlert } from 'react-icons/io';
import { AutocompleteSearchBox, Buttonv1 } from '@components';
import { TfiAngleLeft } from 'react-icons/tfi';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';
import Image from 'next/image';

const people = [
    { name: 'search the city' },
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
]

const countries = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'AndorrA', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' }
]


const UserLocationInputs = () => {

    const { styleProfileformStep, setStyleProfileformStep } = useDropdownMenuContext()

    const [error, setError] = useState<string | null>(null)
    const [country, setCountry] = useState(countries[0])
    const [selected, setSelected] = useState(people[0])

    const handleClick = () => {

        if ((country.name !== 'search the country') && (selected.name !== 'search the city')) {
            setStyleProfileformStep(styleProfileformStep + 1)
        } else if (country.name === 'search the country') {
            setError('Please Select Your Country')
        } else if (selected.name === 'search the city') {
            setError('Please Select your city')
        }

        console.log(error);
    }



    return (
        <div className='h-full grid grid-cols-1 lg:grid-cols-2'>
            <div className='pt-28 items-center mx-auto w-2/3 pb-10'>
                <div className='flex items-center mb-8 lg:hidden'>
                    <TfiAngleLeft size={12} /><span className='uppercase text-xs font-thin'>Back</span>
                    <p className='hidden lg:block uppercase text-xs font-thin grow text-center'>Style Profile 0/7 Completed</p>
                </div>
                <h2 className='text-black sec_title mb-5'>Where in the World are you?</h2>
                <p className='text-black sec_desc'>In this style profile we ask for your preferences on brands, item types and colours to help us learn more about you and your individual style.
                </p>
                <div className='mt-20'>
                    {error && <p className='flex items-center p-3 bg-red-300 text-white rounded-lg uppercase'><span><IoIosAlert className='me-5' size={13} /></span>{error}</p>}

                    {/* Country ListBox */}
                    <div className=''>
                        <AutocompleteSearchBox placeholder='Search The Country' />
                    </div>

                    {/* City ListBox */}
                    <div className=''>

                    </div>
                </div>
                <Buttonv1 css='my-5 w-full' onClick={() => handleClick()}>Next Step</Buttonv1>
                <div className='hidden lg:flex items-center mt-8'>
                    <><TfiAngleLeft className='cursor-pointer' size={12} /><span className='cursor-pointer uppercase text-xs font-thin'>Back</span></>
                    <p className='uppercase text-xs font-thin grow text-center'>Style Profile 0/7 Completed</p>
                </div>

            </div>
            <div className='hidden lg:block bg-location_bg bg-cover bg-center'></div>
        </div>
    )
}

export default UserLocationInputs