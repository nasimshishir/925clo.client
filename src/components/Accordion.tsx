import { AccordionItem } from '@lib/types/types';
import { useState } from 'react';
import { HiOutlineMinus } from 'react-icons/hi';
import { BsPlusLg, } from 'react-icons/bs';

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='space-y-4'>
      {items.map((item, index) => (
        <div key={index} className='border-b border-gray-300'>
          <button
            className='flex justify-between items-center w-full text-left p-4 focus:outline-none'
            onClick={() => toggleAccordion(index)}
          >
            <span className='text-md font-normal uppercase'>{item.question}</span>
            {activeIndex === index ? <HiOutlineMinus size={20} /> : <BsPlusLg size={20} />}
          </button>

          <div className={`${activeIndex === index ? 'p-4 duration-300 ease-out transition-all' : 'invisible duration-100 ease-out transition-all'}`}>
            <p className='sec_desc'>{item.answer}</p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Accordion;
