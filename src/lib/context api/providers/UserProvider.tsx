'use client'
import { UserContext } from '@lib/context api/contexts/UserContext';
import { menuItem, user } from '@lib/types/types';
import { ReactNode, useState, useContext } from 'react'

interface DropdownMenuContextProviderProps {
    children: ReactNode
}

export const UserContextProvider = ({ children }: DropdownMenuContextProviderProps) => {

    const [user, setUser] = useState<user | null>(null)





    return (
        < UserContext.Provider value={{ user, setUser }} >
            {children}
        </UserContext.Provider >
    )

}

export const useUserContext = () => useContext(UserContext);