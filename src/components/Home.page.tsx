import { A } from "@solidjs/router";
import Todo from "./Todo";
import { For, Show } from "solid-js";
import { removeTodo, todos, toggleTodo } from "../store/todo";

// Input component
// List component

export default function Home() {
  return (
    <div class="container mx-auto max-w-screen-sm h-full p-4 mt-3">
      <A
        href="/completed-tasks"
        class=" text-lg bg-blue-600 text-white p-2 rounded-md mx-auto"
      >
        Completed Tasks
      </A>
      <div class="mt-4">
        <Todo />
      </div>
      <div class="max-w-96">
        <Show
          when={todos.length}
          fallback={
            <p class="mt-2 ml-1">
              No todos. Create one to start being productive.
            </p>
          }
        >
          <For each={todos}>
            {(todo) => (
              <div class="flex items-center justify-between mt-2">
                <div class="flex items-center gap-2">
                  <input
                    id={"add-todo-node" + todo.id}
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <label
                    for={"add-todo-node" + todo.id}
                    class={todo.completed ? "line-through" : ""}
                  >
                    {todo.text}
                  </label>
                </div>
                <button
                  onClick={() => removeTodo(todo.id)}
                  class="flex items-center gap-2 text-lg bg-red-600 text-white p-2 rounded-md"
                >
                  <DeleteIcon />
                </button>
              </div>
            )}
          </For>
        </Show>
      </div>
    </div>
  );
}

const DeleteIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-trash-2 bg-red-600"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
};
