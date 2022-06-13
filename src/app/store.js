import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "../features/todoList";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { RickAndMorty } from "./RickandMorty";
import { Characters } from "./Characters";
export const store = configureStore({
  reducer: {
    todoList: todoListSlice,
    [RickAndMorty.reducerPath]: RickAndMorty.reducer,
    [Characters.reducerPath]: Characters.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), RickAndMorty.middleware, Characters.middleware];
  },
});
setupListeners(store.dispatch);
