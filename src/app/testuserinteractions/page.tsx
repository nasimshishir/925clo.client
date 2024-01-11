'use client'
import React, { Suspense } from 'react';
import Loading from '../loading';
import { Product } from '../../lib/types/types'
import Image from 'next/image';
// type PageProps = {
//     params: {},
//     searchParams: { [key: string]: string | string[] | undefined },
//     pathname: string
// }

type productProps = {
    product: Product
}

const ProductCard2: React.FC<productProps> = ({ product }) => {
    const { id, product_title, ...rest } = product

    return (
        <div className={`rounded-3xl bg-white p-5`}>
            <div className={`grid grid-cols-1 h-[10rem] md:h-[30rem] relative py-5`}>
                <div className='h-4/5 w-full relative m-auto'>
                    <Image className={`object-contain`} src={`${rest.image}`} alt={product_title} fill />
                </div>
            </div>
            <div className='grid gap-2'>
                <div>
                    <p className='text-[1rem] uppercase font-inter font-semibold'>{product_title.length > 12 ? product_title.substring(0, 12) : product_title}</p>
                    <p className='text-[1rem] uppercase font-inter font-semibold'>£{rest.price}</p>
                </div>
                <p className='text-[0.875rem]'>{rest.description.slice(0, 40)}...</p>
            </div>
            <div className={`flex justify-between items-center w-full mt-8`}>
                <div>
                    <button
                        className={`text-[0.875rem] text-white bg-green-700 border-green-700 rounded-xl uppercase font-inter font-light text-center hover:bg-secondary_orange hover:transition-all w-32 h-[2.75rem]`}
                    >
                        {'Like'}
                    </button>
                </div>
                <div>
                    <button
                        className={`text-[0.875rem] text-white bg-red-500 border border-red-500 rounded-xl uppercase font-inter font-light text-center hover:bg-secondary_orange hover:transition-all w-32 h-[2.75rem]`}
                    >
                        {'Dislike'}
                    </button>

                </div>
            </div>
        </div>
    )
}


const TestProductsPage = async () => {


    // const { queryPramas } = useProductFilterContext()

    // const getProducts = (params?: string, color?: string, brand?: string) => fetch(`https://fakestoreapi.com/products${params && '?' + params}`).then((res) => res.json())

    // const querystring = require('querystring');
    // const queryParameters = querystring.stringify(searchParams)
    // const products = await getProducts(queryParameters)

    const getProducts = () => fetch(`http://localhost:8000/api/v1/products/all`).then((res) => res.json())
    const products = await getProducts()




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

