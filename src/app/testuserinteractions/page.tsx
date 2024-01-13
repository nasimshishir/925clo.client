import React, { Suspense } from 'react';
import Loading from '../loading';
import { Product } from '../../lib/types/types'
import Image from 'next/image';
import { ProductCard2 } from '@components';
// type PageProps = {
//     params: {},
//     searchParams: { [key: string]: string | string[] | undefined },
//     pathname: string
// }

const TestProductsPage = async () => {

    const getProducts = () => fetch(`${process.env.API_URL}products/all`).then((res) => res.json())
    const allproducts = await getProducts()
    const products = allproducts.slice(0, 20)




    return (

        <div className='bg-bg_white rounded-t-3xl h-full w-full p-3'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 rounded-3xl'>
                <Suspense fallback={<Loading />}>
                    {products.map((product: Product) => <ProductCard2 key={product.id} product={product} />)}
                </Suspense>
            </div>
        </div>

    )
}


export default TestProductsPage;

