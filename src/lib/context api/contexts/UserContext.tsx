'use client'
import { user } from "@lib/types/types";
import { Dispatch, SetStateAction, createContext } from "react";

interface UserContextProps {
    user: user | null;
    setUser: Dispatch<SetStateAction<user | null>>;
}


export const UserContext = createContext<UserContextProps>({
    user: null,
    setUser: () => { null },
});

