import { MASKS } from './utils';

const makeGeneric = (val) =>{
  return () => {
    return val.textMask.map(c => {
      if (c === /\d/) {
        return Math.floor(Math.random() * 10)
      } else if (c === /[A-Za-z]/) {
        const num = Math.floor((Math.random() * 57)) + 65;
        return String.fromCharCode(num);
      } else if (c === /[1-9]/) {
        return Math.floor(Math.random() * 9) + 1;
      } else {
        return c;
      }
    });
  };
}

export const fakerBr = {
  cep: makeGeneric(MASKS['cep']),
  cpf: makeGeneric(MASKS['cpf']),
  cnpj: makeGeneric(MASKS['cnpj']),
  rg: makeGeneric(MASKS['rg']),
  telefone: makeGeneric(MASKS['telefone']),
  inscricaoestadual: makeGeneric(MASKS['inscricaoestadual']), 
  time: makeGeneric(MASKS['time']),
  // currency: makeGeneric(MASKS['currency']),
  percentage: makeGeneric(MASKS['percentage']), 
  placa: makeGeneric(MASKS['placa']), 
  titulo: makeGeneric(MASKS['titulo'])
};
