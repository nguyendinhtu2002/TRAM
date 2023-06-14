import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};
export const wishlistSlide = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    createWishList: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.wishlist.find(
        (item) => item._id === newItem._id
      );

      if (!existingItem) {
        state.wishlist.push(newItem);
      }
    },
    deleteWishList: (state, action) => {
      const itemId = action.payload;
      console.log(itemId);
      state.wishlist = state.wishlist.filter((item) => item._id !== itemId);
    },
  },
});

// Action creators are generated for each case reducer function
export const { createWishList, deleteWishList } = wishlistSlide.actions;

export default wishlistSlide.reducer;
