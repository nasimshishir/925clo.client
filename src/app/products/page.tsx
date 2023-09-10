import { ProductsPageHead, Products } from '@components';
import React, { Suspense } from 'react';
import Loading from './loading';

type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
};




const ProductsPage = async (props: Props) => {

    const getProducts = (params?: string) => fetch(`https://fakestoreapi.com/products${params && '?' + params}`).then((res) => res.json())

    const querystring = require('querystring');
    const queryParam = querystring.stringify(props.searchParams)
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

