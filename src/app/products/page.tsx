import { ProductFilterSidebar, ProductsPageHead, Products } from '@components';
import React, { Suspense } from 'react';
import Loading from './loading';

const ProductsPage = () => {


    const getProducts = fetch('https://fakestoreapi.com/products').then((res) => res.json())

    return (
        <div className=''>
            <ProductsPageHead />

            {/* Products Listing */}
            <Suspense fallback={<Loading />}>
                <div className='my-10 px-2 lg:px-0'>
                    <Products getProducts={getProducts} />
                </div>
            </Suspense>
        </div>

    )
}


export default ProductsPage;

