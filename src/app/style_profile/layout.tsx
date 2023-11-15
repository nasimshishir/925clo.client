import { Footerv1, Headerv2 } from '@components';
import '@styles/globals.css';
import { DropdownMenuContextProvider } from '@lib/context api/providers/DropdownMenuContextProvider';
import { Suspense } from 'react';
import Loading from './loading';
import Logo from '@assets/logo_2.png'


export const metadata = {
  title: 'Style Profile',
  description: 'Your daily style manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DropdownMenuContextProvider>
      <div className='bg-header_black'>
        <Headerv2 />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <Footerv1 />
      </div>
    </DropdownMenuContextProvider>
  )
}
