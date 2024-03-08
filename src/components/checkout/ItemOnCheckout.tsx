import Image from "next/image";
import pizzaPortuguesa from "@/public/product/pizza-a-portuguesa.jpg"

export function ItemOnCheckout() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3 md:gap-6 relative">
        <Image src={pizzaPortuguesa} alt="" width={100} height={0} className="relative rounded-md" />
        <span className="absolute -top-2 -left-2 bg-red-700 px-2 py-1 rounded-full text-xs text-white cursor-default" aria-label="quantidade">
          2
        </span>
        <span className="text-sm md:text-base">Pizza Portuguesa</span>
      </div>
      <span> R$ 9,90</span>
    </div>
  )
}