"use client";

import * as Checkbox from "@radix-ui/react-checkbox";
import { BsCheckLg } from "react-icons/bs";

export function CheckoutCheckbox() {
  return (
    <div className="flex items-start mb-24 xl:mb-36">
      <Checkbox.Root
        className="flex h-6 w-9 md:w-6 appearance-none items-center justify-center rounded-[4px] bg-[#F0F0F0]"
        defaultChecked
        id="saveInfo"
      >
        <Checkbox.Indicator className="flex items-center rounded justify-center w-full h-full bg-red-800">
          <BsCheckLg className="text-white" size={20} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label
        className="pl-4"
        htmlFor="saveInfo"
      >
        Salvar essa informação para um checkout mais rápido na próxima vez.
      </label>
    </div>
  )
}