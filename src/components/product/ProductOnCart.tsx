import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { ProductProps } from "./ProductCard";
import { CurrencyFormat } from "@/src/utils/currencyFormat";


export function ProductOnCart({ name, quantity, src, price }: ProductProps) {
  return (
    <div className="relative flex gap-4 rounded-l-3xl rounded-r shadow-inner shadow-gray-600 hover:text-black ">
      <button className="absolute right-[0.4rem] top-[0.4rem] " aria-label="remover item do carrinho" title="remover item do carrinho">
        <IoClose size={21} className="text-white bg-red-700 hover:bg-red-500 duration-150 rounded-full" />
      </button>
      <Image
        src={src}
        width={100}
        height={0}
        quality={100}
        alt=""
        className="rounded-l-3xl"
      />
      <div className="flex flex-col text-xs my-auto font-semibold md:text-sm md:my-1">
        <span>{name}</span>
        <span>Quantidade: {quantity}</span>
        <span>Total do Item: {CurrencyFormat(price * quantity)}</span>
      </div>
    </div>
  )
}