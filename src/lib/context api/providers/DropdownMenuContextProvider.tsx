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
    const [styleProfileformStep, setStyleProfileformStep] = useState<number>(0);
    const [wishlistIsOpen, setWishlistIsOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isFilterBarOpen, setIsFilterBarOpen] = useState<boolean>(false)



    return (
        < DropdownMenuContext.Provider value={{ menuData, setMenuData, itemId, setItemId, menuItemData, setMenuItemData, user, styleProfileformStep, setStyleProfileformStep, wishlistIsOpen, setWishlistIsOpen, isLoading, setIsLoading, isFilterBarOpen, setIsFilterBarOpen }} >
            {children}
        </DropdownMenuContext.Provider >
    )

}

export const useDropdownMenuContext = () => useContext(DropdownMenuContext);