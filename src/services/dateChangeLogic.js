import { date } from "../context/date";

export function dateChangeFunction() {
  const dateChange = JSON.parse(localStorage.getItem("date"));
  const pending = JSON.parse(localStorage.getItem("pendingHabits"));
  const complete = JSON.parse(localStorage.getItem("completeHabits"));

  if (dateChange != date.getDate()) {
    localStorage.setItem("completeHabits", JSON.stringify([]));
    localStorage.setItem(
      "pendingHabits",
      JSON.stringify([...pending, ...complete])
    );
    localStorage.setItem("date",JSON.stringify(date.getDate()))
    return;
  }
}
