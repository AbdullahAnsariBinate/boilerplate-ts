import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialStateType } from "./type";

// Define initial state for todos slice
const initialTodosState: Array<InitialStateType> | any = [];

// Define thunk for fetching todos
// export const fetchTodos = (responseCallback:any) => {
//   createAsyncThunk("fetchTodos", async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//     responseCallback(res.json());
//   });
// };

// Create slice for todos
const todosSlice = createSlice({
  name: "todos",
  initialState: initialTodosState,
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

// Define slice for managing fetching state
// const getTodo = createSlice({
//   name: "getTodo",
//   initialState: {
//     isLoading: false,
//     data: [],
//     isError: false,
//   },
//   // extraReducers: (builder) => {
//   //   builder.addCase(fetchTodos.pending, (state, action) => {
//   //     state.isLoading = true;
//   //   });
//   //   builder.addCase(fetchTodos.fulfilled, (state, action) => {
//   //     state.isLoading = false;
//   //     state.data = action.payload;
//   //   });
//   //   builder.addCase(fetchTodos.rejected, (state, action) => {
//   //     state.isLoading = false;
//   //     state.isError = true;
//   //   });
//   // },
// });

// Export actions from todos slice
export const { todoAdded, todoToggled } = todosSlice.actions;

// Export reducers from both slices
export const todosReducer = todosSlice.reducer;
// export const getTodoReducer = getTodo.reducer;
