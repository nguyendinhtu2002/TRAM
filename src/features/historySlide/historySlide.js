import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};
export const historySlide = createSlice({
  name: "history",
  initialState,
  reducers: {
    createHistory: (state, action) => {
        if (state.product.length === 0) {
            // Mảng product đang rỗng
            state.product.push(action.payload);
        } else {
            // Mảng product không rỗng, kiểm tra phần tử đã tồn tại hay chưa
            const isProductExists = state.product.some(item => item._id === action.payload._id);
            
            if (isProductExists) {
              // Phần tử đã tồn tại trong mảng
              // Your code here (if needed)
            } else {
              // Phần tử chưa tồn tại trong mảng
              state.product.push(action.payload);
            }
          }
    },
    resetHistory: (state) => {
      state.product = [];
    },
  },
});

export const { createHistory, resetHistory } = historySlide.actions;

export default historySlide.reducer;
