import Image from 'next/image';
import React from 'react'

type productProps = {
    product: {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[];
    }
}

const ProductCard: React.FC<productProps> = ({ product }) => {

    const { id, title, ...rest } = product;

    return (
        <div className='border p-2'>
            <div className=''>
                <Image className='object-cover' src={rest.thumbnail} alt={title} width={150} height={150} />
            </div>
            <p>{id}</p>
            <p>{title}</p>
        </div>
    )
}

export default ProductCard