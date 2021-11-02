import { ESTADOS_SIGLA } from './estados';
import { getAllDigits, fillString, modulo11Custom } from './utils';

/**
 * 
 * @param uf - UF do número da guia. Ex: 35(SP), 81(PE)
 * @param ano - ANO do número da guia. Ex: 2018, 2019
 * @param tipo - TIPO da guia. Aih = 1, APAC = 2
 */
export function create_aih(value: string | number | any[]) {
  value = getAllDigits(value.toString());
  if (value.length > 12) {
    value = value.toString().substr(0, value.length - 1);
  }
  const cod = parseInt(value);
  const calc = Math.ceil(cod - (cod / 11));
  const digito = calc.toString().substr(-1);
  return digito;
}

export function create_certidao(value: string) {

  if (value.length > 30) {
    value = value.substring(0, value.length - 2);
  }
  let b1 = parseInt(value.slice(29));
  let b2 = parseInt(value.slice(28, 29));
  let b3 = parseInt(value.slice(27, 28));
  let b4 = parseInt(value.slice(26, 27));
  let b5 = parseInt(value.slice(25, 26));
  let b6 = parseInt(value.slice(24, 25));
  let b7 = parseInt(value.slice(23, 24));
  let b8 = parseInt(value.slice(22, 23));
  let b9 = parseInt(value.slice(21, 22));
  let b10 = parseInt(value.slice(20, 21));
  let b11 = parseInt(value.slice(19, 20));
  let b12 = parseInt(value.slice(18, 19));
  let b13 = parseInt(value.slice(17, 18));
  let b14 = parseInt(value.slice(16, 17));
  let b15 = parseInt(value.slice(15, 16));
  let b16 = parseInt(value.slice(14, 15));
  let b17 = parseInt(value.slice(13, 14));
  let b18 = parseInt(value.slice(12, 13));
  let b19 = parseInt(value.slice(11, 12));
  let b20 = parseInt(value.slice(10, 11));
  let b21 = parseInt(value.slice(9, 10));
  let b22 = parseInt(value.slice(8, 9));
  let b23 = parseInt(value.slice(7, 8));
  let b24 = parseInt(value.slice(6, 7));
  let b25 = parseInt(value.slice(5, 6));
  let b26 = parseInt(value.slice(4, 5));
  let b27 = parseInt(value.slice(3, 4));
  let b28 = parseInt(value.slice(2, 3));
  let b29 = parseInt(value.slice(1, 2));
  let b30 = parseInt(value.slice(0, 1));

  let certPriDig = (b1 * 9 + b2 * 8 + b3 * 7 + b4 * 6 + b5 * 5 + b6 * 4 + b7 * 3 + b8 * 2 + b9 * 1 + b10 * 0 + b11 * 10 + b12 * 9 + b13 * 8 + b14 * 7 + b15 * 6 + b16 * 5 + b17 * 4 + b18 * 3 + b19 * 2 + b20 * 1 + b21 * 0 + b22 * 10 + b23 * 9 + b24 * 8 + b25 * 7 + b26 * 6 + b27 * 5 + b28 * 4 + b29 * 3 + b30 * 2) % 11;
  if (certPriDig == 10) { certPriDig = 1; }
  let certSegDig = (certPriDig * 9 + b1 * 8 + b2 * 7 + b3 * 6 + b4 * 5 + b5 * 4 + b6 * 3 + b7 * 2 + b8 * 1 + b9 * 0 + b10 * 10 + b11 * 9 + b12 * 8 + b13 * 7 + b14 * 6 + b15 * 5 + b16 * 4 + b17 * 3 + b18 * 2 + b19 * 1 + b20 * 0 + b21 * 10 + b22 * 9 + b23 * 8 + b24 * 7 + b25 * 6 + b26 * 5 + b27 * 4 + b28 * 3 + b29 * 2 + b30 * 1) % 11;
  if (certSegDig == 10) { certSegDig = 1; }
  let certDV: any = certPriDig * 10 + certSegDig;
  if (certDV == 0) { certDV = "00"; }
  if (certDV > 0 && certDV < 10) { certDV = "0" + certDV; }

  return certDV.toString();
}

