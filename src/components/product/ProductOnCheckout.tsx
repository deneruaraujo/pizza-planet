"use client"

import Image from "next/image";
import { ProductProps } from "./ProductCard";
import { CurrencyFormat } from "@/src/utils/currencyFormat";
import { PiMinus, PiPlus } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { addToCart, removeOneFromCart } from "@/src/redux/slices/cartSlice";

export function ProductOnCheckout({ id, name, quantity, src, price }: ProductProps) {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center relative">
          <Image src={src} alt="" width={100} height={0} className="relative rounded-t-md h-16 w-24 lg:h-24 lg:w-32" />
          <span className="absolute -top-2 -left-2 bg-red-700 px-2 py-1 rounded-full text-xs text-white cursor-default" aria-label="quantidade" title="quantidade">
            {quantity}
          </span>
          <span className="text-sm md:text-base">{name}</span>
        </div>
        <span aria-label="Valor total do Item" title="Valor total do Item">{CurrencyFormat(price * quantity)}</span>
      </div>
      <div className="flex mb-8 h-5 w-24 lg:w-32">
        <button
          className="text-white bg-red-700 flex items-center justify-center w-12 rounded-bl-md border-r-[0.0312rem] border-yellow-500 hover:bg-red-500 duration-150 lg:w-16"
          onClick={() => dispatch(removeOneFromCart(id))}
        >
          <PiMinus size={15} aria-label="remover 1" title="remover 1" />
        </button>
        <button
          className="text-white bg-red-700 flex items-center justify-center w-12 rounded-br-md border-l-[0.0312rem] border-yellow-500 hover:bg-red-500 duration-150 lg:w-16"
          onClick={() => dispatch(addToCart({ id, name, quantity, src, price }))}
        >
          <PiPlus size={15} aria-label="remover 1" title="remover 1" />
        </button>
      </div>
    </>
  )
}