import { createContext, useState } from "react";

export const PendingContext = createContext();

export function PendingProvider({ children }) {
    const habitsInitialState = JSON.parse(window.localStorage.getItem("pendingHabits")) || [];
    const [PendingHabits, setPendingHabits] = useState(habitsInitialState)
    return (
        <PendingContext.Provider
            value={{ PendingHabits, setPendingHabits }}
        >
            {children}
        </PendingContext.Provider>
    )
}