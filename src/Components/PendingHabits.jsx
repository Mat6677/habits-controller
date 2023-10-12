import { PendingContext } from "../context/pending"
import { useContext, useState } from "react"
import { Habit } from "./Habit"


export const PendingHabits = () => {
  const { PendingHabits } = useContext(PendingContext)
  const [modal, setModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const info = Object.fromEntries(
      new window.FormData(e.target)
    )

    window.localStorage.setItem("pendingHabits", JSON.stringify([...PendingHabits, {
      id:info.title,
      title: info.title,
      description: info.description,
      timeLine: info.timeLine
    }]));
    location.reload()
    setModal(!modal)
  }
  return (
    <>
      <main>
        <h2>PENDING HABITS</h2>
        <div className="pending-habits">{PendingHabits.length > 0 ? PendingHabits.map(habit => <Habit key={habit.id} habit={habit} />) : <p>There aren't pending habits</p>}</div>
        <button onClick={() => setModal(!modal)}><i className="fa-solid fa-plus"></i></button>
      </main>
      <div className={modal ? "modal-show" : "modal-hidden"}>
        <form action="" onSubmit={handleSubmit}>
          <h3>Add a new Habit</h3>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" required />
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" cols="30" rows="10" required></textarea>
          <select name="timeLine" id="timeLine">
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
          <button>Add</button>
        </form>
      </div>
    </>
  )
}
