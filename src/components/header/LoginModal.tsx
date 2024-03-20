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
          <DialogTitle className="text-left">
            Preencha seus dados para fazer login
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              className="col-span-3 rounded-md focus:!ring-2 focus:!ring-red-800 focus:!ring-offset-2 my-auto"
              placeholder="Informe seu email"
            />
          </div>
          <div>
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
            className="font-bold text-white bg-red-700 hover:bg-red-700 hover:text-white !opacity-50 !cursor-not-allowed"
          >
            Entrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}