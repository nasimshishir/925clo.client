'use client'
import { Footerv1, Headerv2, Herov2, WishlistSidebar } from '@components';
import React from 'react';
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';
import Accordion from '@components/Accordion';
import { AccordionItem } from '@lib/types/types';
import { NextPage } from 'next';

const faqItems: AccordionItem[] = [
  {
    question: 'What is the product warranty?',
    answer: 'Our products come with a 1-year warranty against defects...',
  },
  {
    question: 'How can I return a product?',
    answer: 'You can initiate a return by contacting our customer service...',
  },
  // Add more FAQ items
];


const styling: NextPage = () => {

  return (
    <div className='pt-20 grid'>
      <div className='w-3/5 max-w-[1200px] mx-auto pt-10'>

        {/* Head */}
        <div>
          <h4 className='sec_title text-center'>How it Works</h4>
          <p className='text-center sec_desc mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Body */}
        <div className='mt-10'>
          <Accordion items={faqItems} />
        </div>
      </div>
    </div>

  )
}

export default styling;