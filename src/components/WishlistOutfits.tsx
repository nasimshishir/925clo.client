'use client'
import { Product } from '@lib/types/types';
import React, { Suspense, use } from 'react'
import Image from 'next/image';
import WishlistProductCard from './WishlistProductCard';


interface WIshlistOutfitsProps {
    products: Product[];
}


const WishlistOutfits: React.FC<WIshlistOutfitsProps> = ({ products }) => {


    return (
        <div className='w-full'>
            <div>
                <div>
                    <p className='text-m font-bold font-inter uppercase'>Outfit 01</p>
                </div>
                <div></div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 rounded-3xl '>
                {products.map((product: Product) => <WishlistProductCard key={product.id} product={product} />
                )}
            </div>
        </div>
    )
}

export default WishlistOutfits;