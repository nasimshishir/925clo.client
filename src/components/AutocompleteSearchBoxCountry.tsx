'use client'
import { Fragment, useState, Dispatch, SetStateAction, useEffect } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { BsFillArrowDownSquareFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import Image from 'next/image';
import { FaCircle, FaRegCircle } from 'react-icons/fa';

interface country {
    code: string;
    name: string;
    cities: string[]
}

interface AutocompleteProps {
    placeholder?: string
    options?: country[]
    setItem: Dispatch<SetStateAction<country | null>>
}

export default function AutocompleteSearchBoxCountry({ placeholder, options, setItem, }: AutocompleteProps) {
    const [selected, setSelected] = useState<country | null>(null)
    const [query, setQuery] = useState('')

    const filtered =
        query === ''
            ? options
            : options?.filter((option) => {
                return option.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            })
    useEffect(() => {
        setItem(selected)
    }, [setItem, selected])


    return (
        <div className="w-full bg-gray_bg rounded-[1rem]">
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <div className="relative w-full px-5 cursor-default overflow-hidden text-sm h-[3rem] lg:h-[4.375rem]">
                        {/* {
                            selected &&
                            <Image className='"absolute inset-y-0 left-2 flex items-center pl-2"' src={`https://flagcdn.com/w40/${selected.code.toLowerCase()}.webp`} alt={`flag-${selected.code}`} width={30} height={0} />
                        } */}
                        <Combobox.Input
                            className="w-full h-full py-2 text-sm leading-5 text-black bg-transparent placeholder:text-black/30 uppercase focus:outline-0"
                            displayValue={(country: country) => country?.name}
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
                        <Combobox.Options className="relative z-50 max-h-60 w-full overflow-auto py-1 bg-gray_bg rounded-[1rem]">
                            {filtered?.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-black">
                                    Nothing found.
                                </div>
                            ) : (
                                filtered?.map((country) => (
                                    <Combobox.Option
                                        key={country?.code}
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
