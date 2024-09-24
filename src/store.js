import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import todoReducer from "./slice/TodoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Todo: todoReducer,
  },
});
