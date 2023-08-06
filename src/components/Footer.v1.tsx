import Image from 'next/image';
import React from 'react';
import logo from '@assets/logo_footer.webp'
import menu from '@assets/menuItems/menuData.json'
import { RiInstagramFill } from 'react-icons/ri'
import { FaTiktok } from 'react-icons/fa'
import { BsFacebook, BsPinterest } from 'react-icons/bs'

const Footerv1: React.FC = () => {

    const user = true;

    return (
        <footer className='bg-primary_orange uppercase text-white font-inter text-xs'>
            <div className='grid grid-cols-2 items-center'>
                <div>
                    <Image className='' src={logo} alt='testing' width={0} height={200} />
                </div>
                <div className='grid grid-cols-4 p-10 gap-x-5'>
                    <div className=''>
                        <span>Style Profile</span>
                    </div>
                    <div className=''>
                        <h6 className='mb-4'>Shop Seasons</h6>
                        {menu.season.seasons.map(item => <p className='font-thin text-footer_text mb-1'>{item.title}</p>)}
                    </div>
                    <div className=''>
                        <h6 className='mb-4'>Shop Product</h6>
                        {menu.product_type.product_types.map(item => <p className='font-thin text-footer_text mb-1'>{item.title}</p>)}
                    </div>
                    <div className=''>
                        <h6 className='mb-4'>Shop by Occation</h6>
                        {menu.occasion.occasions.map(item => <p className='font-thin text-footer_text mb-1'>{item.title}</p>)}
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