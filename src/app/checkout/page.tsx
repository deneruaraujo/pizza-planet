import { CheckoutForm } from "@/src/components/checkout/CheckoutForm";
import { ShowCheckoutItems } from "@/src/components/checkout/ShowCheckoutItems";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finalizar Compra"
}

export default function page() {
  return (
    <div>
      <h2 className="text-2xl my-6 text-center xl:text-left xl:mx-10 xl:text-3xl">Preencha seus dados</h2>
      <div className="flex flex-col w-11/12 mx-auto xl:flex-row xl:gap-44 lg:mx-10 lg:mt-10">
        <CheckoutForm />
        <ShowCheckoutItems />
      </div>
    </div>
  )
}