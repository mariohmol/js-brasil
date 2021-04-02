import { BigObject } from './interfaces';

export function rg_sp(number: string) {
  // if(number.length>8){alert("Erro. Não existe RG SP\ncom mais de 8 dígitos.");}

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

  let cispDig: any = (b1 * 2 + b2 * 3 + b3 * 4 + b4 * 5 + b5 * 6 + b6 * 7 + b7 * 8 + b8 * 9) % 11;
  if (cispDig == 10) {
    cispDig = "X";
  }

  return cispDig;
}

export function rg_rj(number: string) {


  // if(number.length>8){alert("Erro. Não existe RG-RJ/MaSP-MG\ncom mais de 8 dígitos.");}

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

  let ci7 = b1 * 2; if (ci7 > 9) { ci7 = ci7 - 9; }
  let ci56 = b3 * 2; if (ci56 > 9) { ci56 = ci56 - 9; }
  let ci34 = b5 * 2; if (ci34 > 9) { ci34 = ci34 - 9; }
  let ci12 = b7 * 2; if (ci12 > 9) { ci12 = ci12 - 9; }
  let ci67 = b2;
  let ci45 = b4;
  let ci23 = b6;
  let ci01 = b8;

  let cirjDig = (ci7 + ci56 + ci34 + ci12 + ci67 + ci45 + ci23 + ci01) % 10;
  cirjDig = 10 - cirjDig; if (cirjDig == 10) { cirjDig = 0; }

  return cirjDig;
}

const RG: BigObject<Function> = {
  sp: rg_sp,
  rj: rg_rj
}

export default RG;
