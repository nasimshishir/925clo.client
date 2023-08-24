'use client'
import { Footerv1, Headerv2, ProductFilterSidebar } from '@components';
import React, { useState } from 'react'
import products from '@assets/productsSample/products.json'
import ProductCard from '@components/ProductCard';
import { BsPlus } from 'react-icons/bs';



const Products: React.FC = () => {

    const allProducts = products.products;

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const filterToggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className=''>
            <Headerv2 />
            <ProductFilterSidebar filterToggle={filterToggle} isOpen={isOpen} />
            <div className='pt-20 px-2 lg:px-8 bg-white'>
                <div className='flex justify-between items-baseline'>
                    <div className='hidden lg:block'>
                        <p className='uppercase text-[0.6rem]'>{'Products>Shop Season'}</p>
                    </div>
                    <div>
                        <h2 className='uppercase text-2xl font-bold'>{'Summer'}</h2>
                    </div>
                    <div className='flex justify-center border border-black rounded-lg px-5 py-2 cursor-pointer' onClick={filterToggle}>
                        <p className='uppercase text-xs'>filters </p><BsPlus />
                    </div>
                </div>

                {/* Products Listing */}
                <div className='my-10'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-6 lg:gap-y-12'>
                        {allProducts.map(product => <ProductCard product={product} />)}
                    </div>
                </div>
            </div>
            <Footerv1 />
        </div>

    )
}

export default Products;