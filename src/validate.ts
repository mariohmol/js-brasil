import { getAllDigits, fillString, getAllWords } from './utils';
import { BigObject } from './interfaces';
import { validate_inscricaoestadual } from './inscricaoestadual';
import { validate_placa } from './placa';
import {
  create_cnpj, create_cpf,
  create_renavam, create_ect, create_processo, create_titulo_atual, create_cnh, create_certidao, create_aih, create_pispasep, create_cnhespelho, create_renachestadual, create_renachseguranca
} from './create';
import RG from './rg';
import { validate_iptu } from './iptu';
import { ESTADOS_SIGLA } from './estados';


export function validate_aih(aih: string) {
  const aihClean = aih.replace(/[^\d]+/g, '');
  const dvOriginal = aihClean.substr(-1);
  const dv = create_aih(aihClean);
  return dvOriginal === dv;
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

export const CEPRange: BigObject<RegExp> = {
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
  let found: any;
  for (let estado in CEPRange) {
    const v = CEPRange[estado];
    const r = new RegExp(v).test(cepString);
    if (r) {
      found = r;
      return true;
    }
  }

  if (!found) {
    return false;
  }
  return true;
}




export function validate_certidao(value: string) {
  let certidao = getAllDigits(value);

  const format = /[0-9]{32}/;
  if (!format.test(certidao)) {
    return false;
  }

  let dvOriginal = certidao.substr(-2);
  const dv = create_certidao(certidao);

  return dv === dvOriginal;
}


/**
 * 
 * @param chassi 
 */
export function validate_chassi(chassi: string) {

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

function validate_cnae(number: any) {
  if (!number) return true;
  return false
}

/**
 * 
 * II - Número do Espelho da CNH - segundo número de identificação nacional, 
 * que será formado por 9 (nove) caracteres mais 1 (um) dígito verificador de segurança, 
 * autorizado e controlado pelo DENATRAN, e identificará cada espelho de CNH expedida.
 * https://www.gov.br/infraestrutura/pt-br/assuntos/transito/conteudo-denatran/resolucoes-contran
 * https://www.gov.br/infraestrutura/pt-br/assuntos/transito/conteudo-contran/resolucoes/resolucao5112014.pdf
 * 598: https://www.gov.br/infraestrutura/pt-br/assuntos/transito/conteudo-contran/resolucoes/resolucao59820162.pdf
 * @param value 
 */
export function validate_cnhespelho(value: string) {
  value = value.replace(/[^\d]/g, '')
  if (value.length !== 10) {
    return false
  }

  let check = create_cnhespelho(value)
  if (check === '0' || check === '1') check = '0'
  return value.substr(-1) == check
}

/**
 * 
 * III – Número do formulário RENACH - número de identificação
* estadual, documento de coleta de dados do candidato/condutor gerado a cada serviço,
* composto, obrigatoriamente, por 11 (onze) caracteres, sendo as duas primeiras
* posições formadas pela sigla da Unidade de Federação expedidora, facultada a
* utilização da última posição como dígito verificador de segurança.
*  a) O número do formulário RENACH identificará a Unidade da
* Federação onde o condutor foi habilitado ou realizou alterações de dados no seu
* cadastro pela última vez.
*  b) O Formulário RENACH que dá origem às informações na
* BINCO e autorização para a impressão da CNH deverá ficar arquivado em seg
* 598 - https://www.gov.br/infraestrutura/pt-br/assuntos/transito/conteudo-contran/resolucoes/resolucao59820162.pdf
* 718 - https://www.gov.br/infraestrutura/pt-br/assuntos/transito/conteudo-contran/resolucoes/resolucao7182017.pdf
* @param value 
 */
export function validate_renachestadual(value: string) {
  const state = value.substr(0, 2).toLowerCase()
  if (!ESTADOS_SIGLA.includes(state)) {
    return false
  }

  let digits = value.substr(2)
  digits = digits.replace(/[^\d]/g, '');
  if (digits.length !== 9) {
    return false;
  }
  let check = create_renachestadual(value)
  if (check === '0' || check === '1') check = '0'
  return value.substr(-1) == check;
}

export function validate_renachseguranca(value: string) {
  value = value.replace(/[^\d]/g, '');

  if (value.length !== 11) {
    return false;
  }

  let check = create_renachseguranca(value)
  return value.substr(-1) == check;
}

/**
 * BINCO
 * I – o primeiro número de identificação nacional – Registro Nacional, 
 * será gerado pelo sistema informatizado da Base Índice Nacional de Condutores – 
 * BINCO, composto de 9 (nove) caracteres mais 2 (dois) dígitos verificadores de 
 * segurança, sendo único para cada condutor e o acompanhará durante toda a 
 * sua existência como condutor, não sendo permitida a sua reutilização para 
 * outro condutor.
 * @param value 
 * @returns 
 */
export function validate_cnh(value: string) {
  value = value.toString().replace(/[^\d]/g, '');
  if (value.length !== 11) {
    return false;
  }
  let check = create_cnh(value);
  return value.substr(-2) == check;
}

export function validate_cnpj(cnpj: any) {
  // Valida se tem apenas número, - ou .
  let precisaFicarVazio = cnpj.replace(/^[0-9./-]*$/gm, '')
  if (precisaFicarVazio != '')
    return false

  cnpj = cnpj.replace(/[^\d]+/g, '');
  let tamanho = cnpj.length - 2
  const digitos = cnpj.substring(tamanho);
  const resultados = create_cnpj(cnpj);
  if (!resultados ||
    resultados[0] !== parseInt(digitos.charAt(0), 10) ||
    resultados[1] !== parseInt(digitos.charAt(1), 10)
  ) {
    return false
  }

  return true;
}

function validate_contabanco(number: any) {
  if (!number) return false
  return true;
}

/**
 * Referencia: http://www.receita.fazenda.gov.br/aplicacoes/atcta/funcoes.js
 * @param strCPF 
 * @returns 
 */
export function validate_cpf(strCPF: any) {
  // Valida se tem apenas número, - ou .
  let precisaFicarVazio = strCPF.replace(/^[0-9.-]*$/gm, '')
  if (precisaFicarVazio != '')
    return false

  strCPF = strCPF.replace(/[^\d]+/g, '');
  if (strCPF.length !== 11) {
    return false;
  }

  //verifica se todos os numeros sao iguais
  const expIguais = /^(?!.*(\d)\1{10}).*$/;
  if (!strCPF.match(expIguais)) {
    return false;
  }

  // valida digito verificados
  const restos = create_cpf(strCPF);
  if (!restos || restos != strCPF.substr(-2)) {
    return false;
  }
  return true;
}

function validate_cpfcnpj(number: any) {
  return validate_cpf(number) || validate_cnpj(number);
}

export function validate_cns(value: string) {
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


export function validate_cartaocredito(input: string | number) {
  let value: string;
  if (typeof input == 'string') {
    value = getAllDigits(input);
  } else {
    value = input.toString();
  }

  const number = value.slice(0, 16);
  const mes = parseInt(value.slice(16, 18));
  const ano = parseInt(value.slice(18, 20));
  const cvv = value.slice(20, 23);

  const d = new Date();
  const anoAtual = (d.getFullYear() - 2000);
  if (ano && ano < anoAtual) {
    return false;
  }
  if (mes && mes < d.getMonth() + 1 && ano === anoAtual) {
    return false;
  }

  if (cvv) {
    const validcvv = validate_cvv(cvv);
    if (validcvv.isValid === false) {
      return false;
    }
  }

  let found;
  Object.keys(creditCardValidator).forEach(key => {
    if (creditCardValidator[key].test(number)) {
      found = key;
    }
  });
  return !!found;

}

function validate_cvv(value: string | any[], maxLength: any = 3) {
  maxLength = maxLength instanceof Array ? maxLength : [maxLength];

  if (typeof value !== 'string') {
    return { isValid: false, isPotentiallyValid: false };
  }
  if (!/^\d*$/.test(value)) {
    return { isValid: false, isPotentiallyValid: false };
  }

  var i = 0;
  const max = value.length;
  for (; i < maxLength.length; i++) {
    if (max === maxLength[i]) {
      return { isValid: true, isPotentiallyValid: true };
    }
  }

  if (value.length < Math.min.apply(null, maxLength)) {
    return { isValid: false, isPotentiallyValid: true };
  }

  var maximum = maxLength;
  var i = 0;

  for (; i < maxLength.length; i++) {
    maximum = maxLength[i] > maximum ? maxLength[i] : maximum;
  }

  if (value.length > maximum) {
    return { isValid: false, isPotentiallyValid: false };
  }

  return { isValid: true, isPotentiallyValid: true };
}


/**
 *     A hash of valid CC abbreviations and regular expressions
    mc: Mastercard
    ec: Eurocard
    vi: Visa
    ax: American Express
    dc: Diners Club
    bl: Carte Blanch
    di: Discover
    jcb: JCB
    er: Enroute
*/
export const creditCardValidator: BigObject<RegExp> = {
  'mc': /5[1-5][0-9]{14}/,
  'ec': /5[1-5][0-9]{14}/,
  'vi': /4(?:[0-9]{12}|[0-9]{15})/,
  'ax': /3[47][0-9]{13}/,
  'dc': /3(?:0[0-5][0-9]{11}|[68][0-9]{12})/,
  'bl': /3(?:0[0-5][0-9]{11}|[68][0-9]{12})/,
  'di': /6011[0-9]{12}/,
  'jcb': /(?:3[0-9]{15}|(2131|1800)[0-9]{11})/,
  'er': /2(?:014|149)[0-9]{11}/
};


export function validate_currency(currency: string | number) {
  if (typeof currency === 'number') {
    return true;
  }
  const regex = /^(R\$|R\$ )?(-)?(?!0(\.)?00)\d{1,3}((\.)?\d{3})*(,\d\d)?$/g;
  return regex.test(currency);
}


function validate_data(value: string | null) {
  if (!value) {
    return false;
  }
  const values = value.split('/');
  if (values.length !== 3) {
    return false;
  }
  const testData: Date = new Date(values[1] + '/' + values[0] + '/' + values[2])
  if (!testData.getTime()) {
    return false;
  }
  // if (parseInt(values[0]) > 31 || parseInt(values[1]) > 12 || parseInt(values[2]) < 1000) return false;
  return true;
}


function validate_date(value: string | null) {
  if (!value || value.length < 10) {
    return false;
  }
  const testData: Date = new Date(value)
  if (!testData.getTime()) {
    return false;
  }
  return true;
}

export function validate_datetime(time: string | number, options: any = {}) {
  if (!time) {
    return false;
  }
  time = time.toString();
  const values = time.split(' ');
  if (validate_date(values[0]) && validate_time(values[1], options)) {
    return true;
  }
  return false;
}


export function validate_datahora(time: string | number, options: any = {}) {
  if (!time) {
    return false;
  }
  time = time.toString();
  const values = time.split(' ');
  if (validate_data(values[0]) && validate_time(values[1], options)) {
    return true;
  }
  return false;
}

export function validate_ect(number: string) {
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

function validate_email(email: any) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(String(email).toLowerCase())
}

function validate_endereco(number: any) {
  if (!number) return false
  return true
}

export function validate_number(number: string) {
  if (number.split(',').length > 2) {
    return false
  }
  const regexDecimal = /^\d+(?:\.\d{0,2})$/;
  const regex = /^[0-9]{0,10}[,]{1,1}[0-9]{0,4}/;
  const regexNumero = /^[0-9]{0,10}/;
  return regexDecimal.test(number) || regex.test(number) || regexNumero.test(number);
}


export function validate_porcentagem(porcentagem: string) {
  porcentagem = porcentagem.split('%')[0];
  return validate_number(porcentagem);
}


export function validate_processo(processo: any) {
  let processoClean = processo.replace(/\./g, '');
  processoClean = processoClean.replace(/\-/g, '');
  // const exp = /\d{7}\-\d{2}\.\d{4}\.\w{3}\.\d{4}/;
  // const expClean = /\d{13}\w{3}\d{4}/;
  // if (!exp.test(processo) && !expClean.test(processoClean)) {
  //   return false;
  // }
  let processoValidado = create_processo(processo);
  if (parseInt(processoClean) !== parseInt(getAllDigits(processoValidado))) {
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

  const digit = create_pispasep(number);
  return nis[10].toString() == digit.toString();
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
  const validateState = RG[state];
  if (validateState) {
    return validateState(rg);
  }
  return true;
}

function validate_senha(value: string, options: any = {}) {
  let finalregex = '^';
  //   ^	The password string will start this way
  // (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
  if (options.lowercase !== false) {
    finalregex = finalregex + '(?=.*[a-z])';
  }
  // (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
  if (options.uppercase !== false) {
    finalregex = finalregex + '(?=.*[A-Z])';
  }
  // (?=.*[0-9])	The string must contain at least 1 numeric character
  if (options.numeric !== false) {
    finalregex = finalregex + '(?=.*[0-9])';
  }
  // (?=.*[!@#\$%\^&\*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
  if (options.numeric !== false) {
    finalregex = finalregex + '(?=.*[!@#\\$%\\^&\\*])';
  }
  // (?=.{8,})	The string must be eight characters or longer
  if (!options.size) {
    options.size = 8;
  }

  finalregex = finalregex + `(?=.{${options.size},})`;

  const regex = new RegExp(finalregex);
  return regex.test(value);
}


function validate_site(value: any) {
  var re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/g;
  return re.test(String(value).toLowerCase());
}

export function validate_sped(sped: string) {
  if (!sped) return false
  return true
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

export function validate_time(time: string | number, options: any = {}) {
  const value = time.toString();
  if (options.diario) {
    const expression = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
    return expression.test(value);
  } else {
    const expression = /^([0-9]?[0-9]):([0-5][0-9])(:[0-5][0-9])?$/;
    return expression.test(value);
  }

}

export function validate_titulo(titulo: any) {
  if (!titulo) {
    return false;
  }
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
    return false;
  }

  const digitos = tituloClean.substr(tam - 2, 2);
  if (digitos === dig) {
    return true;
  } else {
    return false;
  }
}

function validate_username(value: any) {
  var re = /^[a-z0-9_-]{3,16}$/igm;
  return re.test(String(value).toLowerCase());
}

export const validateBr: BigObject<Function> = {
  aih: validate_aih,
  cartaocredito: validate_cartaocredito,
  celular: validate_celular,
  cep: validate_cep,
  certidao: validate_certidao,
  chassi: validate_chassi,
  cnae: validate_cnae,
  cnh: validate_cnh,
  cnhespelho: validate_cnhespelho,
  renachestadual: validate_renachestadual,
  renachseguranca: validate_renachseguranca,
  cnpj: validate_cnpj,
  cns: validate_cns,
  contabanco: validate_contabanco,
  cpf: validate_cpf,
  cpfcnpj: validate_cpfcnpj,
  currency: validate_currency,
  data: validate_data,
  date: validate_date,
  datetime: validate_datetime,
  datahora: validate_datahora,
  ect: validate_ect,
  email: validate_email,
  endereco: validate_endereco,
  inscricaoestadual: validate_inscricaoestadual,
  iptu: validate_iptu,
  number: validate_number,
  porcentagem: validate_porcentagem,
  pispasep: validate_pispasep,
  placa: validate_placa,
  processo: validate_processo,
  renavam: validate_renavam,
  rg: validate_rg,
  senha: validate_senha,
  site: validate_site,
  sped: validate_sped,
  telefone: validate_telefone,
  time: validate_time,
  titulo: validate_titulo,
  username: validate_username
};
