import '@styles/globals.css';
import { DropdownMenuContextProvider } from '@lib/context api/providers/DropdownMenuContextProvider';
import { Suspense } from 'react';
import Loading from './loading';
import { DashboardSidebar } from '@components';


export const metadata = {
  title: 'Account-Profile Info',
  description: 'Your daily style manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DropdownMenuContextProvider>
      <div className='bg-bg_white rounded-t-3xl flex felx-col h-full p-3 gap-1.5'>
        <DashboardSidebar />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </div>
    </DropdownMenuContextProvider>
  )
}
