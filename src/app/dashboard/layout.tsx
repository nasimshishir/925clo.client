import { DashboardSidebar, Footerv1, Headerv4 } from '@components';
import '@styles/globals.css';
import { DropdownMenuContextProvider } from '@lib/context api/providers/DropdownMenuContextProvider';
import { Suspense } from 'react';
import Loading from './loading';


export const metadata = {
  title: 'Dashboard',
  description: 'Your daily style manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DropdownMenuContextProvider>
      <Headerv4 />
      <section className='max-h-screen grid w-full h-screen'>
        <div className='grid grid-cols-1 lg:grid-cols-5 w-full lg:w-3/4 lg:max-w-[1140px] mx-auto'>
          <div className='col-span-1 grid items-center'>
            <DashboardSidebar />
          </div>
          <div className='col-span-4 grid items-center ps-10'>
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </div>
        </div>
      </section>
      <Footerv1 />
    </DropdownMenuContextProvider>
  )
}
