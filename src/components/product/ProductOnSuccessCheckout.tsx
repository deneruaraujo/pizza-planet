import Image from "next/image";
import { ProductProps } from "./ProductCard";
import { CurrencyFormat } from "@/src/utils/currencyFormat";

export function ProductOnSuccessCheckout({ name, quantity, src, price }: ProductProps) {
  return (
    <div className="relative flex gap-4 mb-4 rounded-l-3xl rounded-r shadow-inner shadow-gray-600 hover:text-black ">
      <Image
        src={src}
        width={100}
        height={0}
        quality={100}
        alt=""
        className="rounded-l-3xl h-20"
      />
      <div className="flex flex-col text-xs my-auto font-semibold md:text-sm">
        <span>{name}</span>
        <span>Quantidade: {quantity}</span>
        <span>Total do Item: {CurrencyFormat(price * quantity)}</span>
      </div>
    </div>
  )
}