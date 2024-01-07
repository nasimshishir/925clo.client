'use cilent'
import Image from 'next/image';
import React, { useState } from 'react'
import { Product } from '@lib/types/types';
import { HeartSvg, Buttonv1, LockSvg } from '@components';

type productProps = {
    product: Product
}

const ProductListCard: React.FC<productProps> = ({ product }) => {

    const { id, title, ...rest } = product


    return (
        <div className='flex items-center w-full gap-5 justify-between'>
            <div className='flex gap-5 items-center'>
                <div className='h-16 w-16 relative'>
                    <Image className='object-contain' src={rest.image} alt={title} fill />
                </div>
                <div>
                    <h2 className='font-inter uppercase font-semibold'>{product.title.slice(0, 15)}</h2>
                    <p className='font-inter text-xs'>{product.description.slice(0, 30)}</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='h-10 w-10 flex items-center justify-center border rounded-xl'><LockSvg /></div>
                <div className='h-10 w-10 flex items-center justify-center border rounded-xl'><HeartSvg /></div>
            </div>
        </div>
    )
}

export default ProductListCard;