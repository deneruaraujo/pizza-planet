import { CheckoutCheckbox } from "./CheckoutCheckbox";

export function CheckoutForm() {
  return (
    <form className="xl:w-full" id="checkoutForm">
      <div className="flex flex-col">
        <label htmlFor="nome" className="mb-2 opacity-70">Nome e Sobrenome<span>*</span></label>
        <input
          type="text"
          name="nome"
          id="nome"
          className="bg-[#f0f0f0] p-3 w-full rounded mb-8"
          required
        />
      </div>
      <div>
        <label htmlFor="cpf" className="mb-2 opacity-70">CPF<span>*</span></label>
        <input
          type="number"
          name="cpf"
          id="cpf"
          className="bg-[#f0f0f0] p-3 w-full rounded mb-8"
          required
        />
      </div>
      <div>
        <label htmlFor="cep" className="mb-2 opacity-70">CEP<span>*</span></label>
        <input
          type="number"
          name="cep"
          id="cep"
          className="bg-[#f0f0f0] p-3 w-full rounded mb-8"
          required
        />
      </div>
      <div>
        <label htmlFor="rua" className="mb-2 opacity-70">Rua<span>*</span></label>
        <input
          type="text"
          name="rua"
          id="rua"
          className="bg-[#f0f0f0] p-3 w-full rounded mb-8"
          required
        />
      </div>
      <div>
        <label htmlFor="complemento" className="mb-2 opacity-70">Complemento</label>
        <input
          type="text"
          name="complemento"
          id="complemento"
          className="bg-[#f0f0f0] p-3 w-full rounded mb-8"
        />
      </div>
      <div>
        <label htmlFor="bairro" className="mb-2 opacity-70">Bairro<span>*</span></label>
        <input
          type="text"
          name="bairro"
          id="bairro"
          className="bg-[#f0f0f0] p-3 w-full rounded mb-8"
          required
        />
      </div>
      <div>
        <label htmlFor="cidade" className="mb-2 opacity-70">Cidade<span>*</span></label>
        <input
          type="text"
          name="cidade"
          id="cidade"
          className="bg-[#f0f0f0] p-3 w-full rounded mb-8"
          required
        />
      </div>
      <div>
        <label htmlFor="uf" className="mb-2 opacity-70">UF<span>*</span></label>
        <input
          type="number"
          name="uf"
          id="uf"
          className="bg-[#f0f0f0] p-3 w-full rounded mb-8"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="celular" className="mb-2 opacity-70">Celular<span>*</span></label>
        <input
          type="tel"
          name="celular"
          id="celular"
          className="bg-[#f0f0f0] p-3 w-full rounded mb-8"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-2 opacity-70">Email<span>*</span></label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-[#f0f0f0] p-3 w-full rounded mb-8"
          required
        />
      </div>
      <CheckoutCheckbox />
    </form>
  )
}