export function create_cnhespelho(value: string) {
  let v1 = modulo11Custom(value.substr(0, value.length - 1), 1, 8, false);
  return v1
}

export function create_renachestadual(value: string) {

  const state = value.substr(0, 2).toLowerCase()
  if (!ESTADOS_SIGLA.includes(state)) {
    return false
  }

  let digits = value.substr(2)
  digits = digits.replace(/[^\d]/g, '');
  if (digits.length !== 9) {
    return false;
  }

  let v1 = modulo11Custom(digits.substr(0, digits.length - 1), 1, 11);
  return '' + v1
}

/**
 * 
 * @param value 
 * @returns 
 */
export function create_renachseguranca(value: string) {
  value = value.replace(/[^\d]+/g, '');
  if (value.length !== 11) {
    return false;
  }

  let v1 = modulo11Custom(value.substr(0, value.length - 1), 1, 11);
  return "" + v1;
}

/**
 * Dígito verificador da CNH não é mais o módulo 11 conforme últimas resoluções
 * @param value 
 * @returns 
 */
export function create_cnh(value: string) {
  value = value.replace(/[^\d]+/g, '');

  if (value.length != 11 || value === '0') {
    return false;
  }
  // let v1 = modulo11Custom(value.substr(0, value.length - 2), 2);
  // if (v1 === '10') v1 = '00'
  let v1 = value.substr(-2)
  return v1;
}

