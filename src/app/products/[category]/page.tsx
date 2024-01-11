'use client'
import { Products, ProductFilterSidebar } from '@components';
import React, { Suspense } from 'react';
import Loading from '../../loading';
import { useProductFilterContext } from '@lib/context api/providers/ProductFilterProvider';
import { PageProps } from '../../../../.next/types/app/products/[category]/page';
// type PageProps = {
//     params: {},
//     searchParams: { [key: string]: string | string[] | undefined },
//     pathname: string
// }


const ProductsPage = async ({ params, searchParams }: PageProps) => {

    const { category } = useProductFilterContext()

    // const { queryPramas } = useProductFilterContext()

    // const getProducts = (params?: string, color?: string, brand?: string) => fetch(`https://fakestoreapi.com/products${params && '?' + params}`).then((res) => res.json())

    // const querystring = require('querystring');
    // const queryParameters = querystring.stringify(searchParams)
    // const products = await getProducts(queryParameters)

    const getProducts = () => fetch(`http://localhost:8000/api/v1/products/all`)
    const products = await getProducts()



    return (

        <div className='bg-bg_white rounded-t-3xl h-full grid grid-cols-6 w-full p-3'>
            <ProductFilterSidebar />

            <div className='col-span-5 grid gap-1'>
                {/* Banner */}
                <div className='h-80 rounded-3xl bg-no-repeat bg-cover' style={{ backgroundImage: `url(/img/shop/summer.webp)` }}>
                    <div className='w-[25%] h-full flex flex-col justify-between p-12'>
                        <p className='text-white font-inter font-bold text-[2rem] uppercase text-justify'>Shop by <br /> {category ? category.title : 'Summer'}</p>
                        <p className='text-white font-inter text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, repudiandae ad iste tenetur magnam debitis doloremque error pariatur sint, animi expedita repellendus consectetur odio nobis.</p>
                    </div>
                </div>
                <div className='bg-bg_white'>
                    <Suspense fallback={<Loading />}>
                        <Products products={products} />
                    </Suspense>
                </div>
            </div>
        </div>

    )
}


export default ProductsPage;

