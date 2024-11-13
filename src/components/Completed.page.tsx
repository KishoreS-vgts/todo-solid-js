import { useNavigate } from "@solidjs/router";
import { For, Show } from "solid-js";
import { completedTodos } from "../store/todo";

export default function Completed() {
  const navigate = useNavigate();
  return (
    <div class="max-w-screen-sm mx-auto p-4">
      <div class="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          class="flex items-center gap-2 text-lg bg-blue-600 text-white p-2 rounded-full"
        >
          <Arrow />
        </button>
        <h2 class="text-xl">Completed Todos</h2>
      </div>

      <div class="mt-2 max-w-screen-sm p-1">
        <Show when={completedTodos.length} fallback={<p>No completed tasks</p>}>
          <For each={completedTodos}>
            {(todo, index) => (
              <div class="flex items-center justify-between mt-2">
                <div class="flex items-center gap-2">
                  <p class="text-lg">
                    {index() + 1}. {todo.text}
                  </p>
                </div>
              </div>
            )}
          </For>
        </Show>
      </div>
    </div>
  );
}

const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-move-left bg-blue-600"
    >
      <path d="M6 8L2 12L6 16" />
      <path d="M2 12H22" />
    </svg>
  );
};
