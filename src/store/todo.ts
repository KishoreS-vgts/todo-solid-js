import { createStore } from "solid-js/store";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const [todos, setTodos] = createStore<Todo[]>([]);
const [completedTodos, setCompletedTodos] = createStore<Todo[]>([]);

let todoId = 0;
const addTodo = (text: string) => {
  setTodos([...todos, { id: ++todoId, text, completed: false }]);
};
const toggleTodo = (id: number) => {
  setTodos(
    (todo) => todo.id === id,
    "completed",
    (completed) => !completed
  );
  // filter completed todos
  setCompletedTodos(todos.filter((todo) => todo.completed));
};
const removeTodo = (id: number) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};

export { todos, addTodo, toggleTodo, completedTodos, removeTodo };
