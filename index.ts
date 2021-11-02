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
} from './src/utils';
export { validateBr } from './src/validate';
import faker from './src/faker';
import * as mask from './src/mask';
import { MASKS, MASKSIE } from './src/mask';
import { PLACAS_RANGE } from './src/placa';
import { ESTADOS } from './src/estados';
import { BigObject } from './src/interfaces';

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
export const fakerBr: BigObject<Function> = faker;