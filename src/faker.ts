import { MASKS } from './mask';
import { CEPRange, validate_cns } from './validate';
import { randexp } from 'randexp';
import { validate_placa } from './placa';
import { generateInscricaoEstadual } from './inscricaoestadual';
import {
  create_cpf, create_cnpj, create_titulo, create_renavam, create_cnh,
  create_cns, create_ect, create_certidao, create_aih
} from './create';
import { getAllDigits, randArray, CORES, randomLetterOrNumber, randomLetter, rand, randomNumber, randomEstadoSigla, slugify } from './utils';
import { VEICULOS, VEICULOS_CARROCERIAS, VEICULOS_CATEGORIAS, VEICULOS_TIPOS, VEICULOS_COMBUSTIVEIS, VEICULOS_ESPECIES, VEICULOS_RESTRICOES } from './veiculos';
import { LOCALIZACAO_CIDADES, LOCALIZACAO_BAIRROS, LOCALIZACAO_RUAS, LOCALIZACAO_COMPLEMENTOS, LOCALIZACAO_ESTADOS } from './name';
import { NOMES_MASCULINOS, EMPRESAS_TIPOS, EMPRESAS_NOMES, NOMES_FEMININOS, SOBRENOMES } from '../addons/pessoas';
import cnaes from '../addons/cnaes';

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

export const fakerBr = {
  aih: (uf = 35, ano = 19, tipo = 1, seq = null) => {
    if (!seq) {
      seq = randomNumber(1000000, 9999999); // new Random().Next(1, 9999999).ToString().PadLeft(7, '0');
    }
    const cod = parseInt(`${uf}${ano}${tipo}${seq}`);
    const digito = create_aih(cod);
    const result = `${cod}${digito}`;
    return result;
  },
  celular: makeGeneric(MASKS['celular']),
  cep: makeGeneric(MASKS['cep']),
  cepState: (state: string | number) => {
    return randexp(CEPRange[state]);
  },
  certidao: () => {
    let value = makeGeneric(MASKS['certidao'])();
    let certidao = getAllDigits(value);
    let check = create_certidao(certidao);
    return certidao.substr(0, certidao.length - 2) + check;
  },
  chassi: () => {
    let chassi = makeGeneric(MASKS['chassi'])();
    chassi = chassi.replace(/i|I|o|O|q|Q/g, 'A');
    return chassi;
  },
  cid: () => {
    // let chassi = makeGeneric(MASKS['chassi'])();
    // chassi = chassi.replace(/i|I|o|O|q|Q/g, 'A');
    // return chassi;
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
    let cns;
    do {
      cns = makeGeneric(MASKS['cns'])();

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
      cns = cns.substr(0, cns.length - 2) + digito;
    } while (!validate_cns(cns));
    return cns;

  },
  contabanco: makeGeneric(MASKS['contabanco']),
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
  data: (config: any = {}) => {
    let date = new Date();
    if (config.dias) {
      date.setDate(date.getDate() + config.dias);
    }
    if (config.meses) {
      date.setMonth(date.getMonth() + config.meses);
    }
    if (config.idadeMin && config.idadeMax) {
      config.anos = -randomNumber(config.idadeMin, config.idadeMax);
    }
    if (config.anos) {
      date.setFullYear(date.getFullYear() + config.anos);
    }
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  },
  ect: () => {
    const ect = makeGeneric(MASKS['ect'])();
    const dv = create_ect(ect.substr(0, ect.length - 1));
    return ect.substr(0, ect.length - 1) + dv;
  },
  email: (options: any = {}) => {
    const faker = this.fakerBr;
    let nome = randArray(NOMES_MASCULINOS);

    if (options.nome) {
      nome = options.nome;
    }

    nome = slugify(nome);

    const site = faker.site({ ...options, url: '' });

    return nome + '@' + site;
  },
  empresa: () => {
    const faker = this.fakerBr;
    const cnpj = faker.cnpj();
    const telefone = faker.telefone();
    const celular = faker.celular();
    const endereco = faker.endereco();
    const inscricaoestadual = faker.inscricaoestadual(endereco.estadoSigla);
    const dataAbertura = fakerBr.data({
      idadeMin: 4,
      idadeMax: 20
    });
    const fundador1 = faker.pessoa();
    const fundador2 = faker.pessoa();
    const fundadores = [
      fundador1,
      fundador2
    ];
    const nome = randArray(EMPRESAS_TIPOS) + ' ' + randArray(EMPRESAS_NOMES);
    // const site = faker.site();
    const email = faker.email({
      nome: 'contato',
      empresa: nome
    });

    return {
      nome, email,
      inscricaoestadual, fundadores,
      cnpj, telefone, celular,
      endereco, dataAbertura
    }
  },
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

    const dataNascimento = fakerBr.data({
      idadeMin: 18,
      idadeMax: 40
    });
    const site = faker.site();
    const email = faker.email();
    const senha = faker.senha();


    const endereco = faker.endereco();

    // TODO - Signo, Altura, Peso, TipoSanguineo

    const sobrenomePai = randArray(SOBRENOMES);
    const sobrenomeMae = randArray(SOBRENOMES);
    let nome = randArray(NOMES_MASCULINOS) + ' ' + sobrenomeMae + ' ' + sobrenomePai;
    let mae = randArray(NOMES_FEMININOS) + ' ' + sobrenomeMae + ' ' + sobrenomePai;
    let pai = randArray(NOMES_MASCULINOS) + ' ' + randArray(SOBRENOMES) + ' ' + sobrenomePai;

    const usuario = faker.usuario(nome);
    return {
      nome,
      mae,
      pai,
      site,
      rg, email,
      cpf, telefone, celular,
      dataNascimento,
      endereco,
      senha, usuario
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
  senha: (config: any = {}) => {
    // if()
    return 'ABC'; // todo
  },
  site: (options: any = {}) => {
    let nome = randArray(EMPRESAS_TIPOS) + ' ' + randArray(EMPRESAS_NOMES);
    let dominio = '.com.br';
    let url = randArray(['http://', 'https://']);
    if (options.nome) {
      nome = options.nome;
    }
    if (options.dominio) {
      dominio = options.dominio;
    }
    if (options.url !== undefined) {
      url = options.url;
    }
    nome = slugify(nome);
    return url + nome + dominio;

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
  },
  usuario: (nome) => {
    if (!nome) {
      const sobrenomePai = randArray(SOBRENOMES);
      nome = randArray(NOMES_MASCULINOS) + ' ' + sobrenomePai;
    }
    return slugify(nome);
  }

};


