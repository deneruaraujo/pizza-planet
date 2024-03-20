'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import { PiShoppingCart } from "react-icons/pi"

import Link from "next/link"
import { useSelector } from "react-redux"
import { RootState } from "@/src/redux/store"
import { CurrencyFormat } from "@/src/utils/currencyFormat"
import { ProductOnCart } from "../product/ProductOnCart"
import { useEffect, useState } from "react"
import { ProductProps } from "../product/ProductCard"

export function CartModal() {
  const cartItems = useSelector((state: RootState) => state.cart.cart)
  const [localStorageCartItems, setLocalStorageCartItems] = useState<ProductProps[]>([])
  const [isRemovingItem, setIsRemovingItem] = useState(false);

  useEffect(() => {
    const retrieveProducts = JSON.parse(localStorage.getItem('PizzaPlanet-CartItems') || "[]");

    if (retrieveProducts) {
      setLocalStorageCartItems(retrieveProducts)
    }
  }, [cartItems])


  return (
    <div>
      <Dialog>
        <DialogTrigger asChild >
          <div className="relative">
            <Button
              variant="custom"
              aria-label="carrinho"
              title="carrinho"
            >
              <PiShoppingCart size={22} />
              <span
                className='absolute -top-[0.40rem] -right-2 bg-yellow-600 font-semibold text-white rounded-full text-xs p-1 px-2'
                aria-label="items no carrinho"
                title="items no carrinho"
                suppressHydrationWarning
              >
                {localStorageCartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className={`sm:max-w-[425px] transition-height`}>
          <DialogHeader>
            {cartItems.length > 0
              ?
              <DialogTitle className="font-bold flex">
                Seu carrinho
              </DialogTitle>
              :
              <DialogTitle className="font-bold flex">
                Carrinho vazio, favor adicionar item.
              </DialogTitle>
            }
          </DialogHeader>
          <div className="flex flex-col gap-6 overflow-y-auto max-h-[300px] md:max-h-[400px]">
            {cartItems.map(item => (
              <ProductOnCart key={item.id} {...item} />
            ))}
          </div>
          <DialogFooter className="flex flex-row text-sm items-center w-full justify-between border-t-2 pt-4 md:text-sm">
            <div className="flex items-start w-full gap-2">
              <span>Total do Pedido:</span>
              <span>
                {CurrencyFormat(cartItems.reduce((total, item) => total + (item.price * item.quantity), 0))}
              </span>
            </div>
            <DialogClose asChild>
              {cartItems.length > 0
                ?
                <Link href="/checkout">
                  <Button
                    type="submit"
                    variant="custom"
                  >
                    Continuar
                  </Button>
                </Link>
                :
                <Button
                  type="submit"
                  variant="custom"
                  disabled={cartItems.length === 0}
                >
                  Continuar
                </Button>
              }
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}