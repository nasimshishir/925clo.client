import { Footerv1, ImageCarousel } from '@components';
import React from 'react'
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import { BsCircleFill } from 'react-icons/bs';
import { NextPage } from 'next';
import GenerateOutfit from '@components/GenerateOutfit';

const generateOutfit = () => {

  const getGeneratedOutfits = fetch('https://fakestoreapi.com/products').then((res) => res.json())


  return (
    <div className='max-h-screen'>
      <GenerateOutfit getGeneratedOutfits={getGeneratedOutfits} />
    </div>
  )
}

export default generateOutfit;