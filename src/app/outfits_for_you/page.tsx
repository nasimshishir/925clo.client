import React from 'react'
import GenerateOutfit from '@components/GenerateOutfit';
import { Product } from '@lib/types/types';
import ProductListCard from '@components/Outfits for you/ProductListCard';


const generateOutfit = async () => {

  const getGeneratedOutfits = () => fetch('https://fakestoreapi.com/products').then((res) => res.json())
  const allProducts: Product[] = await getGeneratedOutfits()
  const products: Product[] = await allProducts.slice(0, 5)




  return (
    <div className='bg-bg_white rounded-t-3xl h-full grid grid-cols-7 w-full p-3 gap-1.5'>
      <div className='col-span-5 h-screen'>
      </div>

      {/* Right Side COmponent */}
      <div className='col-span-2 flex flex-col gap-1.5'>
        <div className='w-full bg-primary_orange uppercase text-lg rounded-[1rem] py-5 pl-5 pr-6 text-white text-center'>Edit Style Profile</div>
        <div className='w-full bg-white rounded-[1rem] p-10'>
          <div className='grid gap-y-10'>
            {
              products.map((product: Product) => <ProductListCard key={product.id} product={product} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default generateOutfit;