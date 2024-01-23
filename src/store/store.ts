import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./slices/todo";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});
