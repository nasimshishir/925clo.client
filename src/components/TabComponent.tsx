'use client'
import React, { Suspense, useState } from 'react';
import { Buttonv2, ColorSelect, ProductFilterSidebar, Products, SortSelectField, WishlistOutfits } from '@components';
import Loading from '@app/account/wishlist/loading';
import { Product } from '@lib/types/types';
import ProductCard from './Products/ProductCard';
import WishlistProductCard from './WishlistProductCard';
import { FaCircle, FaRegCircle } from 'react-icons/fa';
import { TfiAngleLeft } from 'react-icons/tfi';


interface TabComponentProps {
  tabs: string[]
  products?: Product[]
  outfits?: { id: number, items: Product[] }[]
}

const sortOptions = [
  { id: 1, name: 'Recomended' },
  { id: 2, name: 'price low to high' },
  { id: 3, name: 'price high to low' },
  { id: 4, name: 'New In' },
]

const TabComponent = ({ tabs, products, outfits }: TabComponentProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [selected, setSelected] = useState<{ id: number, name: string } | null>(null)


  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };



  return (
    <div className='w-full flex flex-col h-full'>

      {/* Wishlist Header */}
      <div className='w-full flex justify-center items-end px-10'>
        <div className='flex items-center gap-2 text-white absolute left-10 pb-5 uppercase text-xs font-inter font-light'><TfiAngleLeft size={12} /> back to your profile</div>
        <div className=''>
          <h2 className='sec_title text-white pb-5'>Wish list</h2>
        </div>
        <div className="absolute grid grid-cols-2 rounded-2xl right-10">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`grid items-center h-full`}
              onClick={() => handleTabClick(index)}
            >
              {(activeTab === index) ?
                <button className='py-5 w-full h-full px-6 text-black text-xs font-inter uppercase text-center bg-bg_white rounded-t-2xl'>{tab}</button>
                :
                <button className='py-5 w-full h-full text-xs font-inter uppercase text-center text-white bg-header_black px-6'>{tab}</button>}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-bg_white rounded-t-3xl h-full ">
        {tabs.map((tab, index) => (
          <div key={index} className='w-full' style={{ display: activeTab === index ? 'block' : 'none' }}>
            <div className='bg-bg_white rounded-t-3xl h-full grid grid-cols-6 w-full p-3 gap-1'>

              {/* SideBar Sort */}
              <div className='bg-white rounded-2xl flex flex-col h-[85vh]'>
                <div className='w-full bg-primary_orange rounded-[1rem] py-5 pl-5 pr-6 text-white'>
                  <p className='text-xl font-bold font-helvetica upper'>Sort</p>
                </div>

                {/* Sort Filter */}
                <div className='grid gap-5 p-5'>
                  {sortOptions.map((option, optionIdx) => (
                    <button
                      key={optionIdx}
                      className={``}
                      onClick={() => setSelected(option)}
                    >
                      <div
                        className={`truncate ${selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {<div className='flex justify-between'>
                          <div className='flex gap-3'>
                            <span className='uppercase text-sm'>{option.name}</span>
                          </div>
                          <div>
                            {selected?.id === option.id ? <FaCircle color='#F25200' /> : <FaRegCircle color='#c2c2c2' />}
                          </div>
                        </div>}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className='col-span-5 grid gap-1'>
                {/* Banner */}
                <div className={`h-80 rounded-3xl bg-no-repeat bg-contain bg-right ${activeTab === 0 ? 'bg-outfit_wishlist_bg' : 'bg-individual_wishlist_bg'} `} >
                  <div className='w-[25%] h-full flex flex-col justify-between p-12 bg-black rounded-s-3xl'>
                    <p className='text-white font-inter font-bold text-[2rem] uppercase text-left w-2/3'>{activeTab === 0 ? 'outfits you liked' : 'Items you liked'}</p>
                    <p className='text-white font-inter text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, repudiandae ad iste tenetur magnam debitis doloremque error pariatur sint, animi expedita repellendus consectetur odio nobis.</p>
                  </div>
                </div>
                <div className='bg-bg_white'>
                  {activeTab === 1 && <Suspense fallback={<Loading />}>
                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1 rounded-3xl '>
                      {products?.map((product: Product) => <WishlistProductCard key={product.id} product={product} />
                      )}
                    </div>
                  </Suspense>}
                  {activeTab === 0 && <Suspense fallback={<Loading />}>
                    <div className='grid gap-5 rounded-3xl '>
                      {outfits?.map((outfit) => <WishlistOutfits key={outfit.id} products={outfit.items} id={outfit.id} />
                      )}
                    </div>
                  </Suspense>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
