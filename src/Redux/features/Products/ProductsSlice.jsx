import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../api/axios";

export const getAsyncAllProduct = createAsyncThunk(
  "products/allProduct",
  async () => {
    try {
      const res = await axiosInstance.get("/products");
      return res.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
);

const initialState = {
    products: [],
    status: "idle",
    error: null
}

const productsSlice = createSlice({
    name: "allProduct",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAsyncAllProduct.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getAsyncAllProduct.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.products = action.payload;
        })
        .addCase(getAsyncAllProduct.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload.error;
        })
    }
})

export default productsSlice.reducer;