import TabComponent from '@components/TabComponent';
import { Product } from '@lib/types/types';
import React from 'react'

const WishlistPage = async () => {

  const tabs: string[] = ['outfit wishlist', 'individual items']

  const getProducts = async () => {
    return fetch(`${process.env.API_URL}products/allproducts`).then((res) => res.json())
  }
  const products = await getProducts()

  const outfits: { id: number, items: Product[] }[] = [
    {

      id: 1,
      items: [products[0], products[1], products[2], products[3], products[4]]

    },
    {

      id: 2,
      items: [products[0], products[1], products[2], products[3], products[4]]

    },
    {

      id: 3,
      items: [products[0], products[1], products[2], products[3], products[4]]

    }
  ]


  return (
    <div className='h-full'>
      <TabComponent tabs={tabs} products={products} outfits={outfits} />
    </div>
  )
}


export default WishlistPage;