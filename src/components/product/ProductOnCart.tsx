import Image from "next/image";
import pizzaPortuguesa from "@/public/product/pizza-a-portuguesa.jpg"

export function ProductOnCart() {
  return (
    <div className="flex gap-4 rounded-l-3xl rounded-r shadow-inner shadow-gray-600 hover:text-black ">
      <Image
        src={pizzaPortuguesa}
        width={100}
        height={0}
        quality={100}
        alt="logo"
        className="rounded-l-3xl"
      />
      <p className="text-xs my-auto font-semibold md:text-sm md:my-1">
        Pizza Portuguesa
        <br />
        Quantidade: 2
        <br />
        Valor Total: R$ 19,80
      </p>
    </div >
  )
}