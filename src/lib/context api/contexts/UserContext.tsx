'use client'
import { User } from "@lib/types/types";
import { Dispatch, SetStateAction, createContext } from "react";

interface UserContextProps {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
}


export const UserContext = createContext<UserContextProps>({
    user: null,
    setUser: () => { null },
});

