'use client'
import { Product } from '@lib/types/types';
import React, { Suspense, use } from 'react'
import Image from 'next/image';
import WishlistProductCard from './WishlistProductCard';


interface WIshlistOutfitsProps {
    id: number
    products: Product[];
}


const WishlistOutfits: React.FC<WIshlistOutfitsProps> = ({ id, products }) => {


    return (
        <div className='w-full'>
            <div>
                <div className='flex justify-between items-center p-5'>
                    <p className='text-m font-bold font-inter uppercase'>Outfit {id}</p>
                    <button className='uppercase border border-black px-5 py-2 rounded-lg text-xs font-inter font-normal'>
                        Remove Outfit From Wishlist
                    </button>
                </div>
                <div></div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 rounded-3xl '>
                {products.map((product: Product, index) => <WishlistProductCard key={product.id} product={product} />
                )}

            </div>
        </div>
    )
}

export default WishlistOutfits;