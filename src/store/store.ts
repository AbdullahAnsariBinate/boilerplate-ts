import { configureStore } from "@reduxjs/toolkit";
import { getTodoReducer, todosReducer } from "./slices/todo";
export const store = configureStore({
  reducer: {
    todos: todosReducer,
    // fetchTodo: getTodoReducer,
  },
});
