'use client'
import { Product } from '@lib/types/types';
import React, { Suspense, use } from 'react'
import ProductCard from './ProductCard';


interface ProductsProps {
    products: Product[];
}


const Products = ({ products }: ProductsProps) => {


    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 rounded-3xl '>
            {products.length && products.map(async (product: Product) =>
                <ProductCard key={product.id} product={product} />
            )}
        </div>
    )
}

export default Products;