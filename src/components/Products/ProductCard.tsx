'use cilent'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Product, User } from '@lib/types/types';
import { HeartSvg, Buttonv1 } from '@components';
import { useUserContext } from '@lib/context api/providers/UserProvider';
import axios from 'axios';

type ProductProps = {
    product: Product
}

const ProductCard = ({ product }: ProductProps) => {

    const { id, product_title, image, ...rest } = product
    const { user } = useUserContext()
    const [isListedByWishlist, setIsListedByWishlist] = useState<boolean>(false)
    const [isListedByBuy, setIsListedByBuy] = useState<boolean>(false)

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

    const addInteraction = async (product: number) => {
        const interaction = {
            user, product, type: 'liked'
        }

        if (user) {
            try {
                const response = await axios.post(
                    `${process.env.API_URL}user-interactions/add`,
                    interaction,

                );

                console.log('Response:', response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        } else {

        }
        setIsListedByWishlist(!isListedByWishlist)
    }




    return (
        <div className={`rounded-3xl bg-white p-5`}>
            <div className='flex justify-end'>
                {user && <button
                    onClick={() => addInteraction(product.id)}
                    disabled={isListedByWishlist ? true : false}>
                    <HeartSvg fill={isListedByWishlist ? '#F25200' : 'none'} color={isListedByWishlist ? '#F25200' : '#000000'} />
                </button>}
            </div>
            <div className={`grid grid-cols-1 h-[10rem] md:h-[30rem] relative py-5`}>
                <div className='h-4/5 w-full relative m-auto'>
                    <Image className={`object-contain`} src={image ? image : '/'} alt={product_title} fill onError={(e) => console.error('error')} />
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
                        className={`text-[0.875rem] text-white rounded-xl uppercase font-inter font-light text-center hover:transition-all w-32 h-[2.75rem] ${isListedByBuy ? 'bg-gray-300' : 'bg-primary_orange hover:bg-secondary_orange'}`}
                        disabled={isListedByBuy ? true : false}
                        onClick={() => setIsListedByBuy(true)}
                    >
                        {'Buy Now'}
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ProductCard;