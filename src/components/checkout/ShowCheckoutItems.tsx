import { ItemOnCheckout } from "./ItemOnCheckout";


export function ShowCheckoutItems() {
  return (
    <div className="xl:w-full">
      <ItemOnCheckout />
      <ItemOnCheckout />
      <ItemOnCheckout />
      <ItemOnCheckout />
      <ItemOnCheckout />
      <div className="flex justify-between border-b border-black/50 pb-4">
        <span>Subtotal:</span>
        <span>
          R$ 9,90
        </span>
      </div>
      <div className="flex justify-between border-b border-black/50 pb-4 mt-4">
        <span>Entrega:</span>
        <span>R$ 9,90</span>
      </div>
      <div className="flex justify-between pb-4 mt-4">
        <span>Total:</span>
        <span>
          R$ 19,80
        </span>
      </div>
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <input type="text" name="" id="" className="border border-black px-6 py-4 h-fit rounded lg:w-[50%] 2xl:w-72" placeholder="Código" />
        <button className="bg-red-700 hover:bg-red-600 h-fit duration-200 text-white py-4 px-12 text-sm font-medium mb-16 rounded md:text-base lg:w-[50%] 2xl:w-60">Aplicar Cupom</button>
      </div>
      <button
        type="submit"
        form="checkoutForm"
        className="bg-red-700 hover:bg-red-600 h-fit duration-200 text-white py-4 px-12 text-sm font-medium mb-16 rounded md:text-base disabled:cursor-not-allowed disabled:opacity-50"
      >
        Finalizar a compra
      </button>
    </div>
  )
}