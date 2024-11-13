import { createSignal } from "solid-js";
import { addTodo } from "../store/todo";

let inputRef: HTMLInputElement;
export default function Todo() {
  const [todoText, setTodoText] = createSignal("");
  const formSubmit = (e: Event) => {
    e.preventDefault();
    addTodo(todoText());
    inputRef.value = "";
  };
  return (
    <>
      <form id="add-todo-form" onSubmit={formSubmit}>
        <div class="flex flex-col justify-start">
          <label for="add-todo">Add your todos for the day:</label>
          <input
            ref={inputRef}
            id="add-todo"
            value={todoText()}
            type="text"
            autocomplete="off"
            class="h-8 w-64 mt-1"
            placeholder="I need to complete..."
            onInput={(e) => {
              setTodoText(e.target.value);
            }}
          />
        </div>
      </form>
    </>
  );
}
