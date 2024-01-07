'use client'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { TfiAngleDown } from "react-icons/tfi";
import { GoCheck } from "react-icons/go";
import { FaCircle, FaRegCircle } from 'react-icons/fa';
const people = [
    { name: 'Recomended' },
    { name: 'price low to high' },
    { name: 'price high to low' },
    { name: 'New In' },
]

export default function SortSelectField() {
    const [selected, setSelected] = useState(people[0])

    return (
        <div className="w-full">
            <Listbox value={selected} onChange={setSelected}>
                <div >
                    <Listbox.Button className="relative w-full cursor-default rounded-[1rem] py-5 pl-5 pr-6 text-left sm:text-sm bg-primary_orange text-white">
                        <span className="font-inter text-lg uppercase">SORT</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
                            <TfiAngleDown
                                className="h-5 w-5 text-white"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="max-h-60 w-full overflow-auto py-1 text-base focus:outline-none sm:text-sm">
                            {people.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-5 pr-6 uppercase`
                                    }
                                    value={person}
                                >
                                    {({ selected }) => (
                                        <>
                                            <div
                                                className={`truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {<div className='flex justify-between'>
                                                    <div className='flex gap-3'>
                                                        <span className='uppercase text-sm'>{person.name}</span>
                                                    </div>
                                                    <div>
                                                        {selected ? <FaCircle color='#F25200' /> : <FaRegCircle color='#c2c2c2' />}
                                                    </div>
                                                </div>}
                                            </div>
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}
