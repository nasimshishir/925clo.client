'use client'
import { DropdownMenuContext } from '@lib/context api/contexts/DropdownMenuContext';
import { menuItem } from '@lib/types/types';
import { ReactNode, useState, useContext } from 'react'

interface DropdownMenuContextProviderProps {
    children: ReactNode
}

export const DropdownMenuContextProvider = ({ children }: DropdownMenuContextProviderProps) => {

    const [itemId, setItemId] = useState<number | null>(null);
    const [menuData, setMenuData] = useState<menuItem[] | null>(null);
    const [menuItemData, setMenuItemData] = useState<menuItem | null>(null);
    const user = null;
    const [styleProfileformStep, setStyleProfileformStep] = useState<number>(0)



    return (
        < DropdownMenuContext.Provider value={{ menuData, setMenuData, itemId, setItemId, menuItemData, setMenuItemData, user, styleProfileformStep, setStyleProfileformStep }} >
            {children}
        </DropdownMenuContext.Provider >
    )

}

export const useDropdownMenuContext = () => useContext(DropdownMenuContext);