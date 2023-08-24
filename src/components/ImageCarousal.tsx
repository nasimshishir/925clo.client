'use client'
import Image from 'next/image';
import { useState } from 'react';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';

interface ImageCarouselProps {
  images: string[],
  height?: string
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, height }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className={`flex items-center justify-center relative bg-[#f6f6f6] ${height}`}>
        <Image src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="object-cover px-10" fill />
      </div>
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
        <button onClick={goToPrevSlide} className="text-xl text-gray-500 focus:outline-none">
          <TfiAngleLeft size={12} />
        </button>
      </div>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
        <button onClick={goToNextSlide} className="text-xl text-gray-500 focus:outline-none">
          <TfiAngleRight size={12} />
        </button>
      </div>
      <div className='flex justify-between items-center mt-2 px-2'>
        <div>
          <p className='text-xs uppercase'>Product Name</p>
          <p className='text-xs uppercase'>250 GBP</p>
        </div>
        <div>
          <button className={`w-20 btn text-white bg-primary_orange border border-primary_orange rounded-md text-[.5rem] uppercase font-inter font-light text-center hover:bg-secondary_orange py-2`}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;