import { Button } from "@/components/ui/button";
import { ProductOnCheckout } from "../product/ProductOnCheckout";



export function ShowCheckoutItems() {
  return (
    <div className="xl:w-full">
      <ProductOnCheckout />
      <ProductOnCheckout />
      <ProductOnCheckout />
      <ProductOnCheckout />
      <ProductOnCheckout />
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
        <input type="text" name="" id="" className="border border-black focus:outline-2 focus:outline-red-800 px-6 py-4 h-fit rounded lg:w-[50%] 2xl:w-72" placeholder="Código" />
        <Button
          variant="custom"
          className="h-fit py-4 px-12 text-sm font-medium mb-16 rounded md:text-base lg:w-[50%] 2xl:w-60"
        >
          Aplicar Cupom
        </Button>
      </div>
      <Button
        type="submit"
        form="checkoutForm"
        variant="custom"
        className="h-fit py-4 px-12 text-sm font-medium mb-16 rounded md:text-base disabled:cursor-not-allowed disabled:opacity-50"
      >
        Finalizar compra
      </Button>
    </div>
  )
}