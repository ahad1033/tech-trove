import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./features/Products/ProductsSlice";

const store = configureStore({
  reducer: {
    Products: ProductReducer,
  },
});

export default store;
