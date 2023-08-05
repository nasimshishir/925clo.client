import { Herov1 } from '@components'
import Image from 'next/image';
import { redirect } from 'next/navigation';
import mobile from '@assets/mobile_section.webp'


export default function Home() {
  // const { user } = useDropdownMenuContext();
  const user = true;

  if (!user) {
    redirect('/auth')
  }

  return (
    <main className='min-h-screen absolute w-full'>
      <section>
        <Herov1 />
      </section>
      <section className='bg-primary_orange'>
        <div className='grid grid-cols-2'>
          <div className=''>
            <h2 className='text-white sec_title mb-2'>Build Style Profile</h2>
            <p className='text-white sec_desc mb-5'>In this style profile we ask for your preferences on brands, item types and colours to help us learn more about you and your individual style.
            </p>
          </div>
          <div className='relative'>
            <Image className='' src={mobile} alt='testing' width={0} height={300} />
          </div>
        </div>
      </section>
    </main>
  )
}
