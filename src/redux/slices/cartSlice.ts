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
  customerInfo: CustomerInfo | null;
}

export interface CustomerInfo {
  nome: string,
  cpf: string,
  cep: string,
  rua: string,
  numero: string,
  complemento: string,
  bairro: string,
  cidade: string,
  uf: string;
  celular: string;
  email: string;
}

let cartItemsString;

if (typeof window !== 'undefined') {
  cartItemsString = localStorage.getItem('PizzaPlanet-CartItems');
}

const items = cartItemsString ? JSON.parse(cartItemsString) : [];

const initialState: CartState = {
  cart: items,
  customerInfo: null,
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

      localStorage.setItem('PizzaPlanet-CartItems', JSON.stringify(state.cart.map(item => item)))
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

      localStorage.setItem('PizzaPlanet-CartItems', JSON.stringify(state.cart.map(item => item)))
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const idToRemove = action.payload
      const itemIndex = state.cart.findIndex(item => item.id === idToRemove);
      if (itemIndex !== -1) {
        state.cart.splice(itemIndex, 1)
      }

      localStorage.setItem('PizzaPlanet-CartItems', JSON.stringify(state.cart.map(item => item)))
    },
    updateCustomerInfo: (state, action: PayloadAction<CustomerInfo>) => {
      state.customerInfo = action.payload
    }
  }
})

export const { addToCart, removeOneFromCart, removeFromCart, updateCustomerInfo } = cartSlice.actions;
export const cart = cartSlice.reducer
