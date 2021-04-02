import { MASKS, MASKSIE } from './mask';
import { CEPRange, validate_cns, validate_titulo } from './validate';
import { randexp } from 'randexp';
import { validate_placa } from './placa';
import { generateInscricaoEstadual } from './inscricaoestadual';
import {
  create_cpf, create_cnpj, create_titulo, create_renavam, create_cnh,
  create_cns, create_ect, create_certidao, create_aih, create_pispasep
} from './create';
import { getAllDigits, randArray, CORES, randomLetter, randomNumber, randomEstadoSigla, slugify, makeGenericFaker, getSpecialProperty } from './utils';
import { VEICULOS, VEICULOS_CARROCERIAS, VEICULOS_CATEGORIAS, VEICULOS_TIPOS, VEICULOS_COMBUSTIVEIS, VEICULOS_ESPECIES, VEICULOS_RESTRICOES } from './veiculos';
import { LOCALIZACAO_CIDADES, LOCALIZACAO_BAIRROS, LOCALIZACAO_RUAS, LOCALIZACAO_COMPLEMENTOS, LOCALIZACAO_ESTADOS } from './name';
import { NOMES_MASCULINOS, EMPRESAS_TIPOS, EMPRESAS_NOMES, NOMES_FEMININOS, SOBRENOMES, TIPOS_SANGUINEOS, getAstro, TELEFONE_ESTADO, CEP_ESTADO } from '../addons/pessoas';
import { faker_iptu } from './iptu/create';
import { EstadosType } from './estados';
// import cnaes from '../addons/cnaes';


