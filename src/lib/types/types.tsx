// export type menuList = {
//     id: string,
//     title: string,
//     desc: string,
//     img: string,
//     fullImg: string
// }

import { type } from "os"
import { UrlObject } from "url"

export type user = {
    id: number,
    name: string,
    createdAt: Date,
    asscessToken: string,
    refreshToken: string
}

export type menuItem = {
    id: string,
    title: string,
    desc: string,
    img: string,
    fullImg: string,
    url: string,
}

export type AccordionItem = {
    question: string;
    type: 'string' | 'video';
    answer: string
}

export type Product = {
    id: number,
    product_title: string,
    description: string,
    currency?: string,
    image?: string,
    price?: string,
    brand?: {
        id: number,
        brand: string
    },
    color?: string,
    type?: string,
    gender?: string,
    product_url: string,
    sizes?: { size: string, stock: boolean }[],
    occasion?: string[],
    season?: string[],
    createdAt?: string,
    updateddAt?: string,
}

export type FilterParams = {
    colors?: { color: string }[];
    brands?: { brand: string }[];
}

export type Category = {

}