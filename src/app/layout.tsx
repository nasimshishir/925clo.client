import '@styles/globals.css';
import { DropdownMenuContextProvider } from '@lib/context api/providers/DropdownMenuContextProvider';
import { UserContextProvider } from '@lib/context api/providers/UserProvider';
import Providers from '@lib/context api/providers/Providers';


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
    <html lang="en">
      <body className="w-full overflow-x-hidden">
        <Providers>
          <UserContextProvider>
            <DropdownMenuContextProvider>
              {children}
            </DropdownMenuContextProvider>
          </UserContextProvider>
        </Providers>
      </body>
    </html>
  )
}
