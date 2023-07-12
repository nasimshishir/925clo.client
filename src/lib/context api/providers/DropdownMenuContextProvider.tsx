'use client'
import { DropdownMenuContext } from '@lib/context api/contexts/DropdownMenuContext';
import { menuItem, menuList } from '@lib/types/types';
import { ReactNode, useState, useContext } from 'react'

interface DropdownMenuContextProviderProps {
    children: ReactNode
}

export const DropdownMenuContextProvider = ({ children }: DropdownMenuContextProviderProps) => {

    const [itemId, setItemId] = useState<number | null>(null);
    const [menuData, setMenuData] = useState<menuList[]>([]);
    const [menuItemData, setMenuItemData] = useState<menuItem>();
    const [isHovering, setIsHovering] = useState<boolean>(false);


    const value = {}
    return (
        < DropdownMenuContext.Provider value={{ menuData, setMenuData, itemId, setItemId, menuItemData, setMenuItemData, isHovering, setIsHovering }} >
            {children}
        </DropdownMenuContext.Provider >
    )

}

export const useDropdownMenuContext = () => useContext(DropdownMenuContext);