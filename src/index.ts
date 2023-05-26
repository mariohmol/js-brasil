import {
  isPresent,
  isArray,
  isString,
  isNumber,
  isNil,
  processCaretTraps,
  allNumbersAreSame,
  getAllDigits,
  getAllWords,
  currencyToNumber,
  modulo11,
  numberToCurrency,
  slugify,
  fillString,
  randArray,
  rand,
  randomNumber,
  randomLetter,
  randomLetterOrNumber,
  getSpecialProperty
} from './utils';
export { validateBr } from './validate';
import * as mask from './mask';
import { MASKS, MASKSIE } from './mask';
import { PLACAS_RANGE } from './placa';
import { ESTADOS } from './estados';
import { BigObject } from './interfaces';

export const utilsBr = {
  isPresent,
  isArray,
  isString,
  isNumber,
  isNil,
  processCaretTraps,
  allNumbersAreSame,
  getAllDigits,
  getAllWords,
  currencyToNumber,
  modulo11,
  numberToCurrency,
  slugify,
  fillString,
  randArray,
  rand,
  randomNumber,
  randomLetter,
  randomLetterOrNumber,
  getSpecialProperty,
  MASKS,
  MASKSIE,
  PLACAS_RANGE,
  ESTADOS
};

export const maskBr: BigObject<Function> = mask.maskBr;