import React from 'react'
import TestComponent from '@components/TestComponent'

const testingpage = async () => {

    const getGeneratedOutfits = () => {
        return fetch(`${process.env.API_URL}products/allproducts`).then((res) => res.json())

    }
    const products = await getGeneratedOutfits()


    return (
        <div className='w-full bg-green-500 h-screen'>
            <TestComponent products={products} />
        </div>
    )
}

export default testingpage