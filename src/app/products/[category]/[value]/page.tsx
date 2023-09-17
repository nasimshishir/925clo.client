'use client'
import { ProductsPageHead, Products } from '@components';
import React, { Suspense } from 'react';
import Loading from '../../../loading';
import { useProductFilterContext } from '@lib/context api/providers/ProductFilterProvider';
import { PageProps } from '../../../../../.next/types/app/products/[category]/[value]/page';




const ProductsPage = async ({ params, searchParams }: PageProps) => {

    const { queryPramas } = useProductFilterContext()

    const getProducts = (params?: string, color?: string, brand?: string) => fetch(`https://fakestoreapi.com/products${params && '?' + params}`).then((res) => res.json())

    const querystring = require('querystring');
    const queryParameters = querystring.stringify(searchParams)
    const products = await getProducts(queryParameters)


    return (
        <section className='min-h-screen'>
            <ProductsPageHead category={params.category} value={params.value} />
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

