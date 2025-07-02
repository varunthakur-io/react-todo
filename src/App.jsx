import { useEffect, useState } from "react";
import { TodoProvider } from "./context/TodoContext";
import { TodoForm, TodoItem } from "./components/";

// Styles for the main app layout
const styles = {
  appBg: "bg-zinc-950 min-h-screen py-8 transition-colors",
  container:
    "w-full max-w-2xl mx-auto shadow-xl rounded-lg px-4 py-3 text-zinc-100 bg-zinc-900 border border-zinc-800",
  title: "text-2xl font-bold text-center mb-8 mt-2 text-zinc-100",
  formWrapper: "mb-4",
  todosWrapper: "flex flex-wrap gap-y-3",
  todoItemWrapper: "w-full",
};

/**
 * App component manages the todo list state and provides context to children.
 * Handles CRUD operations and persists todos in localStorage.
 */
function App() {
  const [todos, setTodos] = useState([]);

  // Add a new todo to the list
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  // Update a todo by id
  const updateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      )
    );
  };

  // Delete a todo by id
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Toggle the completed state of a todo
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Load todos from localStorage on mount
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
      }}
    >
      <div className={styles.appBg}>
        <div className={styles.container}>
          <h1 className={styles.title}>Manage Your Todos</h1>
          <div className={styles.formWrapper}>
            <TodoForm />
          </div>
          <div className={styles.todosWrapper}>
            {todos.map((todo) => (
              <div key={todo.id} className={styles.todoItemWrapper}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
