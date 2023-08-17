'use cilent'
import Image from 'next/image';
import React, { useState } from 'react'
import { Buttonv1, Buttonv3 } from '@components';

type productProps = {
    product: {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[];
    }
}

const ProductCard: React.FC<productProps> = ({ product }) => {

    const [hovering, setHovering] = useState(false)


    const { id, title, ...rest } = product;

    return (
        <div className={`cursor-pointer ${hovering && 'transition-all duration-500'}`} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            <div className={`flex flex-col justify-end items-center h-96 ${hovering ? 'bg-white' : 'bg-[#F6F6F6]'}`}>
                <div>
                    <div className='h-4/5 w-3/4 relative'>
                        <Image className={`object-cover`} src={rest.thumbnail} alt={title} fill />
                    </div>
                    {<div className={`mt-3 h-1/5 ${hovering ? 'grid grid-cols-2 gap-2 w-3/4' : 'invisible'}`}>
                        <div>
                            <button className={`w-full btn text-white bg-primary_orange border border-primary_orange rounded-xl text-[.7rem] uppercase font-inter font-light text-center hover:bg-secondary_orange hover:transition-all py-2`}>
                                Buy Now
                            </button>
                        </div>
                        <div>
                            <button className={`w-full btn text-black bg-transparent border border-black rounded-xl text-[.7rem] uppercase font-inter font-light text-center hover:bg-white/10 hover:transition-all py-2`}>
                                Add to wishlist
                            </button>
                        </div>
                    </div>}
                </div>
            </div>
            <div className='px-6 flex justify-between'>
                <p className='text-xs uppercase'>{title}</p>
                <p className='text-xs uppercase'>{rest.price} gbp</p>
            </div>
        </div>
    )
}

export default ProductCard