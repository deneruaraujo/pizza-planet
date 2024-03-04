import Image from "next/image";
import pizzaPortuguesa from "@/public/product/pizza-a-portuguesa.jpg"
import { PiMinus, PiPlus, PiShoppingCart } from "react-icons/pi";

export function ProductCard() {
  return (
    <div className="shadow-inner shadow-gray-500 bg-gradient-to-l from-gray-300 via-white to-gray-200 rounded-t-3xl rounded-b-lg flex flex-col items-center">
      <div>
        <Image
          src={pizzaPortuguesa}
          width={250}
          height={0}
          quality={100}
          alt="logo"
          className="rounded-t-3xl"
        />
      </div>
      <div>
        <div className="py-4 font-bold flex flex-col items-center">
          <p>Pizza Portuguesa</p>
          <p>R$ 9,90</p>
        </div>
        <div className="flex gap-4 mr-2 py-2 px-2 rounded-t-md rounded-rb-sm rounded-lb-sm items-center justify-center shadow-inner shadow-gray-400 hover:text-black hover:shadow-gray-900 duration-200">
          <button className="hover:text-red-600 px-1">
            <PiMinus size={15} />
          </button>
          <span>0</span>
          <button className="hover:text-red-600 px-1">
            <PiPlus size={15} />
          </button>
          <button className="hover:text-red-600 px-1">
            <PiShoppingCart size={22} />
          </button>
        </div>
      </div>
    </div>
  )
}