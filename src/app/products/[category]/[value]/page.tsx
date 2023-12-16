'use client'
import { ProductsPageHead, Products, Buttonv1, DownAngle } from '@components';
import React, { Suspense } from 'react';
import Loading from '../../../loading';
import { useProductFilterContext } from '@lib/context api/providers/ProductFilterProvider';
import Image from 'next/image';

// app/posts/page.ts
type PageProps = {
    params: {},
    searchParams: { [key: string]: string | string[] | undefined },
}


const ProductsPage = async ({ params, searchParams }: PageProps) => {

    const { queryPramas } = useProductFilterContext()

    const getProducts = (params?: string, color?: string, brand?: string) => fetch(`https://fakestoreapi.com/products${params && '?' + params}`).then((res) => res.json())

    const querystring = require('querystring');
    const queryParameters = querystring.stringify(searchParams)
    const products = await getProducts(queryParameters)


    return (
        <div className='bg-bg_white rounded-t-3xl h-full grid grid-cols-5 w-full p-4'>
            {/* Filter $ Sort Sidebar */}
            <div className='col-span-1 flex flex-col gap-2 h-[100%]'>

                {/* Sort */}
                <div className='bg-white rounded-xl'>
                    <div className='h-[3rem] lg:h-[4.125rem] w-full bg-primary_orange uppercase text-lg '>Sort</div>
                    {/* Color Filter */}
                    <div>
                        <div className='p-5'>
                            <div className='flex justify-between items-center '>
                                <p className='uppercase'>Color</p>
                                <DownAngle />
                            </div>
                            <p className=''>All</p>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className='bg-white rounded-xl'>
                    <div className='h-[3rem] lg:h-[4.125rem] w-full bg-primary_orange uppercase text-lg '>Filter</div>

                    {/* Color Filter */}
                    <div>
                        <div className='p-5'>
                            <div className='flex justify-between items-center '>
                                <p className='uppercase'>Color</p>
                                <DownAngle />
                            </div>
                            <p className=''>All</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Products Listing */}
            <div className='col-span-4'>
                <div className='h-80 rounded-3xl flex' style={{ backgroundImage: `url(/img/shop/summer)` }}>
                    <div></div>
                </div>
                <Suspense fallback={<Loading />}>
                    <Products products={products} />
                </Suspense>
            </div>
        </div>

    )
}


export default ProductsPage;

