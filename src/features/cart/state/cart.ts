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
  },
});

export const {
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
