'use client'
import { menuItem } from "@lib/types/types";
import { Dispatch, ReactNode, SetStateAction, createContext, useState, useContext } from "react";

interface DropdownMenuContextProps {
    menuData: menuItem[] | null;
    setMenuData: Dispatch<SetStateAction<menuItem[] | null>>;
    itemId: number | null;
    setItemId: Dispatch<SetStateAction<number | null>>;
    menuItemData: menuItem | null;
    setMenuItemData: Dispatch<SetStateAction<menuItem | null>>;
    user: null;
    styleProfileformStep: number;
    setStyleProfileformStep: Dispatch<SetStateAction<number>>;
    wishlistIsOpen: boolean;
    setWishlistIsOpen: Dispatch<SetStateAction<boolean>>
}


export const DropdownMenuContext = createContext<DropdownMenuContextProps>({
    menuData: [],
    setMenuData: (): menuItem[] => [],
    itemId: null,
    setItemId: (): number | null => null,
    menuItemData: null,
    setMenuItemData: (): menuItem | undefined => (undefined),
    user: null,
    styleProfileformStep: 0,
    setStyleProfileformStep: (): number => 0,
    wishlistIsOpen: false,
    setWishlistIsOpen: (): boolean => (false)
});