import { Footerv1, Headerv2 } from '@components';
import '@styles/globals.css';
import { DropdownMenuContextProvider } from '@lib/context api/providers/DropdownMenuContextProvider';


export const metadata = {
  title: 'How It Works',
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
      <section className="min-h-screen">
        {children}
      </section>
      <Footerv1 />
    </DropdownMenuContextProvider>
  )
}
