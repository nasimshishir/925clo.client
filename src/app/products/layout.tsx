import { Footerv1, Headerv2, ProductFilterSidebar } from '@components';
import '@styles/globals.css';
import { DropdownMenuContextProvider } from '@lib/context api/providers/DropdownMenuContextProvider';
import { Suspense } from 'react';
import Loading from './loading';


export const metadata = {
  title: 'Products',
  description: 'Your daily style manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DropdownMenuContextProvider>
      <Headerv2 />
      <ProductFilterSidebar />
      {children}
      <Footerv1 />
    </DropdownMenuContextProvider>
  )
}
