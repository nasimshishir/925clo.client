import '@styles/globals.css';
import { DropdownMenuContextProvider } from '@lib/context api/providers/DropdownMenuContextProvider';
import Footerv1 from '@components/Footer.v1';
import { Headerv1 } from '@components';


export const metadata = {
  title: '925clo',
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
          <main className="min-h-screen">
            <Headerv1 />
            {children}
            <Footerv1 />
          </main>
        </body>
      </html>
    </DropdownMenuContextProvider>
  )
}
