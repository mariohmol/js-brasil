import { MASKS, ESTADOS_SIGLA } from './utils';
import { create_cpf, create_cnpj, CEPRange, create_titulo, create_renavam } from './validate';
import { randexp } from 'randexp';

const makeGeneric = (val, options = null) => {
  return () => {
    if (!val.textMask || !val.textMask.map) {
      return '';
    }
    const newData = val.textMask.map((c, index) => {
      if (options && options[index]) {
        return options[index]();
      }
      c = c.toString();
      if (c === /\d/.toString()) {
        return Math.floor(Math.random() * 10).toString()
      } else if (c === /[A-Za-z]/.toString()) {
        return randomLetter(1).toString();
      } else if (c.indexOf('/[') === 0) { // /[1-9]/ ou /[5-9]/
        c = c.replace('/[', '').replace(']/', '').split('-')
        const mult = c[1] - c[0];
        const plus = parseInt(c[0]);
        return (Math.floor(Math.random() * mult) + plus).toString();
      } else {
        return c;
      }
    });
    return newData.join('');
  };
}

function randomLetter(size = 1, onlyCapitals = false) {
  var text = "";
  let possible: any = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (onlyCapitals = false) {
    possible += "abcdefghijklmnopqrstuvwxyz";
  }
  possible = possible.split('');
  for (let i = 0; i < size; i++) {
    const pos = Math.floor(Math.random() * possible.length);
    text += possible[pos];
  }
  return text;
}

const randomEstadoSigla = () => {
  const total = ESTADOS_SIGLA.length;
  return ESTADOS_SIGLA[Math.floor(Math.random() * total)];
}

let random: any = randomEstadoSigla();
random = random.split('');
const makeRg = makeGeneric(MASKS['rg'], {
  0: () => random[0],
  1: () => random[1]
});

export const fakerBr = {
  cep: makeGeneric(MASKS['cep']),
  cepState: (state) => {
    return randexp(CEPRange[state]);
  },
  cpf: () => {
    let cpf = makeGeneric(MASKS['cpf'])();
    let restos = create_cpf(cpf);
    cpf = cpf.substr(0, cpf.length - 2) + restos[0] + restos[1];
    restos = create_cpf(cpf);
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
  rg: makeRg,
  telefone: makeGeneric(MASKS['telefone']),
  celular: makeGeneric(MASKS['celular']),
  inscricaoestadual: makeGeneric(MASKS['inscricaoestadual']),
  time: makeGeneric(MASKS['time']),
  currency: makeGeneric(MASKS['currency']),
  percentage: makeGeneric(MASKS['percentage']),
  placa: makeGeneric(MASKS['placa']),
  processo: makeGeneric(MASKS['processo']),
  titulo: () => {
    const titulo = makeGeneric(MASKS['titulo'])();
    const { dig1, dig2 } = create_titulo(titulo);
    return titulo.substr(0, titulo.length - 2) + dig1 + dig2;
  },
  renavam: () => {
    const renavam = makeGeneric(MASKS['renavam'])();
    const dv = create_renavam(renavam);
    return renavam.substr(0, renavam.length - 1) + dv;
  }
};


