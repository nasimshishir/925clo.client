'use client'
import React from 'react';
import Buttonv1 from './Buttons/Button.v1';
import { TfiAngleLeft } from 'react-icons/tfi';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';
import { wishListToggle } from '@lib/common';
// import { wishListToggle } from '@lib/common';

// interface wishlistProps {
//     wishListToggle: () => void,
// }

const WishlistSidebar: React.FC = () => {
    const { wishlistIsOpen, setWishlistIsOpen } = useDropdownMenuContext()


    return (
        <div className={`text-black duration-500 ease-out transition-all ${wishlistIsOpen ? 'fixed w-screen h-full inset-0 bg-gray-900/20 z-30' : 'invisible'}`}>
            {/* desktop */}
            <div className={`hidden lg:grid absolute right-0 top-0 w-full lg:w-[30vw] py-20 bg-white lg:h-screen duration-500 ease-out transition-all ${wishlistIsOpen ? '' : 'translate-x-full'}`}>
                <div className='w-4/5 mx-auto'>

                    {/* Header */}
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center ps-2' onClick={() => { wishListToggle(setWishlistIsOpen, wishlistIsOpen) }}>
                            <TfiAngleLeft className='cursor-pointer' size={12} /><span className='cursor-pointer uppercase text-xs font-thin'>Back</span>
                        </div>
                        <div>
                            <h6 className='uppercase text-2xl font-bold'>Wishlist</h6>
                        </div>
                    </div>

                    {/* Color Filter */}


                    {/* Brands Filter */}

                    <div className='mt-5'>
                        <Buttonv1 css='w-36'>Apply Filters</Buttonv1>
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className={`lg:hidden grid absolute bottom-0 right-0 w-full py-10 bg-white h-[45vh] duration-500 ease-out transition-all ${wishlistIsOpen ? '' : 'translate-y-full'}`}>
                <div className='w-4/5 mx-auto'>

                    {/* Header */}
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center ps-2' onClick={() => { wishListToggle(setWishlistIsOpen, wishlistIsOpen) }}>
                            <TfiAngleLeft className='cursor-pointer' size={12} /><span className='cursor-pointer uppercase text-xs font-thin'>Back</span>
                        </div>
                        <div>
                            <h6 className='uppercase text-2xl font-bold'>Filters</h6>
                        </div>
                    </div>

                    {/* Color Filter */}


                    {/* Brands Filter */}

                    <div className='mt-5'>
                        <Buttonv1 css='w-36'>Apply Filters</Buttonv1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishlistSidebar;