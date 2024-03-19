"use client"

import { addToCart, removeFromCart, removeOneFromCart } from "@/src/redux/slices/cartSlice";
import { AppDispatch, RootState } from "@/src/redux/store";
import { CurrencyFormat } from "@/src/utils/currencyFormat";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PiMinus, PiPlus } from "react-icons/pi";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'

export interface ProductProps {
  id: string,
  name: string,
  quantity: number,
  src: string,
  price: number,
}

export function ProductCard({ id, name, quantity, src, price }: ProductProps) {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.cart)
  const [localStorageCartItems, setLocalStorageCartItems] = useState<ProductProps[]>([])

  useEffect(() => {
    const retrieveProducts = JSON.parse(localStorage.getItem('PizzaPlanet-CartItems') || "[]");

    if (retrieveProducts) {
      setLocalStorageCartItems(retrieveProducts)
    }
  }, [cartItems])

  return (
    <div className="shadow-inner shadow-gray-500 bg-gradient-to-l from-gray-300 via-white to-gray-200 rounded-t-3xl rounded-b-lg flex flex-col items-center">
      <div>
        <Image
          src={src}
          width={250}
          height={0}
          quality={100}
          alt=""
          className="rounded-t-3xl h-44"
        />
      </div>
      <div className="flex flex-col items-center justify-end h-full">
        <div className="py-4 font-bold flex flex-col items-center">
          <span className="text-center text-wrap whitespace-normal break-words">{name}</span>
          <span>{CurrencyFormat(price)}</span>
        </div>
        <div className="flex gap-4 py-2 px-6 w-36 rounded-t-md rounded-rb-sm rounded-lb-sm items-center justify-center shadow-inner shadow-gray-400 hover:text-black hover:shadow-gray-900 duration-200">
          <button
            className="hover:text-red-600 mr-14 absolute left"
            onClick={() => dispatch(removeOneFromCart(id))}
          >
            <PiMinus size={15} aria-label="remover 1" title="remover 1" />
          </button>
          <span aria-label="quantidade" className="">
            {localStorageCartItems.find(item => item.id === id)?.quantity || 0}
          </span>
          <button
            className="hover:text-red-600 ml-14 absolute right"
            onClick={() => dispatch(addToCart({ id, name, quantity, src, price }))}
          >
            <PiPlus size={15} aria-label="adicionar 1" title="adicionar 1" />
          </button>
        </div>
      </div>
    </div>
  )
}