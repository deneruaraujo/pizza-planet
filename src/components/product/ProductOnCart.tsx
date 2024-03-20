"use client"

import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { ProductProps } from "./ProductCard";
import { CurrencyFormat } from "@/src/utils/currencyFormat";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { removeFromCart } from "@/src/redux/slices/cartSlice";
import { useState } from "react";


export function ProductOnCart({ id, name, quantity, src, price }: ProductProps) {
  const dispatch = useDispatch<AppDispatch>()
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = () => {
    setIsRemoving(true)

    setTimeout(() => {
      dispatch(removeFromCart(id));
    }, 300);
  }

  return (
    <div className={`relative flex gap-4 rounded-l-3xl rounded-r shadow-inner shadow-gray-600 hover:text-black ${isRemoving ? 'slide-down' : ''}`}>
      <button
        className="absolute right-[0.4rem] top-[0.4rem] "
        aria-label="remover item do carrinho"
        title="remover item do carrinho"
        onClick={handleRemove}
      >
        <IoClose size={21} className="text-white bg-red-700 hover:bg-red-500 duration-150 rounded-full" />
      </button>
      <div>
        <Image
          src={src}
          width={100}
          height={0}
          quality={100}
          alt=""
          className="rounded-l-3xl h-20"
        />
      </div>
      <div className="flex flex-col text-xs my-auto font-semibold md:text-sm md:my-1">
        <span>{name}</span>
        <span>Quantidade: {quantity}</span>
        <span>Total do Item: {CurrencyFormat(price * quantity)}</span>
      </div>
    </div>
  )
}