export function create_cnpj(cnpj: string) {
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
  let tamanho: number = cnpj.length - 2
  let numeros: any = cnpj.substring(0, tamanho);
  let soma: any = 0;
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

export function create_cns(number: string) {
  number = getAllDigits(number);
  let somaInicial = 0;
  for (let i = 0; i < number.length - 1; i++) {
    somaInicial += parseInt(number[i]) * (15 - i);
  }
  let soma = somaInicial;
  let rest = 0;
  while (soma % 11 !== 0) {
    rest++;
    soma = somaInicial + (rest * 1)
  }
  return number.substr(-2, 1) + rest;
}

export function create_cpf(strCPF: string) {
  strCPF = strCPF.replace(/[^\d]+/g, '');
  if (strCPF === '00000000000') {
    return false;
  }

  // const r1 = modulo11(strCPF.substr(0, strCPF.length - 2))
  // const r2 = modulo11(strCPF.substr(0, strCPF.length - 2) + '' + r1)
  // const restos = [
  //   r1, r2
  // ];

  const restoscustom = modulo11Custom(strCPF.substr(0, strCPF.length - 2), 2, 12);
  return restoscustom
}

export function create_cartaocredito(number: string) {

  // if (number.length > 18) { alert("Erro. A rotina não abrange cartões\ncom mais de 18 dígitos (fora o DV).\nIntroduza 18 dígitos, no máximo."); }

  number = "00000000000000000" + number;
  number = number.slice(number.length - 18);

  let b1 = parseInt(number.slice(17));
  let b2 = parseInt(number.slice(16, 17));
  let b3 = parseInt(number.slice(15, 16));
  let b4 = parseInt(number.slice(14, 15));
  let b5 = parseInt(number.slice(13, 14));
  let b6 = parseInt(number.slice(12, 13));
  let b7 = parseInt(number.slice(11, 12));
  let b8 = parseInt(number.slice(10, 11));
  let b9 = parseInt(number.slice(9, 10));
  let b10 = parseInt(number.slice(8, 9));
  let b11 = parseInt(number.slice(7, 8));
  let b12 = parseInt(number.slice(6, 7));
  let b13 = parseInt(number.slice(5, 6));
  let b14 = parseInt(number.slice(4, 5));
  let b15 = parseInt(number.slice(3, 4));
  let b16 = parseInt(number.slice(2, 3));
  let b17 = parseInt(number.slice(1, 2));
  let b18 = parseInt(number.slice(0, 1));


  let ci17 = b1 * 2; if (ci17 > 9) { ci17 = ci17 - 9; }
  let ci1516 = b3 * 2; if (ci1516 > 9) { ci1516 = ci1516 - 9; }
  let ci1314 = b5 * 2; if (ci1314 > 9) { ci1314 = ci1314 - 9; }
  let ci1112 = b7 * 2; if (ci1112 > 9) { ci1112 = ci1112 - 9; }
  let ci910 = b9 * 2; if (ci910 > 9) { ci910 = ci910 - 9; }
  let ci78 = b11 * 2; if (ci78 > 9) { ci78 = ci78 - 9; }
  let ci56 = b13 * 2; if (ci56 > 9) { ci56 = ci56 - 9; }
  let ci34 = b15 * 2; if (ci34 > 9) { ci34 = ci34 - 9; }
  let ci12 = b17 * 2; if (ci12 > 9) { ci12 = ci12 - 9; }
  let ci1617 = b2;
  let ci1415 = b4;
  let ci1213 = b6;
  let ci1011 = b8;
  let ci89 = b10;
  let ci67 = b12;
  let ci45 = b14;
  let ci23 = b16;
  let ci01 = b18;

  let ccredDig = (ci1617 + ci1415 + ci1213 + ci1011 + ci89 + ci67 + ci45 + ci23 + ci01 + ci17 + ci1516 + ci1314 + ci1112 + ci910 + ci78 + ci56 + ci34 + ci12) % 10;
  ccredDig = 10 - ccredDig; if (ccredDig == 10) { ccredDig = 0; }

  return ccredDig;
}

export function create_ect(number: string) {
  number = getAllDigits(number);
  number = "0000000" + number;
  number = number.slice(number.length - 8);

  let b1 = parseInt(number.slice(7));
  let b2 = parseInt(number.slice(6, 7));
  let b3 = parseInt(number.slice(5, 6));
  let b4 = parseInt(number.slice(4, 5));
  let b5 = parseInt(number.slice(3, 4));
  let b6 = parseInt(number.slice(2, 3));
  let b7 = parseInt(number.slice(1, 2));
  let b8 = parseInt(number.slice(0, 1));

  let regEctDig = (b1 * 7 + b2 * 9 + b3 * 5 + b4 * 3 + b5 * 2 + b6 * 4 + b7 * 6 + b8 * 8) % 11;
  regEctDig = 11 - regEctDig;
  if (regEctDig == 11) { regEctDig = 5; }
  if (regEctDig == 10) { regEctDig = 0; }
  return regEctDig;
}

export function create_pispasep(number: string) {

  number = getAllDigits(number);
  let nis = fillString(number, 11, '0');

  let d;
  let p = 2, c = 9;
  for (d = 0; c >= 0; c--, (p < 9) ? p++ : p = 2) {
    d += parseInt(nis[c]) * p;
  }

  const digit = (((10 * d) % 11) % 10);
  return digit;
}

export function create_renavam(renavam: string) {
  let dig1 = 0;
  while (renavam.length < 11) {
    renavam = '0' + renavam;
  }

  dig1 = (renavam.charCodeAt(0) - 48) * 3 + (renavam.charCodeAt(1) - 48) * 2 + (renavam.charCodeAt(2) - 48) * 9 + (renavam.charCodeAt(3) - 48) * 8 +
    (renavam.charCodeAt(4) - 48) * 7 + (renavam.charCodeAt(5) - 48) * 6 + (renavam.charCodeAt(6) - 48) * 5 +
    (renavam.charCodeAt(7) - 48) * 4 + (renavam.charCodeAt(8) - 48) * 3 + (renavam.charCodeAt(9) - 48) * 2;
  dig1 = dig1 * 10;
  let resto = (dig1 % 11);
  if (resto === 10) {
    return 0;
  } else {
    return resto;
  }
}



/**
 * 
 * Font: http://ghiorzi.org/index.htm
 * @param number 
 */
export function create_processo(number: string) {
  number = getAllDigits(number);
  number = "00000000000000000" + number;
  number = number.slice(number.length - 18);

  let b1 = parseInt(number.slice(0, 1)) * 10000000000;
  let b2 = parseInt(number.slice(1, 2)) * 1000000000;
  let b3 = parseInt(number.slice(2, 3)) * 100000000;
  let b4 = parseInt(number.slice(3, 4)) * 10000000;
  let b5 = parseInt(number.slice(4, 5)) * 1000000;
  let b6 = parseInt(number.slice(5, 6)) * 100000;
  let b7 = parseInt(number.slice(6, 7)) * 10000;
  let b8 = parseInt(number.slice(7, 8)) * 1000;
  let b9 = parseInt(number.slice(8, 9)) * 100;
  let b10 = parseInt(number.slice(9, 10)) * 10;
  let b11 = parseInt(number.slice(10, 11));

  const proc1a11 = b1 + b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9 + b10 + b11;
  const resto1 = proc1a11 % 97;

  let b12 = parseInt(number.slice(11, 12)) * 1000000;
  let b13 = parseInt(number.slice(12, 13)) * 100000;
  let b14 = parseInt(number.slice(13, 14)) * 10000;
  let b15 = parseInt(number.slice(14, 15)) * 1000;
  let b16 = parseInt(number.slice(15, 16)) * 100;
  let b17 = parseInt(number.slice(16, 17)) * 10;
  let b18 = parseInt(number.slice(17));

  const proc12a18 = b12 + b13 + b14 + b15 + b16 + b17 + b18;
  const resto2 = (resto1 * 10000000 * 100 + proc12a18 * 100) % 97;

  let procJudDV: any = 98 - resto2;

  if (procJudDV < 10) {
    procJudDV = "0" + procJudDV;
  }

  let procJudCompl = b1 / 10000 + b2 / 10000 + b3 / 10000 + b4 / 10000 + b5 / 10000 + b6 / 10000 + b7 / 10000 + "-" + procJudDV + "." + b8 / 1000 + b9 / 100 + b10 / 10 + b11 + "." + b12 / 1000000 + "." + b13 / 100000 + b14 / 10000 + "." + b15 / 1000 + b16 / 100 + b17 / 10 + b18;

  procJudCompl = "000000" + procJudCompl;
  const result = procJudCompl.slice(procJudCompl.length - 25);
  return result;
}


export function create_titulo_atual(titulo: string) {
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
  return dig1.toString() + dig2.toString();
}

export function create_titulo(titNum: string) {
  titNum = getAllDigits(titNum);

  if (titNum.length > 11) {
    titNum = titNum.substr(0, 11);
  }

  titNum = "00000000" + titNum;
  titNum = titNum.slice(titNum.length - 11);

  let a1 = parseInt(titNum.slice(10));
  let a2 = parseInt(titNum.slice(9, 10));
  let a3 = parseInt(titNum.slice(8, 9));
  let a4 = parseInt(titNum.slice(7, 8));
  let a5 = parseInt(titNum.slice(6, 7));
  let a6 = parseInt(titNum.slice(5, 6));
  let a7 = parseInt(titNum.slice(4, 5));
  let a8 = parseInt(titNum.slice(3, 4));
  let a9 = parseInt(titNum.slice(2, 3));
  let a10 = parseInt(titNum.slice(1, 2));
  let a11 = parseInt(titNum.slice(0, 1));

  if (a2 * 10 + a1 == 0 || a2 * 10 + a1 > 28) {
    throw new Error("Esse nº é suspeito, porque a identificação da \nUF (últimos 2 dígitos) deve estar entre 01 e 28.");
  }

  let titExcecao1 = 0;
  let titExcecao2 = 0;

  let titPriDig = (a3 * 9 + a4 * 8 + a5 * 7 + a6 * 6 + a7 * 5 + a8 * 4 + a9 * 3 + a10 * 2 + a11 * 9) % 11;
  if (titPriDig == 0) { titExcecao1 = 1; }
  if (titPriDig == 10) { titPriDig = 0; }
  if ((a2 * 10 + a1 == 1 || a2 * 10 + a1 == 2) && (titExcecao1 == 1)) { titPriDig = 1; }

  let titSegDig = (titPriDig * 9 + a1 * 8 + a2 * 7) % 11;
  if (titSegDig == 0) { titExcecao2 = 1; }
  if (titSegDig == 10) { titSegDig = 0; }
  if ((a2 * 10 + a1 == 1 || a2 * 10 + a1 == 2) && (titExcecao2 == 1)) { titSegDig = 1; }

  let titDV: any = titPriDig * 10 + titSegDig;
  if (titDV == 0) { titDV = "00"; }
  if (titDV > 0 && titDV < 10) { titDV = "0" + titDV; }

  return titDV.toString();
}