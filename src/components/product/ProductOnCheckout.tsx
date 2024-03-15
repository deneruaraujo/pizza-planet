import Image from "next/image";
import { ProductProps } from "./ProductCard";
import { CurrencyFormat } from "@/src/utils/currencyFormat";

export function ProductOnCheckout({ name, quantity, src, price }: ProductProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3 md:gap-6 relative">
        <Image src={src} alt="" width={100} height={0} className="relative rounded-md h-16 w-20 lg:h-auto lg:w-auto" />
        <span className="absolute -top-2 -left-2 bg-red-700 px-2 py-1 rounded-full text-xs text-white cursor-default" aria-label="quantidade" title="quantidade">
          {quantity}
        </span>
        <span className="text-sm md:text-base">{name}</span>
      </div>
      <span aria-label="Valor total do Item" title="Valor total do Item">{CurrencyFormat(price * quantity)}</span>
    </div>
  )
}