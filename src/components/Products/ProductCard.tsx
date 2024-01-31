'use cilent'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Product } from '@lib/types/types';
import { HeartSvg, Buttonv1 } from '@components';

type productProps = {
    product: Product
}

const ProductCard: React.FC<productProps> = ({ product }) => {

    const { id, product_title, ...rest } = product
    const brandLength = rest.brand?.brand.length

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
        <div className={`rounded-3xl bg-white p-5`}>
            <div className='flex justify-end'>
                <button><HeartSvg /></button>
            </div>
            <div className={`grid grid-cols-1 h-[10rem] md:h-[30rem] relative py-5`}>
                <div className='h-4/5 w-full relative m-auto'>
                    <Image className={`object-contain`} src={`${rest.image}`} alt={product_title} fill />
                </div>
            </div>
            <div className='grid gap-2'>
                <p className='text-[1rem] uppercase font-inter font-semibold'>{rest.brand && rest.brand.brand}</p>
                <p className='text-[0.875rem] capitalize'>{product_title}</p>
            </div>
            <div className={`flex justify-between items-center w-full mt-8`}>
                <div>
                    <p className='text-[1rem] uppercase font-inter font-semibold'>£{rest.price}</p>
                </div>
                <div>
                    <button
                        className={`text-[0.875rem] text-white bg-primary_orange border border-primary_orange rounded-xl uppercase font-inter font-light text-center hover:bg-secondary_orange hover:transition-all w-32 h-[2.75rem]`}
                    >
                        {'Buy Now'}
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ProductCard;