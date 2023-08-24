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
        <div className={`${hovering && 'transition-all duration-500'}`} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            <div className={`grid grid-cols-1 h-52 lg:h-96 relative ${hovering ? 'bg-white' : 'bg-[#F6F6F6]'}`}>
                <div className='h-4/5 w-3/4 relative m-auto'>
                    <Image className={`object-cover`} src={rest.thumbnail} alt={title} fill />
                </div>
                {hovering && <div className={`hidden lg:grid grid-cols-2 gap-2 w-3/4 absolute bottom-0 inset-x-[12.5%] transition-all duration-500`}>
                    <div>
                        <button className={`w-full btn text-white bg-primary_orange border border-primary_orange rounded-xl text-[.7rem] uppercase font-inter font-light text-center hover:bg-secondary_orange py-2`}>
                            Buy Now
                        </button>
                    </div>
                    <div>
                        <button className={`w-full btn text-black bg-transparent border border-black rounded-xl text-[.7rem] uppercase font-inter font-light text-center hover:bg-white/10 py-2`}>
                            Add to wishlist
                        </button>
                    </div>
                </div>}
            </div>
            <div className='px-2 lg:px-6 flex justify-between mt-2 lg:mt-3'>
                <p className='text-xs uppercase'>{title.length > 12 ? title.substring(0, 12) : title}</p>
                <p className='text-xs uppercase'>{rest.price} gbp</p>
            </div>
            <div className={`lg:hidden grid grid-cols-2 gap-1 w-full mt-2`}>
                <div>
                    <button className={`w-full btn text-white bg-primary_orange border border-primary_orange rounded-md text-[.5rem] uppercase font-inter font-light text-center hover:bg-secondary_orange py-2`}>
                        Buy Now
                    </button>
                </div>
                <div>
                    <button className={`w-full btn text-black bg-transparent border border-black rounded-md text-[.5rem] uppercase font-inter font-light text-center hover:bg-white/10 py-2`}>
                        Add to wishlist
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;