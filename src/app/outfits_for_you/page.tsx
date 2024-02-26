import React from 'react'
import { Product } from '@lib/types/types';
import { FiveOutfits, LeftAngle, ProductListCard, RightAngle } from '@components';


const OutfitsForYou = async () => {

  const getGeneratedOutfits = () => {
    return fetch(`${process.env.API_URL}products/allproducts`).then((res) => res.json())

  }
  const allProducts = await getGeneratedOutfits()
  const products: Product[] = allProducts.slice(0, 5)




  return (
    <div className='bg-bg_white rounded-t-3xl h-full flex w-full p-3 gap-1.5'>

      {/* Outfit Products */}
      <FiveOutfits products={products} />

      {/* Right Side COmponent */}
      <div className='flex flex-col w-[25vw] gap-1.5'>
        <button className='w-full bg-primary_orange uppercase text-sm rounded-[1rem] py-5 pl-5 pr-6 text-white text-center tracking-wide'>Edit Style Profile</button>
        <div className='w-full bg-white rounded-[1rem] p-10'>
          <div className='grid gap-y-8'>
            {
              products.map((product: Product) => <ProductListCard key={product.id} product={product} />)
            }
          </div>
        </div>
        <div className='bg-primary_orange w-full rounded-[1rem] p-5'>
          <div className='flex justify-between p-5'>
            <div><span className='text-2xl font-inter font-bold uppercase text-white'>{`outfit-1`}</span></div>
            <div className='flex gap-2'>
              <button className='bg-white w-9 h-9 flex justify-center items-center rounded-full'>
                <LeftAngle color='#000' width={7} height={14} />
              </button>
              <button className='bg-white w-9 h-9 flex justify-center items-center rounded-full'>
                <RightAngle color='#000' width={7} height={14} />
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <button className='w-full uppercase text-sm rounded-[1rem] py-5 pl-5 pr-6 text-white text-center tracking-wide border border-white'>Add Outfit to wishlist</button>
            <button className='w-full uppercase text-sm rounded-[1rem] py-5 pl-5 pr-6 text-black text-center tracking-wide bg-white'>Buy Outfit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OutfitsForYou;