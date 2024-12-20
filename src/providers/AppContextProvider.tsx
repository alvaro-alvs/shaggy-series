import type { UserType } from "@/types/AppTypes";
import { createContext, useContext, useState } from "react";


const AppContext = createContext<{ userCad: UserType | undefined, setUserCad: React.Dispatch<React.SetStateAction<UserType | undefined>> } | null>(null)

export default function AppContextProvider({ children }: { children: React.ReactNode }) {
    const [userCad, setUserCad] = useState<UserType | undefined>(undefined)

    return (
        <AppContext.Provider value={{ userCad, setUserCad }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error('useAppContext must be used within a AppContextProvider')
    }
    return context
}