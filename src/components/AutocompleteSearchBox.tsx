'use client'
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { BsFillArrowDownSquareFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';

interface options {
    code?: number;
    name: string;
}
const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
    { id: 7, name: 'Wade Cooper' },
    { id: 8, name: 'Arlene Mccoy' },
    { id: 9, name: 'Devon Webb' },
    { id: 10, name: 'Tom Cook' },
    { id: 11, name: 'Tanya Fox' },
    { id: 12, name: 'Hellen Schmidt' },
]

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
            : people.filter((person) =>
                person.name
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
                            displayValue={(person: options) => person.name}
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
                                filtered.map((person) => (
                                    <Combobox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                                            }`
                                        }
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {person.name}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                            }`}
                                                    >
                                                        <BsFillArrowDownSquareFill className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
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
