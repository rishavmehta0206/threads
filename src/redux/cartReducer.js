import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
    increaseQuantity: (state, action) => {
      state.products = state.products?.map((product) => {
        if (product.id === action.payload) {
          product.quantity += 1;
          return product;
        } else {
          return product;
        }
      });
    },
    decreaseQuantity: (state, action) => {
      state.products = state.products?.map((product) => {
        if (product.id === action.payload) {
          product.quantity -= 1;
          return product;
        } else {
          return product;
        }
      });
    },
  },
});

export const {
  addToCart,
  removeItem,
  resetCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
