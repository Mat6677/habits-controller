import { PendingContext } from "../context/pending"
import { CompleteContext } from "../context/complete"
import { useContext } from "react"

export const Habit = ({ habit }) => {
  const { PendingHabits } = useContext(PendingContext)
  const { completeHabits } = useContext(CompleteContext)

  const handleClick = () => {
    console.log(habit)
    const filteredItem = PendingHabits.filter(item => item.id !== habit.id)
    window.localStorage.setItem("pendingHabits", JSON.stringify(filteredItem))
    window.localStorage.setItem("completeHabits", JSON.stringify([...completeHabits, habit]))
    location.reload()
  }

  return (
    <button onClick={handleClick} style={{ zIndex: '1000' }}>
      <h3>{habit.title}</h3>
      <p>{habit.description}</p>
      <strong>{habit.timeLine}</strong>
    </button>
  )
}
