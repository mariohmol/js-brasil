import { MASKS } from './mask';
import { CEPRange, validate_cns, validate_titulo } from './validate';
import { randexp } from 'randexp';
import { validate_placa } from './placa';
import { generateInscricaoEstadual } from './inscricaoestadual';
import {
  create_cpf, create_cnpj, create_titulo, create_renavam, create_cnh,
  create_cns, create_ect, create_certidao, create_aih, create_pispasep
} from './create';
import { getAllDigits, randArray, CORES, randomLetterOrNumber, randomLetter, rand, randomNumber, randomEstadoSigla, slugify, makeGenericFaker } from './utils';
import { VEICULOS, VEICULOS_CARROCERIAS, VEICULOS_CATEGORIAS, VEICULOS_TIPOS, VEICULOS_COMBUSTIVEIS, VEICULOS_ESPECIES, VEICULOS_RESTRICOES } from './veiculos';
import { LOCALIZACAO_CIDADES, LOCALIZACAO_BAIRROS, LOCALIZACAO_RUAS, LOCALIZACAO_COMPLEMENTOS, LOCALIZACAO_ESTADOS } from './name';
import { NOMES_MASCULINOS, EMPRESAS_TIPOS, EMPRESAS_NOMES, NOMES_FEMININOS, SOBRENOMES, TIPOS_SANGUINEOS, getAstro, TELEFONE_ESTADO, CEP_ESTADO } from '../addons/pessoas';
import { faker_iptu } from './iptu/create';
// import cnaes from '../addons/cnaes';



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
  celular: (options: any = {}) => {
    const faker = this.fakerBr;
    return faker.telefone({ ...options, celular: true });
  },
  cep: (options: any = {}) => {
    if (!options.estado) {
      options.estado = randomEstadoSigla();
    }

    const range = CEP_ESTADO[options.estado];
    let cep = randomNumber(range[0][0], range[0][1]);
    if (cep < 10000000) {
      cep = '0' + cep.toString();
    } else {
      cep = cep.toString();
    }

    const mask = cep.slice(0, cep.length - 3) + '-' + cep.slice(cep.length - 3, cep.length);
    return mask;
  },
  cepState: (state: string | number) => {
    return randexp(CEPRange[state]);
  },
  certidao: () => {
    let value = makeGenericFaker(MASKS['certidao'])();
    let certidao = getAllDigits(value);
    let check = create_certidao(certidao);
    return certidao.substr(0, certidao.length - 2) + check;
  },
  chassi: () => {
    let chassi = makeGenericFaker(MASKS['chassi'])();
    chassi = chassi.replace(/i|I|o|O|q|Q/g, 'A');
    return chassi;
  },
  cid: () => {
    // let chassi = makeGenericFaker(MASKS['chassi'])();
    // chassi = chassi.replace(/i|I|o|O|q|Q/g, 'A');
    // return chassi;
  },
  cnae: makeGenericFaker(MASKS['cnae']),
  cnh: () => {
    let cnh = makeGenericFaker(MASKS['cnh'])();
    const nodigits = cnh;
    let check = create_cnh(nodigits);
    return cnh.substr(0, cnh.length - 2) + check;
  },
  cnpj: () => {
    let cnpj = makeGenericFaker(MASKS['cnpj'])();
    cnpj = cnpj.replace(/[^\d]+/g, '');

    let restos = create_cnpj(cnpj);
    cnpj = cnpj.substr(0, cnpj.length - 2) + restos[0] + restos[0]

    restos = create_cnpj(cnpj);
    return cnpj.substr(0, cnpj.length - 1) + restos[1];
  },
  cns: () => {
    let cns;
    do {
      cns = makeGenericFaker(MASKS['cns'])();

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
  contabanco: makeGenericFaker(MASKS['contabanco']),
  cpf: () => {
    let cpf = makeGenericFaker(MASKS['cpf'])();
    let restos = create_cpf(cpf);
    cpf = cpf.substr(0, cpf.length - 2) + restos[0] + restos[1];
    restos = create_cpf(cpf);
    return cpf.substr(0, cpf.length - 2) + restos[0] + restos[1];
  },
  cpfcnpj: makeGenericFaker(MASKS['cpfcnpj']),
  cartaocredito: makeGenericFaker(MASKS['cartaocredito']),
  currency: () => {
    const x = Math.random() * 10000;
    let final = x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    if (final[final.length - 3] === '.') {
      final = final.replace(/\./g, '#');
      final = final.replace(/\,/g, '.');
      final = final.replace(/\#/g, ',');
    }
    return final;
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
    let month: any = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }

    let day: any = date.getDate();
    if (day < 10) {
      day = '0' + day;
    }
    return `${day}/${month}/${date.getFullYear()}`;
  },
  ect: () => {
    const ect = makeGenericFaker(MASKS['ect'])();
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

    let empresa = nome;
    if (options.empresa) {
      empresa = options.empresa;
    }
    const site = faker.site({ nome: empresa, url: '' });
    return nome + '@' + site;
  },
  empresa: (options: any = {}) => {
    const faker = this.fakerBr;
    const cnpj = faker.cnpj();
    if (!options.estado) {
      options.estado = randomEstadoSigla();
    }
    const endereco = faker.endereco(options);

    const telefone = faker.telefone({
      estado: endereco.estadoSigla
    });
    const celular = faker.celular({
      estado: endereco.estadoSigla
    });

    const inscricaoestadual = faker.inscricaoestadual(endereco.estadoSigla);
    const dataAbertura = fakerBr.data({
      idadeMin: 4,
      idadeMax: 20
    });
    const fundador1 = faker.pessoa(options);
    const fundador2 = faker.pessoa(options);
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
  endereco: (options: any = {}) => {
    const fakerBr = this.fakerBr;
    const cep = fakerBr.cep();

    if (!options.estado) {
      options.estado = randomEstadoSigla();
    }
    const estadoFound = LOCALIZACAO_ESTADOS.find(e => e.uf.toLowerCase() === options.estado);
    const cidades = LOCALIZACAO_CIDADES.filter(c => c[1] === estadoFound.nome);
    const cidade = randArray(cidades);
    let estado = cidade[1].toLowerCase();
    estado = LOCALIZACAO_ESTADOS.find(e => e.nome.toLowerCase() === estado.toLowerCase())
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
    let val = makeGenericFaker(MASKS['inscricaoestadual'][estado])();
    val = val.match(/\d/g).join('');
    const newval = generateInscricaoEstadual[estado](val);
    return newval;
  },

  iptu: (estado, cidade) => {
    return faker_iptu(estado, cidade);
  },

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
  porcentagem: makeGenericFaker(MASKS['porcentagem']),
  pessoa: (options: any = {}) => {
    const faker = this.fakerBr;
    if (!options.estado) {
      options.estado = randomEstadoSigla();
    }
    const cpf = faker.cpf();
    const rg = faker.rg(options);
    const telefone = faker.telefone(options);
    const celular = faker.celular(options);

    const dataNascimento = fakerBr.data({
      idadeMin: 18,
      idadeMax: 40
    });
    const site = faker.site();
    const email = faker.email();
    const senha = faker.senha();


    const endereco = faker.endereco(options);

    const altura = '1.' + randomNumber(35, 90);
    const peso = randomNumber(50, 120);
    const signo = getAstro(dataNascimento);
    const tipoSanguineo = randArray(TIPOS_SANGUINEOS);
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
      senha, usuario,
      signo, tipoSanguineo, altura, peso
    }

  },
  pispasep: () => {
    let pis = makeGenericFaker(MASKS['pispasep'])();
    const digit = create_pispasep(pis);
    const values = pis.split('');
    values[values.length - 1] = digit;
    return values;
  },
  placa: () => {
    let placa: any;
    do {
      placa = makeGenericFaker(MASKS['placa'])();
    } while (!validate_placa(placa));
    return placa;
  },
  processo: makeGenericFaker(MASKS['processo']),
  renavam: () => {
    const renavam = makeGenericFaker(MASKS['renavam'])();
    const dv = create_renavam(renavam);
    return renavam.substr(0, renavam.length - 1) + dv;
  },
  rg: (options: any = {}) => {
    if (!options.estado) {
      options.estado = randomEstadoSigla();
    }
    const estado = options.estado.split('');
    const makeRg = makeGenericFaker(MASKS['rg'], {
      0: () => estado[0],
      1: () => estado[1]
    });
    return makeRg();
  },
  senha: (options: any = {}) => {
    if (!options.size) {
      options.size = 8;
    }
    const pass = [
      randomLetter().toLowerCase(),
      randomLetter().toUpperCase(),
      randomNumber(0, 9),
      randArray(['!', '@', '#', '$', '%', '^', '&', '*'])
    ];
    let i = 4;
    for (i = 4; i <= options.size; i++) {
      const newchar = randArray([
        randomLetter().toLowerCase(),
        randomLetter().toUpperCase(),
        randomNumber(0, 9),
        randArray(['!', '@', '#', '$', '%', '^', '&', '*'])
      ]);
      pass.push(newchar);
    }
    return pass.join('');
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
  sped: makeGenericFaker(MASKS['sped']),
  telefone: (options: any = {}) => {
    let telefone: any = makeGenericFaker(MASKS['telefone'])();
    if (options.estado) {
      const telefones = telefone.toString().split('');
      const ddd = TELEFONE_ESTADO[options.estado.toLowerCase()].toString();
      telefones[1] = ddd[0];
      telefones[2] = ddd[1];
      telefone = telefones.join('');
    }
    if (options.celular) {
      const telefones = telefone.toString().split('');
      telefones[5] = '9';
      telefone = telefones.join('');
    }
    return telefone;
  },
  time: makeGenericFaker(MASKS['time']),
  titulo: () => {
    let titulo;
    do {
      titulo = makeGenericFaker(MASKS['titulo'])();
      let number = titulo.substr(0, titulo.length - 2);

      if (number.substr(-2) === '29') {
        const numbers = number.split();
        numbers[numbers.length - 1] = '8';
        number = numbers.join();
      }
      try {
        const dig = create_titulo(number);
        titulo = number + dig[0] + dig[1];
      } catch (e) {

      }
    } while (!validate_titulo(titulo));
    return titulo;
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


