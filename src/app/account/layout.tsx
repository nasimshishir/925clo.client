import { DashboardSidebar, Footerv1, Headerv2, Headerv4 } from '@components';
import '@styles/globals.css';
import { DropdownMenuContextProvider } from '@lib/context api/providers/DropdownMenuContextProvider';
import { Suspense } from 'react';
import Loading from './loading';
import { getServerSession } from 'next-auth';
import { authOptions } from '@app/api/auth/[...nextauth]/route';


export const metadata = {
  title: 'Account',
  description: 'Your daily style manager',
}

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)
  return (
    <DropdownMenuContextProvider>
      <section className='relative bg-header_black max-h-screen min-h-screen flex flex-col h-screen'>
        <Headerv2 />
        {children}
      </section>
    </DropdownMenuContextProvider>
  )
}
