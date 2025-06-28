"use client";

import { useOptimistic } from "react";
import { useFormState } from "react-dom";
import { createToDo } from "./actions";

export default function Form({ todos }) {
  const [state, sendFormAction] = useFormState(createToDo, { message: "" });

  const [optimisticToDos, addOptimisticTodo] = useOptimistic(
    todos.map((i) => ({ text: i })),
    (state, newTodo) => [
      ...state,
      {
        text: newTodo,
        sending: true,
      },
    ]
  );

  async function formAction(formData) {
    addOptimisticTodo(formData.get("todo"));
    await sendFormAction(formData);
  }

  console.log(optimisticToDos);

  return (
    <>
      <form action={formAction}>
        <input type="text" name="todo" />
        <button type="submit"> Add </button>
        <p aria-live="polite" className="sr-only">
          {state?.message}
        </p>
      </form>
      <ul>
        {optimisticToDos.map(({ text, sending }, i) => (
          <li key={i}>
            {text}
            {!!sending && <small> (Sending...)</small>}
          </li>
        ))}
      </ul>
    </>
  );
}
