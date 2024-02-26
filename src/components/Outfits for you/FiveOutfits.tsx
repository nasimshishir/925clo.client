'use client'
import ProductCard from '@components/Products/ProductCard'
import { Product } from '@lib/types/types'
import React from 'react'
import OutfiProductSingleCard from './OutfitProductSingleCard'

interface OutfitsProps {
    products: Product[]
}

const FiveOutfits: React.FC<OutfitsProps> = ({ products }) => {
    return (
        <div className='flex-grow grid grid-cols-3 gap-1.5'>

            <div className='bg-white rounded-2xl p-3'><OutfiProductSingleCard product={products[0]} /></div>
            <div className='col-span-1 flex flex-col gap-1.5'>
                <div className='bg-white rounded-2xl flex-grow p-3'>Tops</div>
                <div className='bg-white rounded-2xl flex-grow p-3'></div>
            </div>
            <div className='col-span-1 flex flex-col gap-1.5'>
                <div className='bg-white rounded-2xl flex-grow p-3'>Outerwear</div>
                <div className='bg-white rounded-2xl flex-grow p-3'></div>
            </div>
        </div>
    )
}

export default FiveOutfits