import Accordion from '@components/Accordion';
import { AccordionItem } from '@lib/types/types';
import { NextPage } from 'next';

const faqItems: AccordionItem[] = [
  {
    question: 'What is the product warranty?',
    type: 'string',
    answer: 'Our products come with a 1-year warranty against defects...',
  },
  {
    question: 'How can I return a product?',
    type: 'string',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    question: 'How can I return a product?',
    type: 'video',
    answer: 'mJ3bGvy0WAY',
  },

  // Add more FAQ items https://www.youtube.com/watch?v=
];


const howItWorks: NextPage = () => {

  return (
    <div className='pt-20 grid px-3 lg:px-0'>
      <div className='w-full lg:w-3/5 lg:max-w-[1200px] mx-auto lg:pt-10'>

        {/* Head */}
        <div className=''>
          <h4 className='sec_title text-center'>How it Works</h4>
          <p className='text-center sec_desc mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Body */}
        <div className='my-10'>
          <Accordion items={faqItems} />
        </div>
      </div>
    </div>

  )
}

export default howItWorks;