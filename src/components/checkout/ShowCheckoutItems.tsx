"use client"

import { Button } from "@/components/ui/button";
import { ProductOnCheckout } from "../product/ProductOnCheckout";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { CurrencyFormat } from "@/src/utils/currencyFormat";

export function ShowCheckoutItems() {
  const cartItems = useSelector((state: RootState) => state.cart.cart)
  const entrega = 9.90

  return (
    <div className="xl:w-full">
      {cartItems.map(item => (
        <ProductOnCheckout key={item.id} {...item} />
      ))}
      <div className="flex justify-between border-b border-black/50 pb-4">
        <span>Subtotal:</span>
        <span>
          {CurrencyFormat(cartItems.reduce((total, item) => total + (item.price * item.quantity), 0))}
        </span>
      </div>
      <div className="flex justify-between border-b border-black/50 pb-4 mt-4">
        <span>Entrega:</span>
        <span>{CurrencyFormat(entrega)}</span>
      </div>
      <div className="flex justify-between pb-4 mt-4">
        <span>Total:</span>
        <span>
          {CurrencyFormat(cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) + entrega)}
        </span>
      </div>
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <input type="text" name="" id="" className="border border-black focus:outline-2 focus:outline-red-800 px-6 py-4 h-fit rounded lg:w-[50%] 2xl:w-72" placeholder="Código" />
        <Button
          variant="custom"
          className="h-fit py-4 px-12 text-sm font-medium mb-16 rounded md:text-base lg:w-[50%] 2xl:w-60"
        >
          Aplicar Cupom
        </Button>
      </div>
      <Button
        type="submit"
        form="checkoutForm"
        variant="custom"
        disabled={cartItems.length === 0}
        className="h-fit py-4 px-12 text-sm font-medium mb-16 rounded md:text-base"
      >
        Finalizar compra
      </Button>
    </div>
  )
}