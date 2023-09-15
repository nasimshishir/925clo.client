import { Headerv1 } from '@components';
import '@styles/globals.css';
import { DropdownMenuContextProvider } from '@lib/context api/providers/DropdownMenuContextProvider';


export const metadata = {
    title: '925-Sign Up',
    description: 'Your daily style manager',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <DropdownMenuContextProvider>
            {children}
        </DropdownMenuContextProvider>
    )
}
