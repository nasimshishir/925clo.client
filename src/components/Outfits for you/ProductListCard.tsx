'use cilent'
import Image from 'next/image';
import React, { useState } from 'react'
import { Product } from '@lib/types/types';
import { HeartSvg, Buttonv1, LockSvg } from '@components';

type productProps = {
    product: Product
}

const ProductListCard: React.FC<productProps> = ({ product }) => {

    const { id, product_title, ...rest } = product


    return (
        <div className='flex items-center w-full gap-4 justify-between'>
            <div className='flex gap-5 items-center'>
                <div className='h-16 w-16 relative'>
                    <Image className='object-contain' src={`${rest.image}`} alt={product_title} fill />
                </div>
                <div>
                    <h2 className='font-inter uppercase font-semibold text-[0.875rem]'>{product.product_title}</h2>
                    <p className='font-inter text-xs'>{product.description}</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <button className='h-10 w-10 flex items-center justify-center border border-gray-300 rounded-xl'><LockSvg width={12} height={16} /></button>
                <button className='h-10 w-10 flex items-center justify-center border border-gray-300 rounded-xl'><HeartSvg width={15} height={14} /></button>
            </div>
        </div>
    )
}

export default ProductListCard;