import Image from 'next/image';
import React from 'react'
import { TfiAngleLeft } from 'react-icons/tfi';


const ClothingTypeInput = () => {

  const logo = '../assets/img/bottoms.png'
  return (
    <div className='grid grid-cols-1'>
      <div className='bg-white pt-28 items-center mx-auto'>
        <div className='flex items-center mb-8 lg:hidden'>
          <TfiAngleLeft size={12} /><span className='uppercase text-xs font-thin'>Back</span>
          <p className='hidden lg:block uppercase text-xs font-thin grow text-center'>Style Profile 0/7 Completed</p>
        </div>
        <h2 className='text-black text-center sec_title mb-2'>Where in the World are you?</h2>
        <p className='text-black text-center sec_desc mb-5'>In this style profile we ask for your preferences on brands, item types and colours to help us learn more about you and your individual style.
        </p>
        <div className='grid grid-col-1 lg:grid-cols-3 gap-5'>
          <div className='border rounded-lg'><Image src={logo} width={300} height={0} alt='test' /></div>
          <div className='border rounded-lg'><Image src={logo} width={300} height={0} alt='test' /></div>
          <div className='border rounded-lg'><Image src={logo} width={300} height={0} alt='test' /></div>
        </div>
      </div>
    </div>
  )
}

export default ClothingTypeInput;