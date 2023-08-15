import React from 'react'
import { TfiAngleLeft } from 'react-icons/tfi';
import { Buttonv1 } from '@components';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';
import { handleBack, handleNext } from '@lib/common'


const ClothingTypeInput: React.FC = () => {

  const { styleProfileformStep, setStyleProfileformStep } = useDropdownMenuContext()


  const handleClick = () => {
    handleNext(setStyleProfileformStep, styleProfileformStep)
  }

  // const handleBack = () => {
  //   setStyleProfileformStep(styleProfileformStep - 1)
  // }


  const logo = '/assets/img/bottoms.png'
  return (
    <div className='max-h-screen h-screen  grid grid-cols-1 px-5 pb-10 lg:px-0 lg:pb-0'>
      <div className='bg-white pt-24 items-center mx-auto'>
        <div className='flex items-center mb-8 lg:hidden'>
          <TfiAngleLeft size={12} /><span className='uppercase text-xs font-thin' onClick={() => handleBack(setStyleProfileformStep, styleProfileformStep)}>Back</span>
          <p className='hidden lg:block uppercase text-xs font-thin grow text-center'>{`Style Profile ${styleProfileformStep}/7 Completed`}</p>
        </div>
        <h2 className='text-black text-center sec_title mb-2'>What type of clothing are you looking for?</h2>
        <p className='text-black text-center sec_desc mb-5'>in this style profile we ask for your preferences on brands, item types and colours to help us learn more about you and your individual style.
        </p>
        <div className='grid grid-col-1 lg:grid-cols-3 gap-5 lg:gap-2'>
          {/* Gender Items */}
          <div className='rounded-lg relative h-80 lg:h-64 bg-cover grid items-center cursor-pointer' style={{ backgroundImage: `url(/img/male.png)` }}>
            <p className='uppercase font-semibold text-xl text-white text-center'>Male</p>
          </div>
          <div className='rounded-lg relative h-80 lg:h-64 bg-cover grid items-center cursor-pointer' style={{ backgroundImage: `url(/img/female.png)` }}>
            <p className='uppercase font-semibold text-xl text-white text-center'>feMale</p>
          </div>
          <div className='rounded-lg relative h-80 lg:h-64 bg-cover grid items-center cursor-pointer' style={{ backgroundImage: `url(/img/unisex.png)` }}>
            <p className='uppercase font-semibold text-xl text-white text-center'>Unisex</p>
          </div>
        </div>
        <div className='lg:flex justify-center mt-8'>
          <Buttonv1 css='w-full lg:w-80' onClick={() => handleClick()}>Next Step</Buttonv1>
        </div>
        <div className='hidden lg:flex items-center mt-5 w-full lg:w-80 mx-auto'>
          <><TfiAngleLeft className='cursor-pointer' size={12} /><span className='cursor-pointer uppercase text-xs font-thin' onClick={() => handleBack(setStyleProfileformStep, styleProfileformStep)}>Back</span></>
          <p className='uppercase text-xs font-thin grow text-center'>{`Style Profile ${styleProfileformStep}/7 Completed`}</p>
        </div>
      </div>
    </div>
  )
}

export default ClothingTypeInput;