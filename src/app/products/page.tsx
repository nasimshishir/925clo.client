import { Footerv1, Headerv2, ProductFilterSidebar, ProductsPageHead, Spinner, Products } from '@components';
import React from 'react';


async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products', {
        cache: 'force-cache'
    })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


const ProductsPage = async () => {

    const products = await getProducts();

    return (
        <div className=''>
            <Headerv2 />
            <ProductFilterSidebar />
            <ProductsPageHead />


            {/* Products Listing */}


            <div className='my-10 px-2 lg:px-0'>
                {products ?
                    <Products products={products} />
                    :
                    <div className="flex items-center justify-center h-[50vh]">
                        <Spinner size={32} color="text-primary_orange" />
                    </div>
                }
            </div>


            <Footerv1 />
        </div>

    )
}


export default ProductsPage;