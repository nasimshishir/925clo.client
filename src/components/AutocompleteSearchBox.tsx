'use client'
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { BsFillArrowDownSquareFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import Image from 'next/image';
import people from '@assets/countries.json'
import { FaCircle, FaRegCircle } from 'react-icons/fa';

interface options {
    code: string;
    name: string;
}
// const people = [
//     { code: 1, name: 'Wade Cooper' },
//     { code: 2, name: 'Arlene Mccoy' },
//     { code: 3, name: 'Devon Webb' },
//     { code: 4, name: 'Tom Cook' },
//     { code: 5, name: 'Tanya Fox' },
//     { code: 6, name: 'Hellen Schmcodet' },
//     { code: 7, name: 'Wade Cooper' },
//     { code: 8, name: 'Arlene Mccoy' },
//     { code: 9, name: 'Devon Webb' },
//     { code: 10, name: 'Tom Cook' },
//     { code: 11, name: 'Tanya Fox' },
//     { code: 12, name: 'Hellen Schmidt' },
// ]

interface AutocompleteProps {
    placeholder?: string
    options?: options[]
}

export default function AutocompleteSearchBox({ placeholder }: AutocompleteProps) {
    const [selected, setSelected] = useState([])
    const [query, setQuery] = useState('')

    const filtered =
        query === ''
            ? people
            : people.filter((country) =>
                country.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    return (
        <div className="w-full bg-gray_bg rounded-[1rem]">
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <div className="relative w-full px-5 cursor-default overflow-hidden text-sm h-[4.375rem]">
                        <Combobox.Input
                            className="w-full h-full py-2 text-sm leading-5 text-black bg-transparent placeholder:text-black/30 uppercase focus:outline-0"
                            displayValue={(country: options) => country.name}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder={placeholder}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-2 flex items-center pr-2">
                            <BiSearch
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute z-50 max-h-60 w-full overflow-auto py-1 bg-gray_bg rounded-[1rem]">
                            {filtered.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-black">
                                    Nothing found.
                                </div>
                            ) : (
                                filtered.map((country) => (
                                    <Combobox.Option
                                        key={country.code}
                                        className={({ active }) =>
                                            `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'text-black' : 'text-gray-900'
                                            }`
                                        }
                                        value={country}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div
                                                    className={`truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {<div className='flex justify-between'>
                                                        <div className='flex gap-3'>
                                                            <Image src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.webp`} alt={`flag-${country.code}`} width={30} height={0} />
                                                            <span className='uppercase text-sm'>{country.name}</span>
                                                        </div>
                                                        <div>
                                                            {selected ? <FaCircle color='#F25200' /> : <FaRegCircle color='#c2c2c2' />}
                                                        </div>
                                                    </div>}
                                                </div>
                                                {/* {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                            }`}
                                                    >
                                                        <BsFillArrowDownSquareFill className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null} */}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}
