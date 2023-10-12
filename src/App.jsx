import { CompleteHabits } from "./Components/CompleteHabits"
import { Header } from "./Components/Header"
import { PendingHabits } from "./Components/PendingHabits"

function App() {
  return (
    <>
      <Header />
      <PendingHabits />
      <CompleteHabits />
    </>
  )
}

export default App
