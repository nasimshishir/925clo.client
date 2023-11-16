import React from 'react'
import GenerateOutfit from '@components/GenerateOutfit';

const generateOutfit = () => {

  const getGeneratedOutfits = fetch('https://fakestoreapi.com/products').then((res) => res.json())


  return (
    <section className='max-h-screen bg-white rounded-t-3xl'>
      <GenerateOutfit getGeneratedOutfits={getGeneratedOutfits} />
    </section>
  )
}

export default generateOutfit;