import { modulo11, getAllDigits, fillString, getAllWords } from "./utils";
import { validate_inscricaoestadual } from "./inscricaoestadual";
import { validate_placa } from "./placa";
import {
  create_cnpj, create_cpf,
  create_renavam, create_titulo, create_ect, create_processo, create_titulo_atual, create_cnh
} from "./create";
import RG from "./rg";
import IPTU from "./iptu";


function validate_address(number) {
  return true;
}

function validate_bankaccount(number) {
  return true;
}


export function validate_celular(cel: any) {
  let celClean = cel.replace(/[^\d]+/g, '');
  celClean = celClean.replace(/_/g, '');
  if (celClean.length !== 11) {
    return false;
  }
  if (celClean[0] == 0 || celClean[2] < 5) {
    return false;
  }
  return true;
}

export const CEPRange = {
  'SP': /^([1][0-9]{3}|[01][0-9]{4})[0-9]{3}$/g,
  'RJ': /^[2][0-8][0-9]{3}[0-9]{3}$/g,
  'MS': /^[7][9][0-9]{3}[0-9]{3}$/g,
  'MG': /^[3][0-9]{4}[0-9]{3}$/g,
  'MT': /^[7][8][8][0-9]{2}[0-9]{3}$/g,
  'AC': /^[6][9]{2}[0-9]{2}[0-9]{3}$/g,
  'AL': /^[5][7][0-9]{3}[0-9]{3}$/g,
  'AM': /^[6][9][0-8][0-9]{2}[0-9]{3}$/g,
  'AP': /^[6][89][9][0-9]{2}[0-9]{3}$/g,
  'BA': /^[4][0-8][0-9]{3}[0-9]{3}$/g,
  'CE': /^[6][0-3][0-9]{3}[0-9]{3}$/g,
  'DF': /^[7][0-3][0-6][0-9]{2}[0-9]{3}$/g,
  'ES': /^[2][9][0-9]{3}[0-9]{3}$/g,
  'GO': /^[7][3-6][7-9][0-9]{2}[0-9]{3}$/g,
  'MA': /^[6][5][0-9]{3}[0-9]{3}$/g,
  'PA': /^[6][6-8][0-8][0-9]{2}[0-9]{3}$/g,
  'PB': /^[5][8][0-9]{3}[0-9]{3}$/g,
  'PE': /^[5][0-6][0-9]{2}[0-9]{3}$/g,
  'PI': /^[6][4][0-9]{3}[0-9]{3}$/g,
  'PR': /^[8][0-7][0-9]{3}[0-9]{3}$/g,
  'RN': /^[5][9][0-9]{3}[0-9]{3}$/g,
  'RO': /^[7][8][9][0-9]{2}[0-9]{3}$/g,
  'RR': /^[6][9][3][0-9]{2}[0-9]{3}$/g,
  'RS': /^[9][0-9]{4}[0-9]{3}$/g,
  'SC': /^[8][89][0-9]{3}[0-9]{3}$/g,
  'SE': /^[4][9][0-9]{3}[0-9]{3}$/g,
  'TO': /^[7][7][0-9]{3}[0-9]{3}$/g,
}

export function validate_cep(cep: string) {
  const cepClean = cep.replace(/[^\d]+/g, '');
  const exp = /\d{2}\.\d{3}\-\d{3}/;
  if (!exp.test(cep) && cepClean.length !== 8) {
    return false;
  }
  return true;
}

export function cep_ranges(cep: string | number) {
  cep = (cep.toString()).replace(/[^\d]+/g, '');
  cep = parseInt(cep, 10);
  const cepString: string = cep.toString();
  const keys = Object.keys(CEPRange);
  let found: any;
  for (let i; i < keys.length; i++) {
    const estado = keys[i];
    const r = new RegExp(CEPRange[estado]).test(cepString);
    if (r) {
      found = r;
      i = keys.length
    }
  }
  if (!found) {
    return false;
  }
  return true;
}




export function validate_certidao(value) {
  let certidao = getAllDigits(value);

  const format = /[0-9]{32}/;
  if (!format.test(certidao)) {
    return false;
  }

  let num = certidao.substring(0, -2);
  let dv = certidao.substring(-2);
  let dv1 = ponderada_certidao(num) % 11;
  dv1 = dv1 > 9 ? 1 : dv1; // se o resto for 10, o DV será 1
  let dv2 = ponderada_certidao(num.toString() + dv1.toString()) % 11;
  dv2 = dv2 > 9 ? 1 : dv2;
  if (dv === dv1.toString() + dv2.toString()) {
    return true;
  }
  return false;
}

