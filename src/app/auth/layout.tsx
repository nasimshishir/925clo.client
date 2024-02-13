import { Headerv1 } from '@components';
import '@styles/globals.css';
import { DropdownMenuContextProvider } from '@lib/context api/providers/DropdownMenuContextProvider';
import Providers from '@lib/context api/providers/Providers';


export const metadata = {
    title: '925-Authentication',
    description: 'Your daily style manager',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Providers>
            <DropdownMenuContextProvider>
                {children}
            </DropdownMenuContextProvider>
        </Providers>
    )
}
