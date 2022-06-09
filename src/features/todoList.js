import { createSlice, payloadAction } from "@reduxjs/toolkit";
const initalState = {
  todoList: [],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: initalState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todoList.splice(action.payload, 1);
    },
    // update datat
    updateTodo: (state, action) => {
      state.todoList[action.payload.index] = action.payload.data;
    },
  },
});
export const { addTodo, removeTodo, updateTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
