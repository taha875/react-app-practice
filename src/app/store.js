import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "../features/todoList";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { RickAndMorty } from "./RickandMorty";
export const store = configureStore({
  reducer: {
    todoList: todoListSlice,
    [RickAndMorty.reducerPath]: RickAndMorty.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), RickAndMorty.middleware];
  },
});
setupListeners(store.dispatch);
