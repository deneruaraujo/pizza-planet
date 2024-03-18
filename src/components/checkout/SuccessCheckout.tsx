"use client"

import { PiCurrencyDollar, PiMapPin, PiTimer } from "react-icons/pi";

export function SuccessCheckout() {
  return (
    <main className="mx-3 mb-10 lg:w-4/5 lg:mx-auto">
      <section className="mb-10">
        <h1 className="text-2xl text-center mb-2 lg:text-4xl">Uhu! Pedido confirmado!</h1>
        <p className="text-xl text-center lg:text-2x1">Agora é só aguardar que logo sua pizza chegará até você</p>
      </section>
      <section className="flex flex-col mx-auto p-[1px] rounded-tr-[2.250rem] rounded-bl-[2.250rem] rounded-tl-md rounded-br-md bg-gradient-to-r from-yellow-500 to-red-700 lg:w-3/5">
        <div className="bg-white p-10 rounded-tr-[2.250rem] rounded-bl-[2.250rem] rounded-tl-md rounded-br-md text-sm lg:text-base">
          <div className="flex gap-3 items-center mb-8 h-full w-full">
            <span className="p-2 rounded-full text-white bg-red-700">
              <PiMapPin />
            </span>
            <span>Entrega em <strong> Getulio Vargas, 934</strong><br /> Benedito Sales - Porto Alegre, RS</span>
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
        </div>
      </section>
    </main>
  )
} 