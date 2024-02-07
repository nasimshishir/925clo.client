'use client'
import { UserContext } from '@lib/context api/contexts/UserContext';
import { User, menuItem } from '@lib/types/types';
import { ReactNode, useState, useContext } from 'react'

interface UserProviderProps {
    children: ReactNode
}

export const UserContextProvider = ({ children }: UserProviderProps) => {

    const [user, setUser] = useState<User | null>(null)





    return (
        < UserContext.Provider value={{ user, setUser }} >
            {children}
        </UserContext.Provider >
    )

}

export const useUserContext = () => useContext(UserContext);