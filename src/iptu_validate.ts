import { getAllDigits } from './utils';
import { IPTUCREATE } from './iptu_create';
import { BigObject } from './interfaces';

const validateRemoveDigito = (number: string | any[], max: number) => {
  number = getAllDigits(number.toString());
  if (number.length > max) {
    return false;
  } else if (number.length === max) {
    number = number.slice(0, -1)
  }
  return number;
}

export function validate_iptu_ctba(value: string | any[]) {
  let number = validateRemoveDigito(value, 12);
  if (!number) {
    return false;
  }

  const dv = IPTUCREATE['parana']['curitiba'](number);
  return parseInt(value[value.length - 1]) === dv;
}

/**
 * Índice Cadastral, ou inscrição imobiliária,  é o número de identificação do imóvel no cadastro da Prefeitura de Contagem. 
 * O índice é composto por 12 (doze) ou 13 (treze) números, sendo: 2 (dois) para a zona fiscal; 
 * 3 (três) ou 4 (quatro) para a quadra fiscal; 4 (quatro) para o lote fiscal; e 3 (três) para a unidade.
 */
export function validate_iptu_contagem(number: any) {
  number = validateRemoveDigito(number, 12);
  if (!number) {
    return false;
  }
  return true;
}

export function validate_iptu_sp(value: string | any[]) {
  let number = validateRemoveDigito(value, 12);
  if (!number) {
    return false;
  }
  const dv = IPTUCREATE['sao-paulo']['sao-paulo'](number);
  return parseInt(value[value.length - 1]) === dv;
}

// export function validate_iptu(iptu: string) {
//   let iptuClean = iptu.replace(/\./g, '');
//   iptuClean = iptuClean.replace(/-/g, '');
//   const exp = /[a-z]{2}\-\d{2}\.\d{3}\.\d{3}/;
//   const expClean = /[a-z]{2}\d{8}/;
//   const state = iptu.substr(0, 2).toUpperCase();

//   if (!exp.test(iptu) && !expClean.test(iptuClean) && !(state in CEPRange)) {
//     return false;
//   }
//   if (IPTU[state]) {
//     const validateState = IPTU[state];
//     return validateState(iptu);
//   }
//   return true;
// }

export const IPTUVALIDATE: BigObject<BigObject<Function>> = {
  'sao-paulo': {
    'sao-paulo': validate_iptu_sp,
  },
  'minas-gerais': {
    'contagem': validate_iptu_contagem,
  },
  'parana': {
    'curitiba': validate_iptu_ctba
  }
}