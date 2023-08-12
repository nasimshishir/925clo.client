'use client'
import { menuItem } from "@lib/types/types";
import { Dispatch, ReactNode, SetStateAction, createContext, useState, useContext } from "react";

interface DropdownMenuContextProps {
    menuData: menuItem[];
    setMenuData: Dispatch<SetStateAction<menuItem[]>>;
    itemId: number | null;
    setItemId: Dispatch<SetStateAction<number | null>>;
    menuItemData: menuItem | undefined;
    setMenuItemData: Dispatch<SetStateAction<menuItem | undefined>>;
    isHovering: boolean;
    setIsHovering: Dispatch<SetStateAction<boolean>>;
    user: null;
    styleProfileformStep: number;
    setStyleProfileformStep: Dispatch<SetStateAction<number>>
}


export const DropdownMenuContext = createContext<DropdownMenuContextProps>({
    menuData: [],
    setMenuData: (): menuItem[] => [],
    itemId: null,
    setItemId: (): number | null => null,
    menuItemData: undefined,
    setMenuItemData: (): menuItem | undefined => (undefined),
    isHovering: false,
    setIsHovering: (): boolean => (false),
    user: null,
    styleProfileformStep: 0,
    setStyleProfileformStep: (): number => 0,
});