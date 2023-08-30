'use client'
import { AccordionItem } from '@lib/types/types';
import { useState } from 'react';
import { HiOutlineMinus } from 'react-icons/hi';
import { BsPlusLg, } from 'react-icons/bs';
import YouTube, { YouTubeProps } from 'react-youtube';

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const opts: YouTubeProps['opts'] = {
    height: '427',
    width: '700',
  }

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='space-y-2'>
      {items.map((item, index) => (
        <div key={index} className='border-b border-gray-300 px-2'>
          <button
            className='flex justify-between items-center w-full text-left py-4 focus:outline-none'
            onClick={() => toggleAccordion(index)}
          >
            <span className='text-md font-normal uppercase'>{item.question}</span>
            {activeIndex === index ? <HiOutlineMinus size={20} /> : <BsPlusLg size={20} />}
          </button>

          <div className={`${activeIndex === index ? 'pt-0 pb-4 duration-300 ease-out transition-all h-auto' : 'invisible h-0 duration-100 ease-out transition-all'}`}>
            {item.type === 'string' &&
              <p className='sec_desc'>{item.answer}</p>
            }
            {item.type === 'video' &&
              <div className='grid w-full'>
                <YouTube videoId={item.answer} opts={opts} className='mx-auto' />
              </div>
            }
          </div>

        </div>
      ))}
    </div>
  );
};

export default Accordion;
