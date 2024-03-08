import Image from "next/image";
import pizzaPortuguesa from "@/public/product/pizza-a-portuguesa.jpg"
import { IoClose } from "react-icons/io5";

export function ProductOnCart() {
  return (
    <div className="relative flex gap-4 rounded-l-3xl rounded-r shadow-inner shadow-gray-600 hover:text-black ">
      <button className="absolute right-[0.4rem] top-[0.4rem] " aria-label="remover item do carrinho" title="remover item do carrinho">
        <IoClose size={21} className="text-white bg-red-700 hover:bg-red-500 duration-150 rounded-full" />
      </button>
      <Image
        src={pizzaPortuguesa}
        width={100}
        height={0}
        quality={100}
        alt="logo"
        className="rounded-l-3xl"
      />
      <div className="flex flex-col text-xs my-auto font-semibold md:text-sm md:my-1">
        <span>Pizza Portuguesa</span>
        <span>Quantidade: 2</span>
        <span>Valor Total: R$ 19,80</span>
      </div>
    </div>
  )
}