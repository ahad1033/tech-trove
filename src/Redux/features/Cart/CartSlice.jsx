import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cart: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateItemCount: (state, action) => {
      const { id, count } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.count = count;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateItemCount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
