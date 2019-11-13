import { ESTADOS_SIGLA } from './estados';
import { MASKS } from './mask';
import { CEPRange } from './validate';
import { randexp } from 'randexp';
import { validate_placa } from './placa';
import { generateInscricaoEstadual } from './inscricaoestadual';
import { create_cpf, create_cnpj, create_titulo, create_renavam, create_cnh, create_cns, create_ect } from './create';
import { getAllDigits, randArray, CORES } from './utils';
import { VEICULOS, VEICULOS_CARROCERIAS, VEICULOS_CATEGORIAS, VEICULOS_TIPOS, VEICULOS_COMBUSTIVEIS, VEICULOS_ESPECIES, VEICULOS_RESTRICOES } from './veiculos';
import { LOCALIZACAO_CIDADES, LOCALIZACAO_BAIRROS, LOCALIZACAO_RUAS, LOCALIZACAO_COMPLEMENTOS, LOCALIZACAO_ESTADOS } from './name';
import { NOMES_MASCULINOS, EMPRESAS_TIPOS, EMPRESAS_NOMES } from '../addons/pessoas';

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
      } else if (c === /\w/.toString()) {
        return randomLetterOrNumber(1).toString();
      } else if (c.indexOf('/[') === 0) { // /[1-9]/ ou /[5-9]/
        c = c.replace('/[', '').replace(']/', '');

        if (c.indexOf('-') > 0) {
          c = c.split('-');
          if (parseInt(c[1])) {
            const mult = c[1] - c[0];
            const plus = parseInt(c[0]);
            return (Math.floor(Math.random() * mult) + plus).toString();
          } else {
            return rand(1, [c[0], c[1]]);
          }
        } else if (c.indexOf('|') > 0) {
          c = c.split('|');
          const index = Math.floor(Math.random() * c.length);
          return c[index];
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
  while (length--) {                                                  // repeat this length of times
    var ind = Math.floor(Math.random() * ranges.length);              // get a random range from the ranges object
    var min = ranges[ind][0].charCodeAt(0),                           // get the minimum char code allowed for this range
      max = ranges[ind][1].charCodeAt(0);                             // get the maximum char code allowed for this range
    var c = Math.floor(Math.random() * (max - min + 1)) + min;        // get a random char code between min and max
    str += String.fromCharCode(c);                                    // convert it back into a character and append it to the string str
  }
  return str;                                                         // return str
}

function randomLetter(size = 1, onlyCapitals = false) {
  var text = "";
  let possible: any = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (onlyCapitals == false) {
    possible += "abcdefghijklmnopqrstuvwxyz";
  }
  possible = possible.split('');
  for (let i = 0; i < size; i++) {
    const pos = Math.floor(Math.random() * possible.length);
    text += possible[pos];
  }
  return text;
}


function randomLetterOrNumber(size = 1, onlyCapitals = false) {
  var text = "";
  let possible: any = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  if (onlyCapitals == false) {
    possible += "abcdefghijklmnopqrstuvwxyz0123456789";
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
  endereco: () => {
    const fakerBr = this.fakerBr;
    const cep = fakerBr.cep();
    const cidade = randArray(LOCALIZACAO_CIDADES);
    let estado = cidade[1].toLowerCase();
    estado = LOCALIZACAO_ESTADOS.find(e => e.nome.toLowerCase() === estado)
    return {
      cep,
      logradouro: randArray(LOCALIZACAO_RUAS),
      complemento: randArray(LOCALIZACAO_COMPLEMENTOS) + ' ' + fakerBr.number({ min: 1, max: 10, decimals: 0 }),
      numero: fakerBr.number({ min: 1, decimals: 0 }),
      bairro: randArray(LOCALIZACAO_BAIRROS),
      cidade: cidade[0],
      estado: cidade[1],
      estadoSigla: estado.uf
    }
  },
  contabanco: makeGeneric(MASKS['contabanco']),
  celular: makeGeneric(MASKS['celular']),
  cep: makeGeneric(MASKS['cep']),
  cepState: (state: string | number) => {
    return randexp(CEPRange[state]);
  },
  certidao: makeGeneric(MASKS['certidao']),
  chassi: () => {
    let chassi = makeGeneric(MASKS['chassi'])();
    chassi = chassi.replace(/i|I|o|O|q|Q/g, 'A');
    return chassi;
  },
  cnae: makeGeneric(MASKS['cnae']),
  cnh: () => {
    let cnh = makeGeneric(MASKS['cnh'])();
    const nodigits = cnh;
    let check = create_cnh(nodigits);
    return cnh.substr(0, cnh.length - 2) + check;
  },
  cnpj: () => {
    let cnpj = makeGeneric(MASKS['cnpj'])();
    cnpj = cnpj.replace(/[^\d]+/g, '');

    let restos = create_cnpj(cnpj);
    cnpj = cnpj.substr(0, cnpj.length - 2) + restos[0] + restos[0]

    restos = create_cnpj(cnpj);
    return cnpj.substr(0, cnpj.length - 1) + restos[1];
  },
  cns: () => {
    let cns = makeGeneric(MASKS['cns'])();

    cns = getAllDigits(cns);
    const primeiroDigito = parseInt(cns[0]);
    if (primeiroDigito < 3) {
      const cnsDigits = cns.split();
      cnsDigits[cnsDigits.length - 2] = 0;
      cnsDigits[cnsDigits.length - 3] = 0;
      cnsDigits[cnsDigits.length - 4] = 0;
      cns = cnsDigits.join();
    }

    let digito = create_cns(cns);
    return cns.substr(0, cns.length - 2) + digito;
  },
  empresa: () => {
    const faker = this.fakerBr;
    const cnpj = faker.cnpj();
    const telefone = faker.telefone();
    const celular = faker.celular();
    const endereco = faker.endereco();
    const inscricaoestadual = faker.inscricaoestadual(endereco.estadoSigla);


    // const dataAbertura = faker.celular();
    // const site = faker.site();
    // const email = faker.email();

    return {
      name: randArray(EMPRESAS_TIPOS) + ' ' +  randArray(EMPRESAS_NOMES), // TODO
      inscricaoestadual,
      cnpj, telefone, celular,
      endereco
    }
  },
  cpf: () => {
    let cpf = makeGeneric(MASKS['cpf'])();
    let restos = create_cpf(cpf);
    cpf = cpf.substr(0, cpf.length - 2) + restos[0] + restos[1];
    restos = create_cpf(cpf);
    return cpf.substr(0, cpf.length - 2) + restos[0] + restos[1];
  },
  cpfcnpj: makeGeneric(MASKS['cpfcnpj']),
  cartaocredito: makeGeneric(MASKS['cartaocredito']),

  currency: () => {
    const x = Math.random() * 10000;
    return x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  },
  currencyNumber: () => {
    const x = Math.random() * 10000;
    return parseFloat(x.toFixed(2));
  },

  date: makeGeneric(MASKS['date']),
  ect: () => {
    const ect = makeGeneric(MASKS['ect'])();
    const dv = create_ect(ect.substr(0, ect.length - 1));
    return ect.substr(0, ect.length - 1) + dv;
  },
  email: (options: any = {}) => {
    let name = randArray(NOMES_MASCULINOS)
    if(options.name){
      name = options.name.match(/\w/g).join('');
    }
    name = name.toLowerCase();
    const ect = makeGeneric(MASKS['ect'])();
    const dv = create_ect(ect.substr(0, ect.length - 1));
    return ect.substr(0, ect.length - 1) + dv;
  },
  inscricaoestadual: estado => {
    estado = estado.toLowerCase();
    let val = makeGeneric(MASKS['inscricaoestadual'][estado])();
    val = val.match(/\d/g).join('');
    const newval = generateInscricaoEstadual[estado](val);
    return newval;
  },

  iptu: makeGeneric(MASKS['iptu']),

  number: (options: any = {}) => {
    if (!options.max) {
      options.max = 10000;
    }
    if (options.min === undefined) {
      options.min = 0;
    }
    if (options.decimals === undefined) {
      options.decimals = 2;
    }
    const x = (Math.random() * options.max) + options.min;
    if (options.decimals === 0) {
      return Math.floor(x);
    }
    return parseFloat(x.toFixed(options.decimals));
  },
  percentage: makeGeneric(MASKS['percentage']),
  pessoa: () => {
    const faker = this.fakerBr;
    const cpf = faker.cpf();
    const rg = faker.rg();
    const telefone = faker.telefone();
    const celular = faker.celular();

    // const dataNascimento = faker.celular();
    // const site = faker.site();
    // const email = faker.email();
    // const senha = faker.password();
    // TODO - CEP , Endereço , Número , Bairro , Cidade, Estado:
    // Signo, Altura, Peso, TipoSanguineo

    return {
      name: 'TEST', // TODO
      mae: 'TEST', // TODO
      pai: 'TEST', // TODO
      rg,
      cpf, telefone, celular
    }

  },
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
  sped: makeGeneric(MASKS['sped']),
  telefone: makeGeneric(MASKS['telefone']),
  time: makeGeneric(MASKS['time']),
  titulo: () => {
    const titulo = makeGeneric(MASKS['titulo'])();
    let number = titulo.substr(0, titulo.length - 2);

    if (number.substr(-2) === '29') {
      const numbers = number.split();
      numbers[numbers.length - 1] = '8';
      number = numbers.join();
    }
    const dig = create_titulo(number);
    return number + dig[0] + dig[1];
  },
  veiculo: () => {
    const faker = this.fakerBr;
    const placa = faker.placa();
    const chassi = faker.chassi();

    const veiculo = randArray(VEICULOS);
    return {
      placa, chassi,
      marca: veiculo.marca,
      modelo: veiculo.modelo,
      categoria: randArray(VEICULOS_CATEGORIAS),
      especie: randArray(VEICULOS_ESPECIES),
      restricao: randArray(VEICULOS_RESTRICOES),
      tipo: randArray(VEICULOS_TIPOS),
      carroceria: randArray(VEICULOS_CARROCERIAS),
      combustivel: randArray(VEICULOS_COMBUSTIVEIS),
      cor: randArray(CORES)
    }
  }

};


