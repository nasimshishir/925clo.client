'use client'
import { Product } from '@lib/types/types';
import React, { use } from 'react'
import ImageCarousel from './ImageCarousal';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import { BsCircleFill } from 'react-icons/bs';

// interface ProductsPageProps {
//     products: Product[];
// }


const GenerateOutfit = ({ getGeneratedOutfits }: { getGeneratedOutfits: Promise<Product[]> }) => {

  const images = ['https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg', 'https://images.pexels.com/photos/748870/pexels-photo-748870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/101667/pexels-photo-101667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']

  const products = use(getGeneratedOutfits)
  console.log(products);

  return (
    <div className='w-3/4 max-w-[1140px] mx-auto py-20 h-screen'>
      {/* Head */}
      <div className='mb-6 flex justify-between items-center'>
        <div className='flex items-center'>
          <TfiAngleLeft className='cursor-pointer' size={12} />
          <div className='flex gap-1 px-3'>
            <BsCircleFill color={'#586127'} size={12} />
            <BsCircleFill color={'#FF5722'} size={12} />
            <BsCircleFill color={'#FF5722'} size={12} />
            <BsCircleFill color={'#FF5722'} size={12} />
            <BsCircleFill color={'#FF5722'} size={12} />
          </div>
          <span className='cursor-pointer uppercase text-xs font-thin px-3'>Outfit</span>
          <TfiAngleRight className='cursor-pointer' size={12} />
        </div>
        <div className='flex gap-x-2 items-center'>
          <div className='flex justify-center border border-black rounded-lg px-5 py-2 cursor-pointer'>
            <p className='uppercase text-xs'>Edit Style Profile </p>
          </div>
          <div className='flex justify-center border border-black rounded-lg px-5 py-2 cursor-pointer'>
            <p className='uppercase text-xs'>Add Outfit to Wishlist </p>
          </div>
        </div>
      </div>

      {/* Outfit body */}
      {/* Desktop */}
      <div className='hidden lg:grid lg:grid-cols-3 gap-x-2'>
        <div className='flex flex-col'>
          <ImageCarousel images={images} height='h-[70vh]' />
        </div>
        <div className='flex flex-col justify-between'>
          <ImageCarousel images={images} height='h-[29vh]' />
          <ImageCarousel images={images} height='h-[29vh]' />
        </div>
        <div className='flex flex-col justify-between'>
          <ImageCarousel images={images} height='h-[29vh]' />
          <ImageCarousel images={images} height='h-[29vh]' />
        </div>
      </div>

      {/* Mobile */}
      {/* <div className='hidden lg:grid grid-cols-2 lg:grid-cols-3 gap-x-5'>
          <div className='border'>products</div>
          <div className='border'>ghghg</div>
          <div className='border'>products</div>
        </div> */}
    </div>
  )
}

export default GenerateOutfit;