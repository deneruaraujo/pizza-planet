import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
  name: string,
  quantity: number,
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
      const { name } = action.payload
      const existingItem = state.cart.find(item => item.name === name);
      if (!existingItem) {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
      if (existingItem) {
        if (existingItem.quantity < 99) {
          existingItem.quantity += 1;
        }
      }
    }
  }
})

export const cart = cartSlice.reducer
export const { addToCart } = cartSlice.actions;
