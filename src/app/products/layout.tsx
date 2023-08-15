import '@styles/globals.css';
import { DropdownMenuContextProvider } from '@lib/context api/providers/DropdownMenuContextProvider';


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
            <section className="min-h-screen">
                {children}
            </section>
        </DropdownMenuContextProvider>
    )
}
