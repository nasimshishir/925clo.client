'use cilent'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Product } from '@lib/types/types';
import { HeartSvg, Buttonv1 } from '@components';

type WishlistProductProps = {
    product: Product
}

const WishlistProductCard: React.FC<WishlistProductProps> = ({ product }) => {

    const { id, product_title, ...rest } = product
    // const brandLength = rest.brand?.brand.length

    // function extractProductName(productTitle: string) {
    //     const hyphenIndex1 = productTitle.indexOf('-');
    //     const hyphenIndex2 = productTitle.indexOf('- Men');

    //     if (hyphenIndex1 !== -1 && hyphenIndex2 !== -1) {
    //         return productTitle.substring(hyphenIndex1 + 1, hyphenIndex2).trim();
    //     } else {
    //         // Return an error message or handle the case where the format is not as expected
    //         return "Invalid product title format";
    //     }
    // }

    // const cleanProductTitle = extractProductName(product_title)



    return (
        <div className={`rounded-3xl bg-white p-5 h-[42vh] flex flex-col`}>
            <div className='flex justify-end'>
                <button><HeartSvg /></button>
            </div>
            <div className='h-full w-full relative m-auto my-3'>
                <Image className={`object-contain`} src={`${rest.image}`} alt={product_title} fill />
            </div>
            <div className='flex flex-col'>
                <div className='grid gap-1'>
                    {/* {rest.brand && <p className='text-[1rem] uppercase font-inter font-semibold'>{rest.brand.brand}</p>} */}
                    <p className='text-[0.9375rem] uppercase font-inter font-semibold'>{product_title.slice(0, 10)}</p>
                    <p className='text-[0.75rem] capitalize'>{product_title.slice(0, 50)}</p>
                </div>
                <div className={`flex justify-between items-center w-full mt-8`}>
                    <div>
                        <p className='text-[1rem] uppercase font-inter font-semibold'>£{rest.price}</p>
                    </div>
                    <div>
                        <button
                            className={`text-[0.75rem] text-white bg-primary_orange border border-primary_orange rounded-xl uppercase font-inter font-light text-center hover:bg-secondary_orange hover:transition-all w-32 h-[2.5rem]`}
                        >
                            {'Buy Now'}
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishlistProductCard;