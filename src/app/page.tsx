'use client'
import { Footerv1, Herov1, Headerv1, WishlistSidebar } from '@components'
import Image from 'next/image';
import { redirect } from 'next/navigation';
import mobile from '@assets/mobile_section.webp'
import { useDropdownMenuContext } from '@lib/context api/providers/DropdownMenuContextProvider';


export default function Home() {

  const { wishlistIsOpen } = useDropdownMenuContext()

  const user = true;

  if (!user) {
    redirect('/auth')
  }

  return (
    <>
      <Headerv1 />

      <main className='min-h-screen w-full'>

        {/* Hero section Start */}
        <section>
          <Herov1 />
        </section>
        {/* Hero section Ends */}

        {/* What we do section Start */}
        <section className='bg-primary_orange px-10 lg:px-28'>
          <div className='grid grid-cols-1 lg:grid-cols-2 '>
            <div className='flex justify-center items-center pt-10 lg:pt-0'>
              <div className='text-center lg:text-left'>
                <h2 className='text-white sec_title mb-3'>What We Do</h2>
                <p className='text-white sec_desc'>We have had enough of asking for a seat at the luxury table that we have built our own. A brand that is for the
                  people by the people - FORMING NEW AGE LUXURY. <br />
                  <br />
                  925 are challenging what is means to be luxury further than price point, by offering products and services
                  that have lower barriers to entry whilst maintaining high quality and great design.
                </p>
              </div>
            </div>
            <div className='flex justify-end items-baseline pt-10'>
              <Image className='' src={mobile} alt='testing' width={0} height={250} />
            </div>
          </div>
        </section>
        {/* What we do section End */}

        {/* How it Works Section Start */}
        <section className='bg-black px-10 lg:px-28 py-24'>
          <div>
            <h2 className='text-white sec_title mb-12'>How It Works</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 text-white gap-20 lg:gap-10'>
              <div>
                <span className='text-5xl font-bold text-primary_orange font-helvetica'>01.</span>
                <h4 className='uppercase sec_title my-6'>Offering a personalised styling platform</h4>
                <p className='sec_desc'>Customers answer a series of questions which enable us to provide a personalised 5-piece outfit.
                  <br />
                  <br />
                  Questions are based on: gender, location, style preferences and what occasion dressing for.</p>
              </div>
              <div>
                <span className='text-5xl font-bold text-primary_orange font-helvetica'>02.</span>
                <h4 className='uppercase sec_title my-6'>PERSONALISED OUTFIT FOR CUSTOMER</h4>
                <p className='sec_desc'>Based on the customers information provided our technology will generate a personalised 5-piece outfit in response. These suggested product inventory comes from the partnerships we have developed with fashion designers and retailers.</p>
              </div>
              <div>
                <span className='text-5xl font-bold text-primary_orange font-helvetica'>03.</span>
                <h4 className='uppercase sec_title my-6'>BUY PRODUCTS FROM SUGGESTED OUTFITS</h4>
                <p className='sec_desc'>Customers will be purchasing either direct from fashion designers or retailers. We run a fulfilment by seller model - you handle logistics and customer service.</p>
              </div>
            </div>
          </div>
        </section>
        {/* How it Works Section Ends */}
      </main>
      <Footerv1 /></>

  )
}
