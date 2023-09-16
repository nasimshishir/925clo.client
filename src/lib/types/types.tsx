// export type menuList = {
//     id: string,
//     title: string,
//     desc: string,
//     img: string,
//     fullImg: string
// }

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
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

export type FilterParams = {
    colors?: { color: string }[];
    brands?: { brand: string }[];
}