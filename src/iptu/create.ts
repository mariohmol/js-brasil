import { getAllDigits, makeGenericFaker } from '../utils';
import { IPTUMASKS } from './mask';
import { BigObject } from '../interfaces';

export function create_iptu_ctba(number: string) {
  number = getAllDigits(number);
  let a1 = parseInt(number.slice(10));
  let a2 = parseInt(number.slice(9, 10));
  let a3 = parseInt(number.slice(8, 9));
  let a4 = parseInt(number.slice(7, 8));
  let a5 = parseInt(number.slice(6, 7));
  let a6 = parseInt(number.slice(5, 6));
  let a7 = parseInt(number.slice(4, 5));
  let a8 = parseInt(number.slice(3, 4));
  let a9 = parseInt(number.slice(2, 3));
  let a10 = parseInt(number.slice(1, 2));
  let a11 = parseInt(number.slice(0, 1));

  let iptuctbaDV = 10 - ((a1 * 2 + a2 * 3 + a3 * 4 + a4 * 7 + a5 * 8 + a6 * 9 + a7 * 2 + a8 * 3 + a9 * 4 + a10 * 7 + a11 * 8) % 10);
  if (iptuctbaDV == 10) { iptuctbaDV = 0; }
  return iptuctbaDV;
}

export function create_iptu_sp(number: string) {
  let a1 = parseInt(number.slice(9));
  let a2 = parseInt(number.slice(8, 9));
  let a3 = parseInt(number.slice(7, 8));
  let a4 = parseInt(number.slice(6, 7));
  let a5 = parseInt(number.slice(5, 6));
  let a6 = parseInt(number.slice(4, 5));
  let a7 = parseInt(number.slice(3, 4));
  let a8 = parseInt(number.slice(2, 3));
  let a9 = parseInt(number.slice(1, 2));
  let a10 = parseInt(number.slice(0, 1));

  let iptuspDV = (a1 * 9 + a2 * 8 + a3 * 7 + a4 * 6 + a5 * 5 + a6 * 4 + a7 * 3 + a8 * 2 + a9 + a10 * 10) % 11;
  if (iptuspDV == 10) { iptuspDV = 1; }
  return iptuspDV;
}


export const faker_iptu = (estado: string | number, cidade: string | number) => {
  if (!IPTUMASKS[estado] || !IPTUMASKS[estado][cidade]) {
    return;
  }
  let iptu = makeGenericFaker(IPTUMASKS[estado][cidade])();
  if (IPTUCREATE[estado] && IPTUCREATE[estado][cidade]) {
    const dv = IPTUCREATE[estado][cidade](iptu);
    const values = iptu.split('');
    values[values.length - 1] = dv;
    iptu = values.join('');
  }
  return iptu;
}

export const IPTUCREATE: BigObject<BigObject<Function>> = {
  'sao-paulo': {
    'sao-paulo': create_iptu_sp,
  },
  'parana': {
    'curitiba': create_iptu_ctba
  }
}