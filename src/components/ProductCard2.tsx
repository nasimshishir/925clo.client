'use client'
import React from 'react'
import { Product } from "@lib/types/types"
import Image from "next/image"

type productProps = {
    product: Product
}

const ProductCard2: React.FC<productProps> = ({ product }) => {
    const { id, product_title, ...rest } = product

    const handleLiked = () => {

    }

    const handleDisliked = () => {

    }

    return (
        <div className={`rounded-3xl bg-white p-5`}>
            <div className={`grid grid-cols-1 h-[10rem] md:h-[30rem] relative py-5`}>
                <div className='h-4/5 w-full relative m-auto'>
                    <Image className={`object-contain`} src={`${rest.image}`} alt={product_title} fill />
                </div>
            </div>
            <div className='grid gap-2'>
                <div>
                    <p className='text-[1rem] uppercase font-inter font-semibold'>{product_title.length > 12 ? product_title.substring(0, 12) : product_title}</p>
                    <p className='text-[1rem] uppercase font-inter font-semibold'>£{rest.price}</p>
                </div>
                <p className='text-[0.875rem] capitalize'>{rest.description.slice(0, 50)}...</p>
            </div>
            <div className={`grid grid-cols-2 w-full mt-8 gap-5`}>
                <div>
                    <button
                        className={`text-[0.875rem] text-white bg-green-700 border-green-700 rounded-xl uppercase font-inter font-light text-center hover:bg-secondary_orange hover:transition-all w-full h-[2.75rem]`}
                        onClick={handleLiked}
                    >
                        {'Like'}
                    </button>
                </div>
                <div>
                    <button
                        className={`text-[0.875rem] text-white bg-red-500 border border-red-500 rounded-xl uppercase font-inter font-light text-center hover:bg-secondary_orange hover:transition-all w-full h-[2.75rem]`}
                        onClick={handleDisliked}
                    >
                        {'Dislike'}
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ProductCard2;