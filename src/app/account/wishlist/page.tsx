import TabComponent from '@components/TabComponent';
import { Product } from '@lib/types/types';
import React from 'react'

const WishlistPage = async () => {

  const tabs: string[] = ['outfit wishlist', 'individual items']

  const getProducts = async () => {
    const products = fetch(`${process.env.API_URL}products/allproducts`).then((res) => res.json())
    return products
  }
  const products = await getProducts()

  const outfits: { id: number, items: Product[] }[] = [
    {

      id: 1,
      items: [products.products[0], products.products[1], products.products[2], products.products[3], products.products[4]]

    },
    {

      id: 2,
      items: [products.products[0], products.products[1], products.products[2], products.products[3], products.products[4]]

    },
    {

      id: 3,
      items: [products.products[0], products.products[1], products.products[2], products.products[3], products.products[4]]

    }
  ]


  return (
    <div className='h-full'>
      <TabComponent tabs={tabs} products={products.products} outfits={outfits} />
    </div>
  )
}


export default WishlistPage;