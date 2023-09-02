import Image from 'next/image';
import React from 'react';
import logo from '@assets/logo_angle.webp'
import menu from '@assets/menuItems/menuData.json'
import { RiInstagramFill } from 'react-icons/ri'
import { FaTiktok } from 'react-icons/fa'
import { BsFacebook, BsPinterest } from 'react-icons/bs'

const Footerv1: React.FC = () => {

    const user = true;

    return (
        <footer className='hidden lg:block w-full bg-primary_orange uppercase text-white font-inter text-[0.75rem]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                <div className='flex justify-center'>
                    <Image className='w-1/2' src={logo} alt='testing' width={450} height={295} />
                </div>
                <div className='grid grid-cols-4 p-10 gap-x-5'>
                    <div className=''>
                        <h6 className='mb-4'>Style Profile</h6>
                    </div>
                    <div className=''>
                        <h6 className='mb-4'>Shop Seasons</h6>
                        {menu.season.seasons.map(item => <p key={item.id} className='font-extralight text-footer_text mb-1'>{item.title}</p>)}
                    </div>
                    <div className=''>
                        <h6 className='mb-4'>Shop Product</h6>
                        {menu.product_type.product_types.map(item => <p key={item.id} className='font-extralight text-footer_text mb-1'>{item.title}</p>)}
                    </div>
                    <div className=''>
                        <h6 className='mb-4'>Shop by Occation</h6>
                        {menu.occasion.occasions.map(item => <p key={item.id} className='font-extralight text-footer_text mb-1'>{item.title}</p>)}
                    </div>
                    <div className='mt-5'>
                        <h6>How it Works?</h6>
                    </div>
                    <div className='mt-5'>
                        <h6>Terms of Services</h6>
                    </div>
                    <div className='mt-5'>
                        <h6>Privacy Policy</h6>
                    </div>
                    <div className='mt-5 flex justify-between'>
                        <div><RiInstagramFill /></div>
                        <div><BsFacebook /></div>
                        <div><BsPinterest /></div>
                        <div><FaTiktok /></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footerv1;