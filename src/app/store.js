import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "../features/todoList";

export const store = configureStore({
  reducer: {
    todoList: todoListSlice,
  },
});
