"use client"

import { addToCart } from "@/src/redux/slices/cartSlice";
import { AppDispatch } from "@/src/redux/store";
import { CurrencyFormat } from "@/src/utils/currencyFormat";
import Image from "next/image";
import { PiMinus, PiPlus } from "react-icons/pi";
import { useDispatch } from 'react-redux'


export interface ProductCardProps {
  name: string,
  src: string,
  price: number,
}

export function ProductCard({ name, src, price }: ProductCardProps) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="shadow-inner shadow-gray-500 bg-gradient-to-l from-gray-300 via-white to-gray-200 rounded-t-3xl rounded-b-lg flex flex-col items-center w-60">
      <Image
        src={src}
        width={250}
        height={0}
        quality={100}
        alt=""
        className="rounded-t-3xl h-40"
      />
      <div className="flex flex-col items-center justify-end h-full">
        <div className="py-4 font-bold flex flex-col items-center">
          <span className="text-center text-wrap whitespace-normal break-words">{name}</span>
          <span>{CurrencyFormat(price)}</span>
        </div>
        <div className="flex gap-4 py-2 px-6 rounded-t-md rounded-rb-sm rounded-lb-sm items-center justify-center shadow-inner shadow-gray-400 hover:text-black hover:shadow-gray-900 duration-200">
          <button className="hover:text-red-600 px-1">
            <PiMinus size={15} aria-label="remover 1" title="remover 1" />
          </button>
          <span aria-label="quantidade">0</span>
          <button
            className="hover:text-red-600 px-1"
            onClick={() => dispatch(addToCart({ name, src, price }))}
          >
            <PiPlus size={15} aria-label="adicionar 1" title="adicionar 1" />
          </button>
        </div>
      </div>
    </div>
  )
}