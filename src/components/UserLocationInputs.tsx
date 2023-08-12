'use client'

import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react'
import { BiSearch } from 'react-icons/bi';
import { IoIosAlert } from 'react-icons/io';
import Buttonv1 from './Buttons/Button.v1';
import { TfiAngleLeft } from 'react-icons/tfi';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';

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
    { name: 'search the country' },
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


const UserLocationInputs: React.FC = () => {

    const { styleProfileformStep, setStyleProfileformStep } = useDropdownMenuContext()

    const [error, setError] = useState<string | null>(null)
    const [country, setCountry] = useState(countries[0])
    const [selected, setSelected] = useState(people[0])

    const handleClick = () => {
        console.log(country.name);
        console.log(selected.name);

        if ((country.name !== 'search the country') && (selected.name !== 'search the city')) {
            setStyleProfileformStep(styleProfileformStep + 1)
        } else if (country.name === 'search the country') {
            setError('Please Select Your Country')
        } else if (selected.name === 'search the city') {
            setError('Please Select your City')
        }

        console.log(error);
    }

    return (
        <div className='h-screen grid grid-cols-1 lg:grid-cols-2'>
            <div className='bg-white pt-28 items-center mx-auto w-3/4'>
                <div className='flex items-center mb-8 lg:hidden'>
                    <TfiAngleLeft size={12} /><span className='uppercase text-xs font-thin'>Back</span>
                    <p className='hidden lg:block uppercase text-xs font-thin grow text-center'>Style Profile 0/7 Completed</p>
                </div>
                <h2 className='text-black sec_title mb-2'>Where in the World are you?</h2>
                <p className='text-black sec_desc mb-5'>In this style profile we ask for your preferences on brands, item types and colours to help us learn more about you and your individual style.
                </p>
                <div>
                    {error && <p className='flex items-center p-3 bg-red-300 text-white rounded-lg uppercase'><span><IoIosAlert className='me-5' size={13} /></span>{error}</p>}
                    <div className="cursor-pointer">
                        <Listbox value={country} onChange={setCountry} >
                            <div className="relative mt-1">
                                <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-[#F6F6F6] py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                    <span className="block truncate uppercase">{country.name}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <BiSearch /></span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="relative mt-2 max-h-60 w-full overflow-auto rounded-md bg-[#F6F6F6] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {countries.map((contrye, personIdx) => (
                                            <Listbox.Option
                                                key={personIdx}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none py-2 pl-10 pr-4 uppercase ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                    }`
                                                }
                                                value={contrye}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${country ? 'font-medium uppercase' : 'font-normal'
                                                                }`}
                                                        >
                                                            {contrye.name}
                                                        </span>
                                                        {country ? (
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
                    <div className=''>
                        <Listbox value={selected} onChange={setSelected} >
                            <div className="relative mt-1">
                                <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-[#F6F6F6] py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                    <span className="block truncate uppercase">{selected.name}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <BiSearch /></span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="relative mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {people.map((person, personIdx) => (
                                            <Listbox.Option
                                                key={personIdx}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none py-2 pl-10 pr-4 uppercase ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                    }`
                                                }
                                                value={person}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${selected ? 'font-medium uppercase' : 'font-normal'
                                                                }`}
                                                        >
                                                            {person.name}
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
                <Buttonv1 css='my-5 w-full' onClick={() => handleClick()}>Next Step</Buttonv1>
                <div className='hidden lg:flex items-center mt-8'>
                    <><TfiAngleLeft className='cursor-pointer' size={12} /><span className='cursor-pointer uppercase text-xs font-thin'>Back</span></>
                    <p className='uppercase text-xs font-thin grow text-center'>Style Profile 0/7 Completed</p>
                </div>

            </div>
            <div className='hidden lg:block bg-cover' style={{ backgroundImage: 'url(/img/earth.png)' }} ></div>
        </div>
    )
}

export default UserLocationInputs