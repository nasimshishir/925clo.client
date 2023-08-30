'use client'
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';
import { Product } from '@lib/types/types';
import React from 'react'
import ProductCard from './ProductCard';

interface ProductsPageProps {
    products: Product[];
}

const Products: React.FC<ProductsPageProps> = ({ products }) => {
    return (

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-6 lg:gap-y-12'>
            {products.map((product: Product) => <ProductCard product={product} />
            )}
        </div>

    )
}

Products.propTypes = {}

export default Products;