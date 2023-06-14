import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};
export const productSlide = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProduct: (state, action) => {
      state.product = action.payload;
    },
    resetProduct: (state) => {
      state.product = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateProduct, resetProduct } = productSlide.actions;

export default productSlide.reducer;
