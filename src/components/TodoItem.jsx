import React, { useState } from "react";
import { useTodo } from "../context";

// Styles for the todo item and its elements
const styles = {
  container: (completed) =>
    `relative flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 shadow-lg transition-all duration-300 w-full max-w-xl mx-auto mb-3
      ${
        completed
          ? "opacity-70 transform scale-[0.98] blur-[0.5px]"
          : "hover:shadow-violet-500/30 hover:scale-[1.01]"
      }
    `,
  completedOverlay:
    "absolute inset-0 bg-gradient-to-r from-violet-600/20 to-zinc-900/0 rounded-xl pointer-events-none z-0",
  checkbox:
    "relative z-10 accent-violet-500 w-5 h-5 cursor-pointer transition-all bg-zinc-800 border-zinc-700 rounded focus:ring-2 focus:ring-violet-500 hover:scale-110",
  input: (isEditable, completed) =>
    `relative z-10 flex-1 bg-transparent border-none outline-none text-base px-2 py-1 rounded-lg transition-all duration-200
      ${
        isEditable ? "ring-2 ring-violet-500 bg-zinc-800 focus:bg-zinc-700" : ""
      }
      ${completed ? "line-through text-zinc-500" : "text-zinc-100"}
      placeholder-zinc-400
    `,
  editBtn:
    "relative z-10 w-8 h-8 flex items-center justify-center rounded-lg text-lg bg-zinc-800 hover:bg-violet-700 text-violet-400 hover:text-white transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed border border-zinc-700 hover:shadow-md hover:shadow-violet-500/20",
  deleteBtn:
    "relative z-10 w-8 h-8 flex items-center justify-center rounded-lg text-lg bg-zinc-800 hover:bg-red-800 text-red-400 hover:text-white transition-colors duration-200 border border-zinc-700 hover:shadow-md hover:shadow-red-500/20",
};

/**
 * TodoItem component displays a single todo with edit, complete, and delete actions.
 * Uses context for actions and local state for editing.
 */

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  // Save the edited todo
  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  // Toggle the completed state
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div className={styles.container(todo.completed)}>
      {/* Visual cue for completed task */}
      {todo.completed && <div className={styles.completedOverlay}></div>}

      <input
        type="checkbox"
        className={styles.checkbox}
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={styles.input(isTodoEditable, todo.completed)}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className={styles.editBtn}
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
        title={isTodoEditable ? "Save" : "Edit"}
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>
      <button
        className={styles.deleteBtn}
        onClick={() => deleteTodo(todo.id)}
        title="Delete"
      >
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;
