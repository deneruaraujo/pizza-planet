'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
export function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="custom">
          Fazer login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Preencha seus dados para fazer login
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              className="col-span-3 rounded-md focus:!ring-2 focus:!ring-red-800 focus:!ring-offset-2"
              placeholder="Informe seu email"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="senha" className="text-right">
              Senha
            </Label>
            <Input
              type="password"
              id="senha"
              className="col-span-3 focus:!ring-2 focus:!ring-red-800 focus:!ring-offset-2"
              placeholder="Agora, digite sua senha" minLength={4}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            variant="outline"
            className="font-bold text-white bg-red-700 hover:bg-red-500 hover:text-white"
          >
            Entrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}