import React, { createContext, useContext } from 'react';

// Create the Todo context
export const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
});

// Custom hook to consume the Todo context
export const useTodo = () => {
  return useContext(TodoContext);
};

// Export the Todo provider
export const TodoProvider = TodoContext.Provider;
