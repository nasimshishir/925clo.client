import TabComponent from '@components/TabComponent';
import React from 'react'

const WishlistPage = async () => {

  const tabs: string[] = ['outfit wishlist', 'individual items']

  const getProducts = async () => {
    return fetch(`${process.env.API_URL}products/allproducts`).then((res) => res.json())
  }
  const products = await getProducts()


  return (
    <div className='h-full'>
      <TabComponent tabs={tabs} products={products} />
    </div>
  )
}


export default WishlistPage;