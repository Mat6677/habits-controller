import { createContext } from "react";
import { dateChangeFunction } from "../services/dateChangeLogic";

export const DateContext = createContext()
export const date = new Date
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dateNow = `${weekday[date.getDay()]}, ${date.getDate()}, ${month[date.getMonth()]}, ${date.getFullYear()}`

dateChangeFunction()

export function DateProvider({ children }) {

    return (
        <DateContext.Provider
            value={{ dateNow }}
        >
            {children}
        </DateContext.Provider>
    )

}