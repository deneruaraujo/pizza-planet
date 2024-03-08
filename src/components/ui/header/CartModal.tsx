'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import { PiShoppingCart } from "react-icons/pi"
import { ProductOnCart } from "../../product/ProductOnCart"
import Link from "next/link"
export function CartModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild >
          <div className="relative">
            <Button
              variant="outline"
              className="font-bold bg-gray-800 hover:bg-red-900 text-white hover:text-white"
              aria-label="carrinho"
            >
              <PiShoppingCart size={22} />
            </Button>
            <Link href="" className='absolute -top-[0.40rem] -right-2 bg-yellow-600 font-semibold text-white rounded-full text-xs p-1 px-2'>6</Link>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-bold flex">
              Seu carrinho
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-6 overflow-y-auto max-h-[300px] md:max-h-[400px]">
            <ProductOnCart />
            <ProductOnCart />
            <ProductOnCart />
            <ProductOnCart />
            <ProductOnCart />
            <ProductOnCart />
          </div>
          <DialogFooter className="flex flex-row text-sm items-center w-full justify-between border-t-2 pt-4 md:text-sm">
            <div className="flex items-start w-full gap-2">
              <span>Total:</span>
              <span>R$9,90</span>
            </div>
            <Link href="#">
              <Button
                type="submit"
                variant="outline"
                className="font-bold bg-gray-800 hover:bg-red-900 text-white hover:text-white"
              >
                Continuar
              </Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}