import '@styles/globals.css';
import { DropdownMenuContextProvider } from '@lib/context api/providers/DropdownMenuContextProvider';


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
          {children}
        </body>
      </html>
    </DropdownMenuContextProvider>
  )
}
