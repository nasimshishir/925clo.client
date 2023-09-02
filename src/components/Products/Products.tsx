'use client'
import { Product } from '@lib/types/types';
import React, { Suspense, use } from 'react'
import ProductCard from './ProductCard';
import Loading from '@app/generate_outfit/loading';

// interface ProductsPageProps {
//     products: Product[];
// }


const Products = ({ getProducts }: { getProducts: Promise<Product[]> }) => {

    const products = use(getProducts)

    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-6 lg:gap-y-12'>
            {products.map((product: Product) => <ProductCard key={product.id} product={product} />
            )}
        </div>
    )
}

export default Products;