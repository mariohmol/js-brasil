import { ESTADOS_SIGLA } from './estados';
import { MASKS } from './mask';
import { CEPRange } from './validate';
import { randexp } from 'randexp';
import { validate_placa } from './placa';
import { generateInscricaoEstadual } from './inscricaoestadual';
import { create_cpf, create_cnpj, create_titulo, create_renavam } from './create';

const makeGeneric = (val: any, options = null) => {
  return () => {
    if (!val.textMask || !val.textMask.map) {
      return '';
    }
    const newData = val.textMask.map((c: string | any[], index: string | number) => {
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
        if (parseInt(c[1])) {
          const mult = c[1] - c[0];
          const plus = parseInt(c[0]);
          return (Math.floor(Math.random() * mult) + plus).toString();
        } else {
          return rand(1, [c[0], c[1]]);
        }
      } else {
        return c;
      }
    });
    return newData.join('');
  };
}

function rand(length: number, ...ranges: any[]) {
  var str = "";                                                       // the string (initialized to "")
  while (length--) {                                                   // repeat this length of times
    var ind = Math.floor(Math.random() * ranges.length);              // get a random range from the ranges object
    var min = ranges[ind][0].charCodeAt(0),                           // get the minimum char code allowed for this range
      max = ranges[ind][1].charCodeAt(0);                           // get the maximum char code allowed for this range
    var c = Math.floor(Math.random() * (max - min + 1)) + min;        // get a random char code between min and max
    str += String.fromCharCode(c);                                    // convert it back into a character and append it to the string str
  }
  return str;                                                         // return str
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



export const fakerBr = {
  celular: makeGeneric(MASKS['celular']),
  cep: makeGeneric(MASKS['cep']),
  cepState: (state: string | number) => {
    return randexp(CEPRange[state]);
  },
  // certidao: validate_certidao,
  // cnh

  cnpj: () => {
    let cnpj = makeGeneric(MASKS['cnpj'])();
    cnpj = cnpj.replace(/[^\d]+/g, '');

    let restos = create_cnpj(cnpj);
    cnpj = cnpj.substr(0, cnpj.length - 2) + restos[0] + restos[0]

    restos = create_cnpj(cnpj);
    return cnpj.substr(0, cnpj.length - 1) + restos[1];
  },
  // cns
  cpf: () => {
    let cpf = makeGeneric(MASKS['cpf'])();
    let restos = create_cpf(cpf);
    cpf = cpf.substr(0, cpf.length - 2) + restos[0] + restos[1];
    restos = create_cpf(cpf);
    return cpf.substr(0, cpf.length - 2) + restos[0] + restos[1];
  },

  currency: () => {
    const x = Math.random() * 10000;
    return x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  },
  currencyNumber: () => {
    const x = Math.random() * 10000;
    return parseFloat(x.toFixed(2));
  },

  //ect

  inscricaoestadual: estado => {
    let val = makeGeneric(MASKS['inscricaoestadual'][estado])();
    val = val.match(/\d/g).join('');
    const newval = generateInscricaoEstadual[estado](val);
    return newval;
  },

  //iptu


  number: () => {
    const x = Math.random() * 10000;
    return parseFloat(x.toFixed(2));
  },
  percentage: makeGeneric(MASKS['percentage']),
  pispasep: makeGeneric(MASKS['pispasep']),
  placa: () => {
    let placa: any;
    do {
      placa = makeGeneric(MASKS['placa'])();
    } while (!validate_placa(placa));
    return placa;
  },
  processo: makeGeneric(MASKS['processo']),
  renavam: () => {
    const renavam = makeGeneric(MASKS['renavam'])();
    const dv = create_renavam(renavam);
    return renavam.substr(0, renavam.length - 1) + dv;
  },
  rg: () => {
    let random: any = randomEstadoSigla();
    random = random.split('');
    const makeRg = makeGeneric(MASKS['rg'], {
      0: () => random[0],
      1: () => random[1]
    });
    return makeRg();
  },
  telefone: makeGeneric(MASKS['telefone']),
  time: makeGeneric(MASKS['time']),
  titulo: () => { 
    const titulo = makeGeneric(MASKS['titulo'])();
    const number = titulo.substr(0, titulo.length - 2);
    const dig = create_titulo(number);
    return number + dig[0] + dig[1];
  },

};


