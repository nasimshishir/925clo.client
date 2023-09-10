import { Accordion, Back } from '@components';
import { AccordionItem } from '@lib/types/types';


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
];


const howItWorksPage = () => {

  return (
    <section className='min-h-screen w-full pt-28 grid px-10 lg:px-0'>
      <div className='w-full lg:w-3/5 lg:max-w-[1200px] mx-auto lg:pt-10'>
        {/* Head */}
        <div className='' >
          <Back />
          <h4 className='sec_title lg:text-center'>How it Works</h4>
          <p className='lg:text-center sec_desc mt-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Body */}
        <div className='my-10'>
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  )
}

export default howItWorksPage;