'use client'
import { FilterParams } from "@lib/types/types";
import { Dispatch, SetStateAction, createContext } from "react";

interface ProductFilterContextProps {
    queryPramas: FilterParams | null;
    setQueryPramas: Dispatch<SetStateAction<FilterParams | null>>;
}


export const ProductFilterContext = createContext<ProductFilterContextProps>({
    queryPramas: null,
    setQueryPramas: () => null,
});

