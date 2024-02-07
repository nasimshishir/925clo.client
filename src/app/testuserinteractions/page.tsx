import { Products, ProductFilterSidebar } from '@components';
import React, { Suspense } from 'react';
import Loading from '../loading';
import { useProductFilterContext } from '@lib/context api/providers/ProductFilterProvider';
// type PageProps = {
//     params: {},
//     searchParams: { [key: string]: string | string[] | undefined },
//     pathname: string
// }


const TestProductsPage = async () => {

    // const { category } = useProductFilterContext()

    // const { queryPramas } = useProductFilterContext()

    // const getProducts = (params?: string, color?: string, brand?: string) => fetch(`https://fakestoreapi.com/products${params && '?' + params}`).then((res) => res.json())

    // const querystring = require('querystring');
    // const queryParameters = querystring.stringify(searchParams)
    // const products = await getProducts(queryParameters)


    const getProducts = async () => {
        return fetch(`${process.env.API_URL}products/allproducts`).then((res) => res.json())
    }
    const products = await getProducts()




    return (

        <div className='bg-bg_white rounded-t-3xl h-full grid grid-cols-6 w-full gap-1 p-3'>
            {/* <ProductFilterSidebar /> */}

            <div className='col-span-6 grid gap-1'>
                {/* Banner */}
                <div className='h-80 rounded-3xl bg-no-repeat bg-cover' style={{ backgroundImage: `url(/img/shop/summer.webp)` }}>
                    <div className='w-[25%] h-full flex flex-col justify-between p-12'>
                        <p className='text-white font-inter font-bold text-[2rem] uppercase text-justify'>Shop by <br /> {'Summer'}</p>
                        <p className='text-white font-inter text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, repudiandae ad iste tenetur magnam debitis doloremque error pariatur sint, animi expedita repellendus consectetur odio nobis.</p>
                    </div>
                </div>
                <div className='bg-bg_white'>
                    <Products products={products} />
                </div>
            </div>
        </div>

    )
}


export default TestProductsPage;