function ponderada_certidao(value) {
  let total = 0;
  let multiplicador = 32 - value.length;
  for (let i = 0; i < value.length; i++) {
    total += value[i] * multiplicador;
    multiplicador += 1;
    multiplicador = multiplicador > 10 ? 0 : multiplicador;
  }
  return total;
}

/**
 * 
 * @param chassi 
 */
export function validate_chassi(chassi) {

  // 1 - Possuir o número "0" (ZERO) como 1º dígito.
  const zeroNoPrimeiroDigito = /^0/;
  if (zeroNoPrimeiroDigito.test(chassi)) {
    return false;
  }

  // 2 - Possuir espaço no chassi
  chassi = getAllWords(chassi); // espacoNoChassi
 
  // 3 - Se, a partir do 4º dígito, houver uma repetição consecutiva, por mais de seis vezes, do mesmo dígito 
  // (alfabético ou numérico). Exemplos: 9BW11111119452687 e 9BWZZZ5268AAAAAAA.
  const repeticaoMaisDe6Vezes = /^.{4,}([0-9A-Z])\1{5,}/
  if (repeticaoMaisDe6Vezes.test(chassi)) {
    return false;
  }

  // 4 - Apresente os caracteres "i", "I", "o", "O", "q", "Q".
  const caracteresiIoOqQ = /[iIoOqQ]/;
  if (caracteresiIoOqQ.test(chassi)) {
    return false;
  }

  // 5 - Os quatro últimos caracteres devem ser obrigatoriamente numéricos
  const ultimos4Numericos = /[0-9]{4}$/;
  if (!ultimos4Numericos.test(chassi)) {
    return false;
  }

  // 6 - Se possuir número de dígitos diferente de 17 (alfanuméricos). 
  if (chassi.length > 17) {
    return false;
  }

  return true;
}

function validate_cnae(number) {
  return true;
}

export function validate_cnh(value) {
  value = getAllDigits(value);
  var char1 = value.charAt(0);
  if (value.replace(/[^\d]/g, '').length !== 11 || char1.repeat(11) === value) {
    return false;
}
  const check = create_cnh(value);

  return value.substr(-2) == check;
}

export function validate_cnpj(cnpj: any) {
  cnpj = cnpj.replace(/[^\d]+/g, '');
  let tamanho = cnpj.length - 2
  const digitos = cnpj.substring(tamanho);
  const resultados = create_cnpj(cnpj);
  if (resultados[0] !== parseInt(digitos.charAt(0), 10)) {
    return false;
  }

  if (resultados[1] !== parseInt(digitos.charAt(1), 10)) {
    return false;
  }
  return true;
}


// http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
export function validate_cpf(strCPF: any) {
  strCPF = strCPF.replace(/[^\d]+/g, '');
  if (strCPF.length !== 11) {
    return false;
  }
  const restos = create_cpf(strCPF);

  if (restos[0] !== parseInt(strCPF.substring(9, 10), 10)) {
    return false;
  }

  if (restos[1] !== parseInt(strCPF.substring(10, 11), 10)) {
    return false;
  }
  return true;
}


function validate_cpfcnpj(number) {
  return true;
}

export function validate_cns(value) {
  const cns = getAllDigits(value);
  const definitivo = /[1-2][0-9]{10}00[0-1][0-9]/; // começam com 1 ou 2
  const provisorio = /[7-9][0-9]{14}/;              // começam com 7,8 ou 9
  if (!definitivo.test(cns) && !provisorio.test(cns)) {
    return false;
  }

  let soma = 0;
  for (let i = 0; i < cns.length; i++) {
    soma += parseInt(cns[i]) * (15 - i);
  }

  return soma % 11 == 0;
}


export function validate_creditcard(value) {

}

export function validate_currency(currency: string | number) {
  if (typeof currency === 'number') {
    return true;
  }
  const regex = /^(R\$|R\$ )?((\d{1,3})(?:.[0-9]{3}){0,1}|(\d{1})(?:.[0-9]{3}){0,2}|(\d{1,7}))(\,\d{1,2})?$/g;
  return regex.test(currency);
}


function validate_date(number) {
  return true;
}

export function validate_ect(number) {
  number = getAllDigits(number);
  if (number.length > 9) {
    return false
  }

  const nodigit = number.substr(0, number.length - 1);
  const dg = create_ect(nodigit);

  if (parseInt(number[number.length - 1]) === dg) {
    return true;
  }
  return false;
}


export function validate_iptu(iptu: string) {
  let iptuClean = iptu.replace(/\./g, '');
  iptuClean = iptuClean.replace(/-/g, '');
  const exp = /[a-z]{2}\-\d{2}\.\d{3}\.\d{3}/;
  const expClean = /[a-z]{2}\d{8}/;
  const state = iptu.substr(0, 2).toUpperCase();

  if (!exp.test(iptu) && !expClean.test(iptuClean) && !(state in CEPRange)) {
    return false;
  }
  if (IPTU[state]) {
    const validateState = IPTU[state];
    return validateState(iptu);
  }
  return true;
}

