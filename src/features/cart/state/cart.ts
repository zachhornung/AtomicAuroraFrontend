import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProductCart = {
  id: number;
  quantity: number;
};

type CartState = {
  products: ProductCart[];
};

const internalInitialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: internalInitialState,
  reducers: {
    clearCart: () => internalInitialState,
    addItemToCart: (state, action: PayloadAction<ProductCart>) => {
      const { id, quantity } = action.payload;
      const inCart = state.products.find((product) => product.id === id);
      if (inCart) {
        inCart.quantity += quantity;
      } else {
        state.products.push({ id, quantity });
      }
    },
    removeItemFromCart: (state, action: PayloadAction<ProductCart>) => {
      const { id, quantity } = action.payload;
      const inCart = state.products.find((product) => product.id === id)
      if (inCart) {
        if (inCart.quantity - quantity < 0) {
          state.products = state.products.filter((product) => product.id !== id)
        } else {
          inCart.quantity -= quantity
        }
      }
    },
  },
});

export const {
  clearCart,
  addItemToCart,
  removeItemFromCart
} = cartSlice.actions;

export default cartSlice.reducer;
