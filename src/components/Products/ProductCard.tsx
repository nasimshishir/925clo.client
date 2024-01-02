'use cilent'
import Image from 'next/image';
import React, { useState } from 'react'
import { Product } from '@lib/types/types';
import { HeartSvg, Buttonv1 } from '@components';

type productProps = {
    product: Product
}

const ProductCard: React.FC<productProps> = ({ product }) => {

    const { id, title, ...rest } = product


    return (
        <div className={`rounded-3xl bg-white p-5`}>
            <div className='flex justify-end'>
                <HeartSvg />
            </div>
            <div className={`grid grid-cols-1 h-52 md:h-[30rem] relative py-5`}>
                <div className='h-4/5 w-full relative m-auto'>
                    <Image className={`object-contain`} src={rest.image} alt={title} fill />
                </div>
            </div>
            <div className=''>
                <p className='text-[0.875rem] uppercase font-inter font-semibold'>{title.length > 12 ? title.substring(0, 12) : title}</p>
                <p className='text-[0.75rem]'>{rest.description.slice(0, 60)}...</p>
            </div>
            <div className={`flex justify-between items-center w-full mt-8`}>
                <div>
                    <p className='text-[0.875rem] uppercase font-inter font-semibold'>£{rest.price}</p>
                </div>
                <div>
                    <button
                        className={`text-[0.875rem] text-white bg-primary_orange border border-primary_orange rounded-[1rem] uppercase font-inter font-light text-center hover:bg-secondary_orange hover:transition-all w-36 h-[2.75rem]`}
                        {...rest}
                    >
                        {'Buy Now'}
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ProductCard;