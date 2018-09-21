
// http://www.geradorcnpj.com/javascript-validar-cnpj.htm
/*
//if (val.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/) != null) {
*/
export function validate_cnpj(cnpj) {
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

export function create_cnpj(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, '');

  if (cnpj === '') {
    return false;
  }

  if (cnpj.length !== 14) {
    return false;
  }

  // Elimina CNPJs invalidos conhecidos
  if (cnpj === '00000000000000' ||
    cnpj === '11111111111111' ||
    cnpj === '22222222222222' ||
    cnpj === '33333333333333' ||
    cnpj === '44444444444444' ||
    cnpj === '55555555555555' ||
    cnpj === '66666666666666' ||
    cnpj === '77777777777777' ||
    cnpj === '88888888888888' ||
    cnpj === '99999999999999') {
    return false;
  }

  // Valida DVs
  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0, tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }

  }
  const resultados = [0, 0];
  resultados[0] = soma % 11 < 2 ? 0 : 11 - soma % 11;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  resultados[1] = soma % 11 < 2 ? 0 : 11 - soma % 11;
  return resultados;
}

// http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
export function validate_cpf(strCPF) {
  strCPF = strCPF.replace(/[^\d]+/g, '');
  const restos = create_cpf(strCPF);

  if (restos[0] !== parseInt(strCPF.substring(9, 10), 10)) {
    return false;
  }

  if (restos[1] !== parseInt(strCPF.substring(10, 11), 10)) {
    return false;
  }
  return true;
}

export function create_cpf(strCPF) {
  strCPF = strCPF.replace(/[^\d]+/g, '');
  let soma;
  let resto;
  soma = 0;
  if (strCPF === '00000000000') {
    return false;
  }

  for (let i = 1; i <= 9; i++) {
    // tslint:disable-next-line:radix
    soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  }
  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) {
    resto = 0;
  }

  const restos = [];
  restos.push(resto);

  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma = soma + parseInt(strCPF.substring(i - 1, i), 10) * (12 - i);
  }
  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) {
    resto = 0;
  }

  restos.push(resto);
  return restos;
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

export function valida_cep(cep) {
  const cepClean = cep.replace(/[^\d]+/g, '');
  const exp = /\d{2}\.\d{3}\-\d{3}/;
  if (!exp.test(cep) && cepClean.length !== 8) {
    return false;
  }
  return true;
}

export function cep_ranges(cep) {
  cep = cep.replace(/[^\d]+/g, '');
  cep = parseInt(cep, 10);

  const found = Object.keys(CEPRange).find(estado => {
    const r = new RegExp(CEPRange[estado]).test(cep);
    if (r) {
      return true;
    }
  })
  if (!found) {
    return false;
  }
  return true;
}


export function validate_telefone(tel) {
  const telClean = tel.replace(/[^\d]+/g, '');
  tel = tel.replace(/_/g, '');
  if(!(telClean.length === 10)){
    return false;
  }
  if(telClean[0]==0 || telClean[2]==0){
    return false;
  }
  // const exp = /\(\d{2}\)\ \d{4}\-\d{4}/;
  // const exp5 = /\(\d{2}\)\ \d{5}\-\d{4}/;
  // if (!exp.test(tel) && !exp5.test(tel)) {
  //   return false;
  // }
  return true;
}


export function validate_celular(cel) {
  const celClean = cel.replace(/[^\d]+/g, '');
  cel = cel.replace(/_/g, '');
  if(!(celClean.length === 11)){
    return false;
  }
  if(celClean[0]==0 || celClean[2]==0){
    return false;
  }
  // const exp = /\(\d{2}\)\ \d{4}\-\d{4}/;
  // const exp5 = /\(\d{2}\)\ \d{5}\-\d{4}/;
  // if (!exp.test(tel) && !exp5.test(tel)) {
  //   return false;
  // }
  return true;
}


export function validate_rg(rg) {
  let rgClean = rg.replace(/\./g, '');
  rgClean = rgClean.replace(/-/g, '');
  const exp = /[a-z]{2}\-\d{2}\.\d{3}\.\d{3}/;
  const expClean = /[a-z]{2}\d{8}/;
  const state = rg.substr(0, 2).toUpperCase();

  if (!exp.test(rg) && !expClean.test(rgClean) && !(state in CEPRange)) {
    return false;
  }
  return true;
}

export function validate_time(time) {
  const expression = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
  return expression.test(time.value);
}

export function validate_currency(currency) {
  const regex = /^\d+(?:\.\d{0,2})$/;
  return regex.test(currency);
}

export function validate_percentage(percentage) {
  const regex = /^\d+(?:\.\d{0,2})$/;
  return regex.test(percentage);
}

export function validate_placa(placa) {
  const placaClean = placa.replace(/-/g, '');
  const exp = /[A-Za-z]{3}\-\d{4}/;
  const expClean = /[A-Za-z]{3}\d{4}/;
  // const letters = placa.substr(0, 3).toUpperCase();

  if (!exp.test(placa) && !expClean.test(placaClean)) {
    return false;
  }
  return true;
}

export function validate_titulo(titulo) {
  const tituloClean = titulo.replace(/\./g, '');
  const exp = /\d{4}\.\d{4}\.\d{4}/;
  const expClean = /\d{4}\d{4}\d{4}/;
  if (!exp.test(tituloClean) && !expClean.test(tituloClean)) {
    return false;
  }
  return validaTituloVerificador(titulo);
}

function validaTituloVerificador(titulo) {
  const {dig1, dig2} =create_titulo(titulo);
  const tam = titulo.length;
  const digitos = titulo.substr(tam - 2, 2);
  if ((digitos.charCodeAt(0) - 48 === dig1) && (digitos.charCodeAt(1) - 48 === dig2)) {
    return true;
  } else {
    return false;
  }
}

export function create_titulo(titulo) {
  const tit = titulo;
  let dig1 = 0;
  let dig2 = 0;
  const tam = tit.length;
  const estado = tit.substr(tam - 4, 2);
  titulo = tit.substr(0, tam - 2);
  titulo = '000000000000' + titulo;
  titulo = titulo.substr(titulo.length - 11, titulo.length - 1);
  const exce = (estado === '01') || (estado === '02');
  dig1 = (titulo.charCodeAt(0) - 48) * 2 + (titulo.charCodeAt(1) - 48) * 9 + (titulo.charCodeAt(2) - 48) * 8 +
    (titulo.charCodeAt(3) - 48) * 7 + (titulo.charCodeAt(4) - 48) * 6 + (titulo.charCodeAt(5) - 48) * 5 +
    (titulo.charCodeAt(6) - 48) * 4 + (titulo.charCodeAt(7) - 48) * 3 + (titulo.charCodeAt(8) - 48) * 2;
  let resto = (dig1 % 11);
  if (resto === 0) {
    if (exce) {
      dig1 = 1;
    } else {
      dig1 = 0;
    }
  } else {
    if (resto === 1) {
      dig1 = 0;
    } else {
      dig1 = 11 - resto;
    }
  }
  dig2 = (titulo.charCodeAt(9) - 48) * 4 + (titulo.charCodeAt(10) - 48) * 3 + dig1 * 2;
  resto = (dig2 % 11);
  if (resto === 0) {
    if (exce) {
      dig2 = 1;
    } else {
      dig2 = 0;
    }
  } else {
    if (resto === 1) {
      dig2 = 0;
    } else {
      dig2 = 11 - resto;
    }
  }
  return {dig1, dig2};
}
