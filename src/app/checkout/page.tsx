import { CheckoutForm } from "@/src/components/checkout/CheckoutForm";
import { ShowCheckoutItems } from "@/src/components/checkout/ShowCheckoutItems";



export default function page() {
  return (
    <div className="flex flex-col w-11/12 mx-auto xl:flex-row xl:gap-44 lg:mx-10 lg:mt-10">
      <CheckoutForm />
      <ShowCheckoutItems />
    </div>
  )
}