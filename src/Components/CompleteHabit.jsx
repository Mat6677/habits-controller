import { CompleteContext } from "../context/complete"
import { useContext } from "react"

export const CompleteHabit = ({ habit }) => {
    const { completeHabits,setCompleteHabits } = useContext(CompleteContext)

    const deleteHabit = () => {
        const filteredHabits = completeHabits.filter(item => item.id !== habit.id)
        setCompleteHabits(filteredHabits)
        localStorage.setItem("completeHabits",JSON.stringify(filteredHabits))
    }
    return (
        <div>
            <h4>{habit.title}</h4>
            <p>{habit.description}</p>
            <div>
                <button onClick={deleteHabit}>Delete Habit</button>
                <strong>{habit.timeLine}</strong>
            </div>
        </div>
    )
}
