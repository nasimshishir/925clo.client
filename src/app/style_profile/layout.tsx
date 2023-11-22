import { Footerv1, Headerv2 } from '@components';
import '@styles/globals.css';
import { DropdownMenuContextProvider } from '@lib/context api/providers/DropdownMenuContextProvider';
import { Suspense } from 'react';
import Loading from './loading';


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
      <div className='realtive bg-header_black max-h-screen min-h-screen flex flex-col h-screen'>
        <Headerv2 />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </div>
      {/* <Footerv1 /> */}
    </DropdownMenuContextProvider>
  )
}
