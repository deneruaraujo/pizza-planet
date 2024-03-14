import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
  name: string,
  src: string,
  price: number,
}

export interface CartState {
  cart: Product[]
}

const initialState: CartState = {
  cart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload)
    }
  }
})

export const cart = cartSlice.reducer
export const { addToCart } = cartSlice.actions;
