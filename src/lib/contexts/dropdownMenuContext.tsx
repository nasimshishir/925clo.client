'use client'
import { menuItem, menuList } from "@lib/types/types";
import { Dispatch, ReactNode, SetStateAction, createContext, useState, useContext } from "react";

interface DropdownMenuContextProps {
    menuData: menuList[];
    setMenuData: Dispatch<SetStateAction<menuList[]>>;
    itemId: number | null;
    setItemId: Dispatch<SetStateAction<number | null>>;
    menuItemData: menuItem | undefined;
    setMenuItemData: Dispatch<SetStateAction<menuItem | undefined>>;
    isHovering: boolean;
    setIsHovering: Dispatch<SetStateAction<boolean>>;
}

interface DropdownMenuContextProviderProps {
    children: ReactNode
}

const DropdownMenuContext = createContext<DropdownMenuContextProps>({
    menuData: [],
    setMenuData: (): menuList[] => [],
    itemId: null,
    setItemId: (): number | null => null,
    menuItemData: undefined,
    setMenuItemData: (): menuItem | undefined => (undefined),
    isHovering: false,
    setIsHovering: (): boolean => (false)
});

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