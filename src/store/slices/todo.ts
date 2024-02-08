import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialStateType } from "./type";

const initialState: Array<InitialStateType> | any = [];
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  return res?.json();
});
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    },
    todoToggled(state, action) {
      const todo = state.find((todo: any) => todo.id === action.payload);
      todo.completed = !todo?.completed;
    },
  },
});

const getTodo = createSlice({
  name: "getTodo",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      initialState
    }),
    builder.addCase(fetchTodos.fulfilled, (state, action) => {}),
    builder.addCase(fetchTodos.rejected, (state, action) => {}),
  },
});
export const { todoAdded, todoToggled } = todosSlice.actions;
export default todosSlice.reducer;
