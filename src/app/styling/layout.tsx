import { Headerv2 } from '@components';
import Footerv2 from '@components/Footer.v2';
import '@styles/globals.css';
import { DropdownMenuContextProvider } from '@lib/context api/providers/DropdownMenuContextProvider';


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
                        <Headerv2 />
                        {children}
                        <Footerv2 />
                    </main>
                </body>
            </html>
        </DropdownMenuContextProvider>
    )
}
