import { createSlice, payloadAction } from "@reduxjs/toolkit";
const initalState = {
  todoList: [],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: initalState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload, "action.payload");
      state.todoList.push(action.payload);
    },
  },
});
export const { addTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
