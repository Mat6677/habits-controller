import { useContext } from "react"
import { DateContext } from "../context/date"
import { CompleteContext } from "../context/complete"

export const Header = () => {
    const { dateNow } = useContext(DateContext)
    const { completeHabits } = useContext(CompleteContext)
    let doneHabits = 0
    const count = ()=> {
        for (let i = 0; i < completeHabits.length; i++) {
            doneHabits++
        }
        return doneHabits
    }
    
    return (
        <header>
            <section>
                <div>
                    <h1>HABIT CONTROLLER</h1>
                    <p>DATE: {dateNow}</p>
                    <p>HABITS COMPLETED TODAY: {count()}</p>
                </div>
            </section>
        </header>
    )
}
