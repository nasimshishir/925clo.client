'use client'
import React from 'react'
import { TfiAngleLeft } from 'react-icons/tfi'

const Back: React.FC = () => {
  return (
    <div className='flex items-center mb-6 lg:hidden' onClick={() => history.back()} >
      <TfiAngleLeft size={12} /><span className='uppercase text-xs font-thin'>Back</span>
    </div>
  )
}

export default Back;