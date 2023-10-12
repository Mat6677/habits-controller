import { CompleteContext } from "../context/complete"
import { useContext } from "react"
import { CompleteHabit } from "./CompleteHabit"

export const CompleteHabits = () => {
  const { completeHabits } = useContext(CompleteContext)
  return (
    <section>
      <h3>Complete Today</h3>
      <div className="complete-habits">{completeHabits.length > 0 ? completeHabits.map(habit => <CompleteHabit key={habit.id} habit={habit} />) : <p>There aren't completed habits yet</p>}</div>
    </section>
  )
}
