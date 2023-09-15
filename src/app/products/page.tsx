'use client'
import { ProductsPageHead, Products } from '@components';
import React, { Suspense } from 'react';
import Loading from '../loading';
import { PageProps } from '../../../.next/types/app/page';
import { useProductFilterContext } from '@lib/context api/providers/ProductFilterProvider';
import { useRouter } from 'next/router';




const ProductsPage = async ({ searchParams }: PageProps) => {

    const router = useRouter();
    console.log(router.pathname, 'prod');




    const { queryPramas } = useProductFilterContext()

    const getProducts = (params?: string, color?: string, brand?: string) => fetch(`https://fakestoreapi.com/products${params && '?' + params}`).then((res) => res.json())

    const querystring = require('querystring');
    const queryParam = querystring.stringify(searchParams)
    const products = await getProducts(queryParam)



    return (
        <section className='min-h-screen'>
            <ProductsPageHead />

            {/* Products Listing */}
            <Suspense fallback={<Loading />}>
                <div className='my-10 px-2 lg:px-0'>
                    <Products products={products} />
                </div>
            </Suspense>
        </section>

    )
}


export default ProductsPage;

