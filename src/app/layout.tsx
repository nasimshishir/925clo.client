import '@styles/globals.css';
import { DropdownMenuContextProvider } from '@lib/context api/providers/DropdownMenuContextProvider';
import { UserContextProvider } from '@lib/context api/providers/UserProvider';


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
    <UserContextProvider>
      <DropdownMenuContextProvider>
        <html lang="en">
          <body className="w-full overflow-x-hidden">
            {children}
          </body>
        </html>
      </DropdownMenuContextProvider>
    </UserContextProvider>
  )
}
