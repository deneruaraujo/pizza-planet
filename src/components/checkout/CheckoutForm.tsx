"use client"

import { Input } from "@/components/ui/input";
import { CheckoutCheckbox } from "./CheckoutCheckbox";
import { ChangeEvent, useState } from "react";

interface adressProps {
  rua: string,
  complemento: string,
  bairro: string,
  cidade: string,
  uf: string
}

export function CheckoutForm() {
  const [cpf, setCpf] = useState<string>('');
  const [cep, setCep] = useState<string>('');
  const [address, setAddress] = useState<adressProps>({
    rua: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: ''
  })

  const applyCpfFormat = (value: string) => {
    return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  };

  const handleCpfChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const cleanedValue = value.replace(/\D/g, '');
    const formattedValue = applyCpfFormat(cleanedValue);
    setCpf(formattedValue);
  };

  const handleCepChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCep = event.target.value;
    setCep(newCep);
    fetchCepData(newCep);
  }

  const fetchCepData = (cep: string) => {
    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados do CEP');
        }
        return response.json();
      })
      .then(data => {
        setAddress({
          rua: data.logradouro,
          complemento: data.complementos,
          bairro: data.bairro,
          cidade: data.localidade,
          uf: data.uf
        })
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error)
      })
  }
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
          pattern="[A-Za-z\s]*"
          title="Por favor, insira apenas letras e espaços"
          className=""
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="cpf" className="mb-2 opacity-70">CPF<span>*</span></label>
          <Input
            type="text"
            name="cpf"
            id="cpf"
            pattern="[0-9.-]{11}"
            maxLength={11}
            value={cpf}
            onChange={handleCpfChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cep" className="mb-2 opacity-70">CEP<span>*</span></label>
          <Input
            type="text"
            name="cep"
            id="cep"
            value={cep}
            onChange={handleCepChange}
            maxLength={8}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="rua" className="mb-2 opacity-70">Rua<span>*</span></label>
        <Input
          type="text"
          name="rua"
          id="rua"
          value={address.rua}
          onChange={(e) => setAddress({ ...address, rua: e.target.value })}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="numero" className="mb-2 opacity-70">Número da residência<span>*</span></label>
          <Input
            type="numero"
            name="numero"
            id="numero"
            required
          />
        </div>
        <div>
          <label htmlFor="uf" className="mb-2 opacity-70">UF<span>*</span></label>
          <Input
            type="text"
            name="uf"
            maxLength={2}
            id="uf"
            value={address.uf}
            onChange={(e) => setAddress({ ...address, uf: e.target.value })}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="complemento" className="mb-2 opacity-70">Complemento</label>
        <Input
          type="text"
          name="complemento"
          id="complemento"
          value={address.complemento}
          onChange={(e) => setAddress({ ...address, complemento: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="bairro" className="mb-2 opacity-70">Bairro<span>*</span></label>
        <Input
          type="text"
          name="bairro"
          id="bairro"
          value={address.bairro}
          onChange={(e) => setAddress({ ...address, bairro: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="cidade" className="mb-2 opacity-70">Cidade<span>*</span></label>
        <Input
          type="text"
          name="cidade"
          id="cidade"
          value={address.cidade}
          onChange={(e) => setAddress({ ...address, cidade: e.target.value })}
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