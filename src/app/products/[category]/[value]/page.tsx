'use client'
import { ProductsPageHead, Products, Buttonv1, DownAngle } from '@components';
import React, { Suspense } from 'react';
import Loading from '../../../loading';
import { useProductFilterContext } from '@lib/context api/providers/ProductFilterProvider';
import Image from 'next/image';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';
import { PageProps } from '../../../../../.next/types/app/products/[category]/[value]/page';
// app/posts/page.ts
// type PageProps = {
//     params: {},
//     searchParams: { [key: string]: string | string[] | undefined },
//     pathname: string
// }


const ProductsPage = async ({ params, searchParams }: PageProps) => {

    const { category } = useProductFilterContext()

    const { queryPramas } = useProductFilterContext()

    const getProducts = (params?: string, color?: string, brand?: string) => fetch(`https://fakestoreapi.com/products${params && '?' + params}`).then((res) => res.json())

    const querystring = require('querystring');
    const queryParameters = querystring.stringify(searchParams)
    const products = await getProducts(queryParameters)

    console.log(category?.title);





    return (
        <div className='bg-bg_white rounded-t-3xl h-full grid grid-cols-5 w-full p-2 gap-2'>
            {/* Filter $ Sort Sidebar */}
            <div className='col-span-1 flex flex-col gap-2 h-full rounded-2xl'>

                {/* Sort */}
                <div className='bg-white rounded-2xl'>
                    <div className='h-[3rem] lg:h-[4.125rem] w-full bg-primary_orange uppercase text-lg rounded-2xl'>Sort</div>
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
                {/* Banner */}
                <div className='h-80 rounded-3xl flex' style={{ backgroundImage: `url(/img/shop/summer.webp)` }}>
                    <div className='w-40'>
                        <p className='text-white font-inter font-bold text-[2rem] uppercase'>Shop by <br /> {category?.title}</p>
                    </div>
                </div>
                <div className='bg-bg_white rounded-3xl mt-2'>
                    <Suspense fallback={<Loading />}>
                        <Products products={products} />
                    </Suspense>
                </div>
            </div>
        </div>

    )
}


export default ProductsPage;

