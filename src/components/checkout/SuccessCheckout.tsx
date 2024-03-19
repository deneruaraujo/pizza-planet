"use client"

import { useEffect, useState } from "react";
import { PiCurrencyDollar, PiMapPin, PiTimer } from "react-icons/pi";
import { ProductProps } from "../product/ProductCard";
import { clearCart, CustomerInfo } from "@/src/redux/slices/cartSlice";
import { useRouter } from "next/navigation";
import { ProductOnSuccessCheckout } from "../product/ProductOnSuccessCheckout";
import { CurrencyFormat } from "@/src/utils/currencyFormat";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";


export function SuccessCheckout() {
  const [localStorageCartItems, setLocalStorageCartItems] = useState<ProductProps[]>([])
  const [localStorageCustomerInfo, setLocalStorageCustomerInfo] = useState<CustomerInfo>()
  const [itemsLoaded, setItemsLoaded] = useState(false);
  const entrega = 9.90
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(clearCart())

    const retrieveProducts = JSON.parse(localStorage.getItem('PizzaPlanet-PurchaseData') || "[]");
    const retrieveCustomerInfo = JSON.parse(localStorage.getItem('PizzaPlanet-CustomerInfo') || '{}');

    if (retrieveProducts.length === 0 || Object.keys(retrieveCustomerInfo).length === 0) {
      router.push('/')
    }

    if (retrieveProducts) {
      setLocalStorageCartItems(retrieveProducts)
    }
    if (retrieveCustomerInfo) {
      setLocalStorageCustomerInfo(retrieveCustomerInfo)
    }

    setItemsLoaded(true);
  }, [dispatch, router])

  return (
    <main className="mx-3 mb-10 lg:w-4/5 lg:mx-auto">
      {itemsLoaded ? (
        <div>
          <section className="mb-10">
            <h2 className="text-2xl text-center mb-2 lg:text-4xl"> Uhul, {localStorageCustomerInfo && localStorageCustomerInfo.nome ?
              localStorageCustomerInfo.nome
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
              : ''}, seu pedido está a caminho!</h2>
            <p className="text-xl text-center lg:text-2x1">Agora é só aguardar que logo ele chegará até você</p>
          </section>
          <section className="flex flex-col mx-auto p-[1px] rounded-tr-[2.250rem] rounded-bl-[2.250rem] rounded-tl-md rounded-br-md bg-gradient-to-r from-yellow-500 to-red-700 lg:w-3/5">
            <div className="bg-white p-10 rounded-tr-[2.250rem] rounded-bl-[2.250rem] rounded-tl-md rounded-br-md text-sm lg:text-base">
              <div className="flex gap-3 items-center mb-8 h-full w-full">
                <span className="p-2 rounded-full text-white bg-red-700">
                  <PiMapPin />
                </span>
                <span>Entrega em <strong> {localStorageCustomerInfo?.rua}, {localStorageCustomerInfo?.numero}</strong><br /> {localStorageCustomerInfo?.bairro} - {localStorageCustomerInfo?.cidade}, {localStorageCustomerInfo?.uf}</span>
              </div>
              <div className="flex gap-3 items-center mb-8 ">
                <span className="p-2 rounded-full text-white bg-pizza-dark-gold">
                  <PiTimer />
                </span>
                <span>Previsão de entrega <br /><strong> 20 min - 30 min</strong></span>
              </div>
              <div className="flex gap-3 items-center mb-8 ">
                <span className="p-2 rounded-full text-white bg-yellow-500">
                  <PiCurrencyDollar />
                </span>
                Pagamento será realizado na entrega
              </div>
              <div>
                <span className="text-lg block mb-4">Seu pedido:</span>
                {localStorageCartItems.map(item =>
                  <ProductOnSuccessCheckout key={item.id} {...item} />
                )}
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between gap-1 border-b border-zinc-300">
                  <span className="text font">Entrega:</span>
                  <span className="font-bold">{CurrencyFormat(entrega)}</span>
                </div>
                <div className="flex justify-between gap-1 border-b border-zinc-300">
                  <span className="text font">Pedido:</span>
                  <span className="font-bold">{CurrencyFormat(localStorageCartItems.reduce((total, item) => total + (item.price * item.quantity), 0))}</span>
                </div>
                <div className="flex justify-between gap-1 border-b border-zinc-300">
                  <span className="text font">Total a pagar:</span>
                  <span className="font-bold">{CurrencyFormat(localStorageCartItems.reduce((total, item) => total + (item.price * item.quantity), 0) + entrega)}</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <h2 className="text-center text-2xl">Carregando itens...</h2>
      )}
    </main >
  )
} 