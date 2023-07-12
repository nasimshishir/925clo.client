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


export const DropdownMenuContext = createContext<DropdownMenuContextProps>({
    menuData: [],
    setMenuData: (): menuList[] => [],
    itemId: null,
    setItemId: (): number | null => null,
    menuItemData: undefined,
    setMenuItemData: (): menuItem | undefined => (undefined),
    isHovering: false,
    setIsHovering: (): boolean => (false)
});