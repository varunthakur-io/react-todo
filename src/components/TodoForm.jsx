import React, { useState } from "react";
import { useTodo } from "../context";

// Styles for the form and its elements
const styles = {
  form: "flex items-center gap-2 p-3 bg-zinc-900 rounded-xl shadow-lg w-full max-w-xl mx-auto border border-zinc-800 transition-all duration-300 focus-within:ring-2 focus-within:ring-violet-600 focus-within:shadow-violet-500/40",
  input:
    "flex-1 border-none rounded-lg px-4 py-2 bg-zinc-800 text-zinc-100 placeholder-zinc-400 focus:bg-zinc-700 focus:ring-2 focus:ring-violet-500 outline-none transition-all duration-200 text-base shadow-sm",
  button:
    "px-5 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-medium shadow-md shadow-violet-500/30 hover:shadow-lg hover:shadow-violet-500/40 transition-all duration-200 border border-violet-700 active:scale-95",
};

/**
 * TodoForm component allows users to add new todos.
 * Uses context to add todos to the global list.
 */
function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  // Handles form submission to add a new todo
  const add = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    addTodo({ todo: todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className={styles.form}>
      <input
        type="text"
        placeholder="Add a new task..."
        className={styles.input}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
}

export default TodoForm;
