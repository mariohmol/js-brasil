import { MASKS } from './utils';
import { create_cpf, create_cnpj, CEPRange } from './validate';
import { randexp } from 'randexp';

const makeGeneric = (val) => {
  return () => {
    const newData = val.textMask.map(c => {
      c = c.toString();
      if (c === /\d/.toString()) {
        return Math.floor(Math.random() * 10)
      } else if (c === /[A-Za-z]/.toString()) {
        const num = Math.floor((Math.random() * 57)) + 65;
        return String.fromCharCode(num);
      } else if (c === /[1-9]/.toString()) {
        return Math.floor(Math.random() * 9) + 1;
      } else {
        return c;
      }
    });
    return newData.join('');
  };
}

export const fakerBr = {
  cep: makeGeneric(MASKS['cep']),
  cepState: (state) => {
    return randexp(CEPRange[state]);
  },
  cpf: () => {
    const cpf = makeGeneric(MASKS['cpf'])();
    const restos = create_cpf(cpf);
    return cpf.substr(0, cpf.length - 2) + restos[0] + restos[1];
  },
  cnpj: () => {
    let cnpj = makeGeneric(MASKS['cnpj'])();
    cnpj = cnpj.replace(/[^\d]+/g, '');

    let restos = create_cnpj(cnpj);
    cnpj = cnpj.substr(0, cnpj.length - 2) + restos[0] + restos[0]

    restos = create_cnpj(cnpj);
    return cnpj.substr(0, cnpj.length - 1) + restos[1];
  },
  rg: makeGeneric(MASKS['rg']),
  telefone: makeGeneric(MASKS['telefone']),
  inscricaoestadual: makeGeneric(MASKS['inscricaoestadual']),
  time: makeGeneric(MASKS['time']),
  // currency: makeGeneric(MASKS['currency']),
  percentage: makeGeneric(MASKS['percentage']),
  placa: makeGeneric(MASKS['placa']),
  titulo: makeGeneric(MASKS['titulo'])
};
