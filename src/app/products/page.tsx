'use client'
import { Footerv1, Headerv2 } from '@components';
import React, { useEffect } from 'react'
import products from '@assets/productsSample/products.json'
import ProductCard from '@components/ProductCard';



const Products: React.FC = () => {

    const allProducts = products.products;



    return (
        <div >
            <Headerv2 />
            <section className='pt-20 px-8 bg-white'>
                <div className='flex justify-between items-baseline'>
                    <div>
                        <p className='uppercase text-[0.6rem]'>{'Products>Shop Season'}</p>
                    </div>
                    <div>
                        <h2 className='uppercase text-2xl font-bold'>{'Summer'}</h2>
                    </div>
                    <div>
                        <p className='uppercase text-xs border border-black rounded-lg px-3 py-1'>filters</p>
                    </div>
                </div>

                {/* Products Listing */}
                <div className='mt-10'>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-2'>
                        {allProducts.map(product => <ProductCard product={product} />)}
                    </div>
                </div>
            </section>
            <Footerv1 />
        </div>

    )
}

export default Products;