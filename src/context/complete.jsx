import { createContext, useState } from "react";

export const CompleteContext = createContext();

export function CompleteProvider({ children }) {
    const habitsInitialState = JSON.parse(window.localStorage.getItem("completeHabits")) || [];
    const [completeHabits, setCompleteHabits] = useState(habitsInitialState)

    return (
        <CompleteContext.Provider
            value={{ completeHabits, setCompleteHabits }}
        >
            {children}
        </CompleteContext.Provider>
    )
}