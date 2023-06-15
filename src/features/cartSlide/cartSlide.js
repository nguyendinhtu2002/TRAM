import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalPrice: 0,
    status: false,
};
const calculateTotalPrice = (cart) => {
    return cart.reduce((total, item) => {
        return total + (item.priceReal * item.quantityOrder);
    }, 0);
};
export const cartSlide = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.cart.push(action.payload);
            state.totalPrice = calculateTotalPrice(state.cart);
        },
        incrementItemCount: (state, action) => {
            const itemId = action.payload;
            const item = state.cart.find(item => item._id === itemId);

            if (item) {
                item.quantityOrder += 1;
                state.totalPrice = calculateTotalPrice(state.cart);
            }

            if (state.status) {
                state.totalPrice += item.priceReal;
            }
        },

        decrementItemCount: (state, action) => {
            const itemId = action.payload;
            const item = state.cart.find(item => item._id === itemId);

            if (item && item.quantityOrder > 1) {
                item.quantityOrder -= 1;
                state.totalPrice = calculateTotalPrice(state.cart);
            }

            if (state.status) {
                state.totalPrice -= item.priceReal;
            }
        },
        deleteItemFromCart: (state, action) => {
            const itemId = action.payload;
            state.cart = state.cart.filter(item => item._id !== itemId);
            state.totalPrice = calculateTotalPrice(state.cart);
        },

        updatePrice: (state, action) => {
            const priceNew = action.payload;
            // const convertedPrice = parseFloat(priceNew.replace(/\./g, ''));
            state.totalPrice = priceNew;
            state.status = true;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addCart, resetCart, updatePrice, incrementItemCount, decrementItemCount, deleteItemFromCart } = cartSlide.actions;

export default cartSlide.reducer;
