import { ProductProps } from './../../components/product/ProductCard';
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
  rua: string,
  numero: string,
  bairro: string,
  cidade: string,
  uf: string;
}

let cartItemsString;
let customerInfoString

if (typeof window !== 'undefined') {
  cartItemsString = localStorage.getItem('PizzaPlanet-CartItems');
  customerInfoString = localStorage.getItem('PizzaPlanet-CustomerInfo');
}

const cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];
const customerInfo = customerInfoString ? JSON.parse(customerInfoString) : null;

const initialState: CartState = {
  cart: cartItems,
  customerInfo: customerInfo,
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
      localStorage.setItem('PizzaPlanet-CustomerInfo', JSON.stringify(state.customerInfo))
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem('PizzaPlanet-CartItems');
    }
  }
})

export const { addToCart, removeOneFromCart, removeFromCart, updateCustomerInfo, clearCart } = cartSlice.actions;
export const cart = cartSlice.reducer
