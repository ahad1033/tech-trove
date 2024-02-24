import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./features/Products/ProductsSlice";
import CartReducer from "./features/Cart/CartSlice";

const store = configureStore({
  reducer: {
    Products: ProductReducer,
    Cart: CartReducer,
  },
});

export default store;
