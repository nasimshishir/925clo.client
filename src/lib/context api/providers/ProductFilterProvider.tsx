'use client'
import { ProductFilterContext } from '@lib/context api/contexts/ProductFilterContext';
import { FilterParams } from '@lib/types/types';
import { ReactNode, useState, useContext } from 'react'

interface ProdutcFilterProviderProps {
    children: ReactNode
}

export const ProductFilterContextProvider = ({ children }: ProdutcFilterProviderProps) => {

    const [queryPramas, setQueryPramas] = useState<FilterParams | null>(null)





    return (
        < ProductFilterContext.Provider value={{ queryPramas, setQueryPramas }} >
            {children}
        </ProductFilterContext.Provider >
    )

}

export const useProductFilterContext = () => useContext(ProductFilterContext);