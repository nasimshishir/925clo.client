import '@styles/globals.css';
import { DropdownMenuContextProvider } from '@lib/context api/providers/DropdownMenuContextProvider';
import { Headerv1, Footerv1 } from '@components';


export const metadata = {
  title: '925',
  description: 'Your daily style manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <DropdownMenuContextProvider>
      <html lang="en">
        <body className="">
          <Headerv1 />
          {children}
          <Footerv1 />
        </body>
      </html>
    </DropdownMenuContextProvider>
  )
}
