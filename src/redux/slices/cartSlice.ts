import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: string,
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
      const { id } = action.payload
      const existingItem = state.cart.find(item => item.id === id);
      if (!existingItem) {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
      if (existingItem) {
        if (existingItem.quantity < 99) {
          existingItem.quantity += 1;
        }
      }
    },
    removeOneFromCart: (state, action: PayloadAction<string>) => {
      const idToRemove = action.payload;
      const itemToRemoveOne = state.cart.find(item => item.id === idToRemove);
      if (itemToRemoveOne) {
        if (itemToRemoveOne.quantity > 1) {
          itemToRemoveOne.quantity -= 1;
        } else {
          state.cart = state.cart.filter((item) => item.id !== idToRemove);
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const idToRemove = action.payload
      const itemIndex = state.cart.findIndex(item => item.id === idToRemove);
      if (itemIndex !== -1) {
        state.cart.splice(itemIndex, 1)
      }
    }
  }
})

export const { addToCart, removeOneFromCart, removeFromCart } = cartSlice.actions;
export const cart = cartSlice.reducer
