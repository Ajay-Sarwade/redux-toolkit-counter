import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let obj = {};
      obj.id = state.items.length;
      obj.value = action.payload.value;
      console.log(action);
      state.items.push(obj);
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, deleteItem } = TodoSlice.actions;
export default TodoSlice.reducer;
