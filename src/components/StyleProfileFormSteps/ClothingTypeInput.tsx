'use client'
import React, { useState } from 'react'
import { TfiAngleLeft } from 'react-icons/tfi';
import { Buttonv1 } from '@components';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';
import { handleBack, handleNext } from '@lib/common'


const ClothingTypeInput: React.FC = () => {

  const [gender, setGender] = useState<string | null>(null)
  const { styleProfileformStep, setStyleProfileformStep } = useDropdownMenuContext()


  const handleClick = () => {
    handleNext(setStyleProfileformStep, styleProfileformStep)
  }

  // const handleBack = () => {
  //   setStyleProfileformStep(styleProfileformStep - 1)
  // }



  const logo = '/assets/img/bottoms.png'
  return (
    <div className='h-full grid grid-cols-1 px-5 pb-10 lg:px-0 lg:pb-0'>
      <div className='pt-16'>
        <h2 className='text-black text-center sec_title'>What type of clothing are you looking for?</h2>
        <p className='text-black text-center sec_desc my-6'>Before we curate your ‘fit, let us know what type of clothing you’re looking for<br /> menswear, womenswear, unisex; we’ve got it all!</p>
        <div className='grid grid-col-1 lg:grid-cols-3 gap-2 w-full lg:w-[85%] mx-auto'>
          {/* Gender Items */}
          <div
            className={`rounded-[1.5rem] relative h-[9rem] lg:h-[30rem] bg-cover bg-center grid items-center cursor-pointer bg-male_bg ${gender === 'male' && 'border-4 border-primary_orange'}`}
            onClick={() => setGender('male')}
          >
            <p className='uppercase font-helvetica font-semibold text-3xl text-white text-center'>Male</p>
          </div>
          <div
            className={`rounded-[1.5rem] relative h-[9rem] lg:h-[30rem] bg-cover bg-center grid items-center cursor-pointer bg-female_bg ${gender === 'female' && 'border-4 border-primary_orange'}`}
            onClick={() => setGender('female')}
          >
            <p className='uppercase font-helvetica font-semibold text-3xl text-white text-center'>feMale</p>
          </div>
          <div
            className={`rounded-[1.5rem] relative h-[9rem] lg:h-[30rem] bg-cover bg-center grid items-center cursor-pointer bg-unisex_bg ${gender === 'unisex' && 'border-4 border-primary_orange'}`}
            onClick={() => setGender('unisex')}
          >
            <p className='uppercase font-helvetica font-semibold text-3xl text-white text-center'>Unisex</p>
          </div>
        </div>
        <div className='lg:flex justify-center mt-12'>
          <Buttonv1 css='w-full lg:w-[40rem] h-[3rem] md:h-[4.3125rem]' onClick={() => handleClick()}>Next Step</Buttonv1>
        </div>
        <div className='hidden lg:flex items-center mt-5 w-full lg:w-80 mx-auto'>
          <><TfiAngleLeft className='cursor-pointer' size={12} /><span className='ms-1 uppercase text-sm' onClick={() => handleBack(setStyleProfileformStep, styleProfileformStep)}>Back</span></>
          <p className='uppercase text-sm grow text-center'>{`Style Profile ${styleProfileformStep}/7 Completed`}</p>
        </div>
        <p className='uppercase text-sm grow text-center mt-5 md:hidden'>Style Profile 0/7 Completed</p>

      </div>
    </div>
  )
}

export default ClothingTypeInput;