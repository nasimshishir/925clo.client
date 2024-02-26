'use client'
import React, { useState } from 'react'
import { Product } from '@lib/types/types'

interface TestProps {
    products: Product[]
}

const TestComponent: React.FC<TestProps> = ({ products }) => {

    const [noTitle, setNoTitle] = useState<number>(0)
    const [noBrand, setNoBrand] = useState<number>(0)
    const [noImage, setNoImage] = useState<number>(0)


    return (
        <div className='w-full grid grid-cols-10 bg-red-500'>

        </div>
    )
}

export default TestComponent;