function aih(uf = 35, ano = 19, tipo = 1, seq: number | null = null) {
  if (!seq) {
    seq = randomNumber(1000000, 9999999); // new Random().Next(1, 9999999).ToString().PadLeft(7, '0');
  }
  const cod = parseInt(`${uf}${ano}${tipo}${seq}`);
  const digito = create_aih(cod);
  const result = `${cod}${digito}`;
  return result;
}
function celular(options: any = {}) {
  return telefone({ ...options, celular: true });
}
function cep(options: any = {}) {
  if (!options.estado) {
    options.estado = randomEstadoSigla();
  }

  const range = CEP_ESTADO[options.estado];
  let cepNumber = randomNumber(range[0][0], range[0][1]);
  let cep: string;
  if (cepNumber < 10000000) {
    cep = '0' + cepNumber.toString();
  } else {
    cep = cepNumber.toString();
  }

  const mask = cep.slice(0, cep.length - 3) + '-' + cep.slice(cep.length - 3, cep.length);
  return mask;
}
function cepState(state: string | number) {
  return randexp(CEPRange[state]);
}
function certidao() {
  let value = makeGenericFaker(MASKS['certidao'])();
  let certidao = getAllDigits(value);
  let check = create_certidao(certidao);
  return certidao.substr(0, certidao.length - 2) + check;
}
function chassi() {
  let chassi = makeGenericFaker(MASKS['chassi'])();
  chassi = chassi.replace(/i|I|o|O|q|Q/g, 'A');
  return chassi;
}
function cid() {
  // let chassi = makeGenericFaker(MASKS['chassi'])();
  // chassi = chassi.replace(/i|I|o|O|q|Q/g, 'A');
  // return chassi;
}
const cnae = makeGenericFaker(MASKS['cnae']);
function cnh() {
  let cnh = makeGenericFaker(MASKS['cnh'])();
  const nodigits = cnh;
  let check = create_cnh(nodigits);
  return cnh.substr(0, cnh.length - 2) + check;
}
function cnpj() {
  let cnpj = makeGenericFaker(MASKS['cnpj'])();
  cnpj = cnpj.replace(/[^\d]+/g, '');

  let restos = create_cnpj(cnpj) || [0, 1];

  cnpj = cnpj.substr(0, cnpj.length - 2) + restos[0] + restos[0]

  restos = create_cnpj(cnpj) || [0, 1];

  return cnpj.substr(0, cnpj.length - 1) + restos[1];
}
function cns() {
  let cns;
  do {
    cns = makeGenericFaker(MASKS['cns'])();

    cns = getAllDigits(cns);
    const primeiroDigito = parseInt(cns[0]);
    if (primeiroDigito < 3) {
      const cnsDigits = cns.split('');
      cnsDigits[cnsDigits.length - 2] = '0';
      cnsDigits[cnsDigits.length - 3] = '0';
      cnsDigits[cnsDigits.length - 4] = '0';
      cns = cnsDigits.join();
    }

    let digito = create_cns(cns);
    cns = cns.substr(0, cns.length - 2) + digito;
  } while (!validate_cns(cns));
  return cns;

}
const contabanco = makeGenericFaker(MASKS['contabanco']);
function cpf() {
  let cpf_fake = makeGenericFaker(MASKS['cpf'])();
  let restos = create_cpf(cpf_fake);
  if (!restos) {
    throw new Error('Could not create cpf on faker cpf')
  }
  cpf_fake = cpf_fake.substr(0, cpf_fake.length - 2) + restos[0] + restos[1];

  restos = create_cpf(cpf_fake);
  if (!restos) {
    throw new Error('Could not create cpf on faker cpf')
  }
  cpf_fake = cpf_fake.substr(0, cpf_fake.length - 2) + restos[0] + restos[1];

  return cpf_fake;
}
const cpfcnpj = makeGenericFaker(MASKS['cpfcnpj']);
const cartaocredito = makeGenericFaker(MASKS['cartaocredito']);
function currency() {
  const x = Math.random() * 10000;
  let final = x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  if (final[final.length - 3] === '.') {
    final = final.replace(/\./g, '#');
    final = final.replace(/\,/g, '.');
    final = final.replace(/\#/g, ',');
  }
  return final;
}
function currencyNumber() {
  const x = Math.random() * 10000;
  return parseFloat(x.toFixed(2));
}
function data(config: any = {}) {
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
}
function ect() {
  const ect = makeGenericFaker(MASKS['ect'])();
  const dv = create_ect(ect.substr(0, ect.length - 1));
  return ect.substr(0, ect.length - 1) + dv;
}
function email(options: any = {}) {
  let nome = randArray(NOMES_MASCULINOS);

  if (options.nome) {
    nome = options.nome;
  }
  nome = slugify(nome);

  let empresa = nome;
  if (options.empresa) {
    empresa = options.empresa;
  }
  return nome + '@' + site({ nome: empresa, url: '' });
}
function empresa(options: any = {}) {

  if (!options.estado) {
    options.estado = randomEstadoSigla();
  }
  const enderecoVal = endereco(options);


  const inscricaoestadualVal = inscricaoestadual(enderecoVal.estadoSigla);
  const dataAbertura = data({
    idadeMin: 4,
    idadeMax: 20
  });
  const fundador1 = pessoa(options);
  const fundador2 = pessoa(options);
  const fundadores = [
    fundador1,
    fundador2
  ];
  const nome = randArray(EMPRESAS_TIPOS) + ' ' + randArray(EMPRESAS_NOMES);
  // const site = faker.site();
  const emailVal = email({
    nome: 'contato',
    empresa: nome
  });

  return {
    nome,
    email: emailVal,
    inscricaoestadual: inscricaoestadualVal,
    fundadores,
    cnpj: cnpj(),
    endereco: enderecoVal,
    telefone: telefone({
      estado: enderecoVal.estadoSigla
    }),
    celular: celular({
      estado: enderecoVal.estadoSigla
    }),
    dataAbertura
  }
}
function endereco(options: any = {}) {
  if (!options.estado) {
    options.estado = randomEstadoSigla();
  }
  const estadoFound = LOCALIZACAO_ESTADOS.find(e => e.uf.toLowerCase() === options.estado) || LOCALIZACAO_ESTADOS[0];
  const cidades = LOCALIZACAO_CIDADES.filter(c => c[1] === estadoFound.nome);
  const cidade = randArray(cidades);
  let estado = cidade[1].toLowerCase();
  estado = LOCALIZACAO_ESTADOS.find(e => e.nome.toLowerCase() === estado.toLowerCase())
  return {
    cep: cep(),
    logradouro: randArray(LOCALIZACAO_RUAS),
    complemento: randArray(LOCALIZACAO_COMPLEMENTOS) + ' ' + number({ min: 1, max: 10, decimals: 0 }),
    numero: number({ min: 1, decimals: 0 }),
    bairro: randArray(LOCALIZACAO_BAIRROS),
    cidade: cidade[0],
    estado: cidade[1],
    estadoSigla: estado.uf
  }
}
const inscricaoestadual = (estadoInput: string) => {
  const estado: EstadosType = <EstadosType>estadoInput.toLowerCase();
  if (!MASKSIE) {
    return
  }
  const funcIE = getSpecialProperty(MASKSIE, estado);
  let val = makeGenericFaker(funcIE)();
  val = val.match(/\d/g).join('');
  const newval = generateInscricaoEstadual[estado](val);
  return newval;
}

function iptu(estado: any, cidade: any) {
  return faker_iptu(estado, cidade);
}

function number(options: any = {}) {
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
}
const porcentagem = makeGenericFaker(MASKS['porcentagem']);

function pessoa(options: any = {}) {
  if (!options.estado) {
    options.estado = randomEstadoSigla();
  }

  const dataNascimento = data({
    idadeMin: 18,
    idadeMax: 40
  });

  const altura = '1.' + randomNumber(35, 90);
  const peso = randomNumber(50, 120);
  const signo = getAstro(dataNascimento);
  const tipoSanguineo = randArray(TIPOS_SANGUINEOS);
  const sobrenomePai = randArray(SOBRENOMES);
  const sobrenomeMae = randArray(SOBRENOMES);
  let nome = randArray(NOMES_MASCULINOS) + ' ' + sobrenomeMae + ' ' + sobrenomePai;
  let mae = randArray(NOMES_FEMININOS) + ' ' + sobrenomeMae + ' ' + sobrenomePai;
  let pai = randArray(NOMES_MASCULINOS) + ' ' + randArray(SOBRENOMES) + ' ' + sobrenomePai;

  return {
    nome,
    mae,
    pai,
    site: site(),
    email: email(),
    senha: senha(),
    rg: rg(options),
    cpf: cpf(),
    telefone: telefone(options),
    celular: celular(options),
    dataNascimento,
    endereco: endereco(options),
    usuario: usuario(nome),
    signo, tipoSanguineo, altura, peso
  }

}
function pispasep() {
  let pis = makeGenericFaker(MASKS['pispasep'])();
  const digit = create_pispasep(pis);
  const values = pis.split('');
  values[values.length - 1] = digit;
  return values;
}
function placa() {
  let placa: any;
  do {
    placa = makeGenericFaker(MASKS['placa'])();
  } while (!validate_placa(placa));
  return placa;
}
const processo = makeGenericFaker(MASKS['processo']);
function renavam() {
  const renavam = makeGenericFaker(MASKS['renavam'])();
  const dv = create_renavam(renavam);
  return renavam.substr(0, renavam.length - 1) + dv;
}
function rg(options: any = {}) {
  if (!options.estado) {
    options.estado = randomEstadoSigla();
  }
  const estado = options.estado.split('');
  const makeRg = makeGenericFaker(MASKS['rg'], {
    0: () => estado[0],
    1: () => estado[1]
  });
  return makeRg();
}
function senha(options: any = {}) {
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
}
function site(options: any = {}) {
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

}
const sped = makeGenericFaker(MASKS['sped']);
function telefone(options: any = {}) {
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
}
const time = makeGenericFaker(MASKS['time']);
function titulo() {
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
}
function veiculo() {
  const veiculo = randArray(VEICULOS);
  return {
    placa: placa(),
    chassi: chassi(),
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
function usuario(nome: string) {
  if (!nome) {
    const sobrenomePai = randArray(SOBRENOMES);
    nome = randArray(NOMES_MASCULINOS) + ' ' + sobrenomePai;
  }
  return slugify(nome);
}


export default {
  aih: aih,
  cartaocredito: cartaocredito,
  celular: celular,
  cep: cep,
  cepState: cepState,
  certidao: certidao,
  chassi: chassi,
  cid: cid,
  cnae: cnae,
  cnh: cnh,
  cnpj: cnpj,
  cns: cns,
  contabanco: contabanco,
  cpf: cpf,
  cpfcnpj: cpfcnpj,
  currency: currency,
  currencyNumber: currencyNumber,
  data: data,
  ect: ect,
  email: email,
  empresa: empresa,
  endereco: endereco,
  inscricaoestadual: inscricaoestadual,
  iptu: iptu,
  number: number,
  pessoa: pessoa,
  pispasep: pispasep,
  placa: placa,
  porcentagem: porcentagem,
  processo: processo,
  renavam: renavam,
  rg: rg,
  senha: senha,
  site: site,
  sped: sped,
  telefone: telefone,
  time: time,
  titulo: titulo,
  veiculo: veiculo,
  usuario: usuario,
};