export function validate_number(number: string) {
  const regex = /^\d+(?:\.\d{0,2})$/;
  return regex.test(number);
}


export function validate_percentage(percentage: string) {
  const regex = /^\d+(?:\.\d{0,2})$/;
  return regex.test(percentage);
}


export function validate_processo(processo: any) {
  let processoClean = processo.replace(/\./g, '');
  processoClean = processoClean.replace(/\-/g, '');
  const exp = /\d{7}\-\d{2}\.\d{4}\.\w{3}\.\d{4}/;
  const expClean = /\d{13}\w{3}\d{4}/;
  if (!exp.test(processo) && !expClean.test(processoClean)) {
    return false;
  }
  let processoValidado = create_processo(processo);
  if (processoClean !== getAllDigits(processoValidado)) {
    return false;
  }
  return true;
}


export function validate_pispasep(number: string) {

  number = getAllDigits(number);
  let nis = fillString(number, 11, '0');

  const regex = /\d{11}/; // /^\d{3}\.\d{5}\.\d{2}\-\d{1}$/;
  if (!regex.test(nis)) {
    return false;
  }
  let d;
  let p = 2, c = 9;
  for (d = 0; c >= 0; c-- , (p < 9) ? p++ : p = 2) {
    d += nis[c] * p;
  }
  return (nis[10] == (((10 * d) % 11) % 10));
}


export function validate_renavam(renavam: any) {
  let renavamClean = renavam.replace(/\./g, '');
  renavamClean = renavamClean.replace(/\-/g, '');
  const dv = create_renavam(renavam);
  const tam = renavam.length;
  const digitos = renavam.substr(tam - 1, 1);
  if (digitos.charCodeAt(0) - 48 === dv) {
    return true;
  } else {
    return false;
  }
}



export function validate_rg(rg: string) {
  let rgClean = rg.replace(/\./g, '');
  rgClean = rgClean.replace(/-/g, '');
  const exp = /[a-z]{2}\-\d{2}\.\d{3}\.\d{3}/;
  const expClean = /[a-z]{2}\d{8}/;
  const state = rg.substr(0, 2).toUpperCase();

  if (!exp.test(rg) && !expClean.test(rgClean) && !(state in CEPRange)) {
    return false;
  }
  if (RG[state]) {
    const validateState = RG[state];
    return validateState(rg);
  }
  return true;
}

export function validate_sped(sped: string) {

}

export function validate_telefone(tel: any) {
  const telClean = tel.replace(/[^\d]+/g, '');
  tel = tel.replace(/_/g, '');
  if (!(telClean.length === 10 || telClean.length === 11)) {
    return false;
  }
  if (telClean[0] == 0 || telClean[2] == 0) {
    return false;
  }
  return true;
}

export function validate_time(time: string | number) {
  const expression = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
  const value = time.toString();
  return expression.test(value);
}

export function validate_titulo(titulo: any) {
  const tituloClean = titulo.replace(/\./g, '');
  const exp = /\d{4}\.\d{4}\.\d{4}/;
  const expClean = /\d{4}\d{4}\d{4}/;
  if (!exp.test(tituloClean) && !expClean.test(tituloClean)) {
    return false;
  }

  const tam = tituloClean.length;

  let dig;
  try {
    dig = create_titulo_atual(tituloClean);
    // const noDv = tituloClean.substr(0, tam - 2);
    // dig = create_titulo(noDv);
  } catch (e) {
    console.error(e)
    return false;
  }

  const digitos = tituloClean.substr(tam - 2, 2);
  if (digitos === dig) {
    return true;
  } else {
    return false;
  }
}

export const validateBr = {
  address: validate_address,
  bankaccount: validate_bankaccount,
  celular: validate_celular,
  cep: validate_cep,
  certidao: validate_certidao,
  chassi: validate_chassi,
  cnae: validate_cnae,
  cnh: validate_cnh,
  cnpj: validate_cnpj,
  cns: validate_cns,
  cpf: validate_cpf,
  cpfcnpj: validate_cpfcnpj,
  creditcard: validate_creditcard,
  currency: validate_currency,
  date: validate_date,
  ect: validate_ect,
  inscricaoestadual: validate_inscricaoestadual,
  iptu: validate_iptu,
  number: validate_number,
  percentage: validate_percentage,
  pispasep: validate_pispasep,
  placa: validate_placa,
  processo: validate_processo,
  renavam: validate_renavam,
  rg: validate_rg,
  sped: validate_sped,
  telefone: validate_telefone,
  time: validate_time,
  titulo: validate_titulo
};