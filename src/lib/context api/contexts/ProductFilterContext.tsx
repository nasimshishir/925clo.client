'use client'
import { FilterParams, menuItem } from "@lib/types/types";
import { Dispatch, SetStateAction, createContext } from "react";

interface ProductFilterContextProps {
    queryPramas: FilterParams | null;
    setQueryPramas: Dispatch<SetStateAction<FilterParams | null>>;
    category: menuItem | null;
    setCategory: Dispatch<SetStateAction<menuItem | null>>;
}


export const ProductFilterContext = createContext<ProductFilterContextProps>({
    queryPramas: null,
    setQueryPramas: () => null,
    category: null,
    setCategory: () => null
});

