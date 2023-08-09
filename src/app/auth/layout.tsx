import { Headerv1 } from '@components';
import '@styles/globals.css';
import { DropdownMenuContextProvider } from '@lib/context api/providers/DropdownMenuContextProvider';


export const metadata = {
    title: '925-Build Style Profile',
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
                    <section className="min-h-screen">
                        {children}
                    </section>
                </body>
            </html>
        </DropdownMenuContextProvider>
    )
}
