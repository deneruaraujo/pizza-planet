import { Input } from "@/components/ui/input";
import { CheckoutCheckbox } from "./CheckoutCheckbox";

export function CheckoutForm() {
  return (
    <form className="xl:w-full" id="checkoutForm">
      <div className="flex flex-col">
        <label htmlFor="nome" className="mb-2 opacity-70">
          Nome e Sobrenome<span>*</span>
        </label>
        <Input
          type="text"
          name="nome"
          id="nome"
          className=""
          required
        />
      </div>
      <div>
        <label htmlFor="cpf" className="mb-2 opacity-70">CPF<span>*</span></label>
        <Input
          type="number"
          name="cpf"
          id="cpf"
          required
        />
      </div>
      <div>
        <label htmlFor="cep" className="mb-2 opacity-70">CEP<span>*</span></label>
        <Input
          type="number"
          name="cep"
          id="cep"
          required
        />
      </div>
      <div>
        <label htmlFor="rua" className="mb-2 opacity-70">Rua<span>*</span></label>
        <Input
          type="text"
          name="rua"
          id="rua"
          required
        />
      </div>
      <div>
        <label htmlFor="complemento" className="mb-2 opacity-70">Complemento</label>
        <Input
          type="text"
          name="complemento"
          id="complemento"
        />
      </div>
      <div>
        <label htmlFor="bairro" className="mb-2 opacity-70">Bairro<span>*</span></label>
        <Input
          type="text"
          name="bairro"
          id="bairro"
          required
        />
      </div>
      <div>
        <label htmlFor="cidade" className="mb-2 opacity-70">Cidade<span>*</span></label>
        <Input
          type="text"
          name="cidade"
          id="cidade"
          required
        />
      </div>
      <div>
        <label htmlFor="uf" className="mb-2 opacity-70">UF<span>*</span></label>
        <Input
          type="number"
          name="uf"
          id="uf"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="celular" className="mb-2 opacity-70">Celular<span>*</span></label>
        <Input
          type="tel"
          name="celular"
          id="celular"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-2 opacity-70">Email<span>*</span></label>
        <Input
          type="email"
          name="email"
          id="email"
          required
        />
      </div>
      <CheckoutCheckbox />
    </form>
  )
}