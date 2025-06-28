"use client";
import { useFormState } from "react-dom";

async function increment(previousState, formData) {
  return previousState + 1;
}

async function createTodo(prevState, formData) {
  return prevState.concat(formData.get("todo"));
}

export default function StatefulForm({}) {
  const [state, formAction] = useFormState(increment, 0);
  const [todoState, todoFormAction] = useFormState(createTodo, []);
  return (
    <div>
      <form>
        {state}
        <button formAction={formAction}>Increment</button>
      </form>

      <form action={todoFormAction}>
        <input type="text" name="todo" />
        <button type="submit">Submit</button>
        <p>{todoState.join(",")}</p>
      </form>
    </div>
  );
}
