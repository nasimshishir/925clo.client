import React from 'react'
import Buttonv2 from '@components/Buttons/Button.v2'
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider'


function ProfileDropdownMenu() {

    const { setProfileDropdownIsActive } = useDropdownMenuContext()
    return (
        <div className='h-[26.5rem] w-[23.125rem] fixed top-[4.5rem] right-12 rounded-2xl bg-gray-500/5 backdrop-blur-md p-9 text-white hidden lg:flex flex-col justify-between' onMouseEnter={() => setProfileDropdownIsActive(true)} onMouseLeave={() => setProfileDropdownIsActive(false)}>
            <div>
                <p className='font-helvetica font-normal uppercase text-2xl mb-8 px-3'>Clementine Smith</p>
                <div>
                    <p className='font-inter text-sm font-normal uppercase py-2 hover:bg-white/10 rounded-lg px-3 cursor-pointer'>Profile Info</p>
                    <p className='font-inter text-sm font-normal uppercase py-2 hover:bg-white/10 rounded-lg px-3 cursor-pointer'>Style Profile</p>
                    <p className='font-inter text-sm font-normal uppercase py-2 hover:bg-white/10 rounded-lg px-3 cursor-pointer'>Wishlist</p>
                </div>
            </div>
            <div className='px-3'>
                <Buttonv2 css='w-full h-[3rem]'>Log Out</Buttonv2>
            </div>
        </div>
    )
}

export default ProfileDropdownMenu