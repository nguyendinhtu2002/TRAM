import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
  status: false,
};
const calculateTotalPrice = (cart) => {
  return cart.reduce((total, item) => {
    return total + item.priceReal * item.quantityOrder;
  }, 0);
};
export const cartSlide = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const existingProductIndex = state.cart.findIndex(
        (product) => product._id === action.payload._id
      );

      if (existingProductIndex >= 0) {
        // Sản phẩm đã tồn tại trong giỏ hàng
        state.cart[existingProductIndex].quantityOrder += action.payload.quantityOrder;
      } else {
        // Sản phẩm chưa tồn tại trong giỏ hàng
        state.cart.push(action.payload);
      }

      state.totalPrice = calculateTotalPrice(state.cart);
      state.status = false;
    },
    incrementItemCount: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((item) => item._id === itemId);

      item.quantityOrder += 1;
      state.totalPrice = calculateTotalPrice(state.cart);
      state.status = false;
    },

    decrementItemCount: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((item) => item._id === itemId);

      if (item.quantityOrder > 1) {
        item.quantityOrder -= 1;
        state.totalPrice = calculateTotalPrice(state.cart);
        state.status = false;
      }
    },
    deleteItemFromCart: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((item) => item._id !== itemId);
      state.totalPrice = calculateTotalPrice(state.cart);
    },

    updatePrice: (state, action) => {
      const priceNew = action.payload;
      // const convertedPrice = parseFloat(priceNew.replace(/\./g, ''));
      state.totalPrice = priceNew;
      state.status = true;
    },
    resetCart: (state) => {
      state.totalPrice = 0;
      state.status = false;
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addCart,
  resetCart,
  updatePrice,
  incrementItemCount,
  decrementItemCount,
  deleteItemFromCart,
} = cartSlide.actions;

export default cartSlide.reducer;
